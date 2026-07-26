import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { ArrowLeft, CheckCircle2, CreditCard, Loader2, MapPin, Package, Plus } from "lucide-react";
import { useEffect, useRef, useState, type RefObject } from "react";
import { noImage } from "~/assets/images";
import { setToast } from "~/lib/session.server";
import { partnerServer } from "~/services/partner/partner.server";
import { PaymentOptionKey } from "~/services/partner/types/partner.interface";
import type {
  Cart,
  CreateDeliveryDetails,
  DeliveryDetails,
  ICartDeliveryAndPaymentOptions,
  PaymentOption,
  PlaceOrderDTO,
  OrderResponse,
} from "~/services/partner/types/partner.interface";

type CheckoutLoaderData = {
  cart: Cart | null;
  saved_delivery_details: DeliveryDetails[];
  payment_options: PaymentOption[];
  error?: string | null;
};

type CheckoutActionData = {
  error?: string | null;
  delivery_details?: DeliveryDetails | null;
};

function formatMoney(currency: string, value: number) {
  return `${currency} ${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(value)}`;
}

function buildDeliveryDetailsPayload(formData: FormData): CreateDeliveryDetails {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone_number = String(formData.get("phone_number") ?? "").trim();
  const street = String(formData.get("location_street") ?? "").trim();
  const city = String(formData.get("location_city") ?? "").trim();
  const state = String(formData.get("location_state") ?? "").trim();
  const country = String(formData.get("location_country") ?? "").trim();

  return {
    ...(name ? { name } : {}),
    ...(email ? { email } : {}),
    phone_number,
    location: {
      street,
      city,
      state,
      country,
    },
  };
}

function buildSharedPrepayLink(orders: OrderResponse[]) {
  if (!orders.length) return null;
  if (!orders.every(order => order.payment_details?.payment_option === PaymentOptionKey.prepay)) return null;

  const links = orders.map(order => order.payment_details?.payment_link?.trim()).filter((link): link is string => !!link);
  if (links.length !== orders.length) return null;

  const uniqueLinks = new Set(links);
  return uniqueLinks.size === 1 ? links[0] : null;
}

function buildLoaderData(data: ICartDeliveryAndPaymentOptions | undefined, error?: string | null): CheckoutLoaderData {
  return {
    cart: data?.cart ?? null,
    saved_delivery_details: data?.saved_delivery_details ?? [],
    payment_options: data?.payment_options ?? [],
    error: error ?? null,
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? undefined;
  const checkoutRes = await partnerServer.getCartDeliveryAndPaymentOptions(cookieHeader);

  if (checkoutRes.error) {
    return json<CheckoutLoaderData>(
      buildLoaderData(undefined, typeof checkoutRes.error.detail === "string" ? checkoutRes.error.detail : "Unable to load checkout details")
    );
  }

  return json<CheckoutLoaderData>(buildLoaderData(checkoutRes.data));
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = String(formData.get("intent") ?? "");
  const cookieHeader = request.headers.get("Cookie") ?? undefined;

  if (intent === "create-delivery-details") {
    const payload = buildDeliveryDetailsPayload(formData);

    if (!payload.phone_number) {
      return json<CheckoutActionData>({ error: "Phone number is required" }, { status: 400 });
    }

    if (!payload.location || !payload.location.street || !payload.location.city || !payload.location.state || !payload.location.country) {
      return json<CheckoutActionData>({ error: "Delivery address is required" }, { status: 400 });
    }

    const detailsRes = await partnerServer.createDeliveryDetails(payload, cookieHeader);

    if (detailsRes.error) {
      return json<CheckoutActionData>(
        {
          error: typeof detailsRes.error.detail === "string" ? detailsRes.error.detail : "Unable to save delivery details",
        },
        { status: 400 }
      );
    }

    const { headers } = await setToast({
      request,
      toast: `success::Delivery details saved successfully::${Date.now()}`,
    });

    return json<CheckoutActionData>(
      {
        delivery_details: detailsRes.data,
      },
      { headers }
    );
  }

  if (intent === "place-order") {
    const delivery_details_id = String(formData.get("delivery_details_id") ?? "").trim();
    const payment_option_raw = String(formData.get("payment_option") ?? "").trim();

    if (!delivery_details_id) {
      return json<CheckoutActionData>({ error: "Please select a delivery address" }, { status: 400 });
    }

    if (!payment_option_raw) {
      return json<CheckoutActionData>({ error: "Please select a payment option" }, { status: 400 });
    }

    const payment_option = payment_option_raw as PaymentOptionKey;
    const payload: PlaceOrderDTO = {
      delivery_details_id,
      payment_option,
    };

    if (payment_option === PaymentOptionKey.prepay) {
      if(cookieHeader){
        payload.prepay_redirect_url = new URL("/user/orders", request.url).toString();
      }
      else{
        payload.prepay_redirect_url = new URL("/marketplace/orders", request.url).toString();

      }
    }

    const ordersRes = await partnerServer.placeOrder(payload, cookieHeader);

    if (ordersRes.error) {
      return json<CheckoutActionData>(
        {
          error: typeof ordersRes.error.detail === "string" ? ordersRes.error.detail : "Unable to place order",
        },
        { status: 400 }
      );
    }

    const sharedPaymentLink = buildSharedPrepayLink(ordersRes.data ?? []);
    if (sharedPaymentLink) {
      return redirect(sharedPaymentLink);
    }

    const { headers } = await setToast({
      request,
      toast: `success::Your order has been placed successfully::${Date.now()}`,
    });

    return redirect("/marketplace/orders", { headers });
  }

  return json<CheckoutActionData>({ error: "Unsupported checkout action" }, { status: 400 });
}

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-4 w-24 rounded-full bg-slate-200" />
      <div className="mt-4 h-5 w-2/3 rounded-full bg-slate-200" />
      <div className="mt-3 h-4 w-full rounded-full bg-slate-200" />
      <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
    </div>
  );
}

function CheckoutSkeleton() {
  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <div className="h-10 w-40 rounded-full bg-slate-200" />
            <div className="h-12 w-full max-w-2xl rounded-full bg-slate-200" />
            <div className="h-5 w-full max-w-xl rounded-full bg-slate-200" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <SkeletonCard />
      </section>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </div>
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <p className="max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function CartItemCard({ item }: { item: Cart["cart_items"][number] }) {
  const product = item.product;
  const imageSrc = product.main_image_url || product.image_urls?.[0] || noImage;
  const locationLabel = product.product_locations?.find(location => location.str_id === item.product_location_id)?.name
    ?? product.product_locations?.find(location => location.is_primary)?.name
    ?? product.product_locations?.[0]?.name
    ?? "Default location";

  return (
    <article className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_1fr] sm:p-5">
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img src={imageSrc} alt={product.name} className="aspect-square h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-950">{product.name}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500 line-clamp-2">{product.description}</p>
          </div>
          <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
            {product.category || "Uncategorized"}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="font-bold text-slate-900">
            {product.price_min === 0 && product.price_max === 0
              ? "Free"
              : product.price_min === product.price_max
                ? formatMoney(product.currency, product.price_min)
                : `${formatMoney(product.currency, product.price_min)} - ${formatMoney(product.currency, product.price_max)}`}
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-500">{locationLabel}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(product.tags ?? []).slice(0, 4).map(tag => (
            <span key={`${product._id}-${tag}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function DeliveryCard({
  deliveryDetails,
  checked,
  onSelect,
}: {
  deliveryDetails: DeliveryDetails;
  checked: boolean;
  onSelect: (value: string) => void;
}) {
  const location = deliveryDetails.location;

  return (
    <label className={`cursor-pointer rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 ${
      checked ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"
    }`}>
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name="delivery_details_id"
          value={deliveryDetails.str_id}
          checked={checked}
          onChange={e => onSelect(e.target.value)}
          className="mt-1 h-4 w-4 border-slate-300 text-slate-950 focus:ring-slate-950"
          required
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-950">{deliveryDetails.name || "Saved delivery details"}</h3>
              <p className="text-sm text-slate-500">{deliveryDetails.phone_number}</p>
            </div>
            {deliveryDetails.email ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{deliveryDetails.email}</span>
            ) : null}
          </div>

          {location ? (
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {location.street}, {location.city}, {location.state}, {location.country}
            </p>
          ) : null}
        </div>
      </div>
    </label>
  );
}

function PaymentOptionCard({
  paymentOption,
  checked,
  onSelect,
}: {
  paymentOption: PaymentOption;
  checked: boolean;
  onSelect: (value: PaymentOptionKey) => void;
}) {
  return (
    <label className={`cursor-pointer rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 ${
      checked ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"
    }`}>
      <div className="flex items-start gap-3">
        <input
          type="radio"
          name="payment_option"
          value={paymentOption.key}
          checked={checked}
          onChange={e => onSelect(e.target.value as PaymentOptionKey)}
          className="mt-1 h-4 w-4 border-slate-300 text-slate-950 focus:ring-slate-950"
          required
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-950">{paymentOption.name}</h3>
              <p className="text-sm text-slate-500">{paymentOption.description}</p>
            </div>
            <span className="rounded-full bg-[#EEF0FF] px-3 py-1 text-xs font-semibold text-accent">
              {paymentOption.key === PaymentOptionKey.prepay ? "Prepay" : "Pay in person"}
            </span>
          </div>
        </div>
      </div>
    </label>
  );
}

function DeliveryDetailsForm({
  fetcher,
  formRef,
}: {
  fetcher: any;
  formRef: RefObject<HTMLFormElement>;
}) {
  return (
    <fetcher.Form ref={formRef} method="post" className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
      <input type="hidden" name="intent" value="create-delivery-details" />
      <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
        <Plus className="h-4 w-4" />
        Add delivery details
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Name</span>
          <input name="name" className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="Full name" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Email</span>
          <input name="email" type="email" className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="email@example.com" />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Phone number</span>
          <input name="phone_number" type="tel" required className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="+234..." />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Street</span>
          <input name="location_street" required className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="Street address" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">City</span>
          <input name="location_city" required className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="City" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">State</span>
          <input name="location_state" required className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="State" />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Country</span>
          <input name="location_country" required className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-slate-950 focus:bg-white" placeholder="Country" />
        </label>
      </div>

      {fetcher.data?.error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {fetcher.data.error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={fetcher.state !== "idle"}
        className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70"
      >
        {fetcher.state !== "idle" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save delivery details"
        )}
      </button>
    </fetcher.Form>
  );
}

export default function MarketplaceCheckout() {
  const { cart, saved_delivery_details, payment_options, error } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const deliveryFetcher = useFetcher<CheckoutActionData>();
  const deliveryFormRef = useRef<HTMLFormElement>(null);
  const [deliveryDetails, setDeliveryDetails] = useState(saved_delivery_details);
  const [selectedDeliveryDetailsId, setSelectedDeliveryDetailsId] = useState(saved_delivery_details[0]?.str_id ?? "");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<PaymentOptionKey | "">("");

  const cartItems = cart?.cart_items ?? [];
  const availablePaymentOptions = payment_options.filter(option => option.is_available);
  const isPlacingOrder = navigation.state === "submitting" && navigation.formData?.get("intent") === "place-order";
  const canPlaceOrder = cartItems.length > 0 && Boolean(selectedDeliveryDetailsId) && Boolean(selectedPaymentOption);

  useEffect(() => {
    if (saved_delivery_details.length > 0 && deliveryDetails.length === 0) {
      setDeliveryDetails(saved_delivery_details);
      setSelectedDeliveryDetailsId(saved_delivery_details[0]?.str_id ?? "");
    }
  }, [deliveryDetails.length, saved_delivery_details]);

  useEffect(() => {
    if (deliveryFetcher.state === "idle" && deliveryFetcher.data?.delivery_details) {
      setDeliveryDetails(prev => {
        const next = [deliveryFetcher.data!.delivery_details!, ...prev.filter(item => item.str_id !== deliveryFetcher.data!.delivery_details!.str_id)];
        return next;
      });
      setSelectedDeliveryDetailsId(deliveryFetcher.data.delivery_details.str_id);
      deliveryFormRef.current?.reset();
    }
  }, [deliveryFetcher.data, deliveryFetcher.state]);

  if (!cart && !error && !saved_delivery_details.length && !payment_options.length && navigation.state === "loading") {
    return <CheckoutSkeleton />;
  }

  return (
    <main className="w-full overflow-y-auto bg-[#f7f7f4] p-4 sm:p-6 lg:p-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <Link
              to="/marketplace/cart"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to cart
            </Link>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Checkout
              </div>
              <h1 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                Confirm delivery details and choose how you want to pay.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Review your cart, select a saved delivery address, or create a new one before placing your order.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1 xl:w-[520px] xl:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Items</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{cartItems.reduce((total, item) => total + item.quantity, 0)}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Delivery options</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{deliveryDetails.length}</div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Payment options</div>
              <div className="mt-2 text-3xl font-black text-slate-950">{availablePaymentOptions.length}</div>
            </div>
          </div>
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {error}
          </div>
        ) : null}

        {actionData?.error ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {actionData.error}
          </div>
        ) : null}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <SectionTitle
              eyebrow="Cart"
              title="Your items"
              description="These are the products currently in your cart and ready to be ordered."
            />

            <div className="mt-5 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map(item => <CartItemCard key={`${item.product_id}-${item.product_location_id ?? "default"}`} item={item} />)
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                  <Package className="mx-auto h-10 w-10 text-slate-300" />
                  <h3 className="mt-4 text-xl font-black text-slate-950">Your cart is empty</h3>
                  <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                    Add products from the marketplace before continuing to checkout.
                  </p>
                  <Link
                    to="/marketplace"
                    className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Browse products
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <SectionTitle
              eyebrow="Delivery"
              title="Saved delivery details"
              description="Select an existing delivery profile or add a new one for this order."
            />

            <div className="mt-5 grid gap-4">
              {deliveryDetails.length > 0 ? (
                deliveryDetails.map(detail => (
                  <DeliveryCard
                    key={detail.str_id}
                    deliveryDetails={detail}
                    checked={selectedDeliveryDetailsId === detail.str_id}
                    onSelect={setSelectedDeliveryDetailsId}
                  />
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-sm text-slate-500">
                  No delivery details have been saved yet.
                </div>
              )}
            </div>

            <div className="mt-6">
              <DeliveryDetailsForm fetcher={deliveryFetcher} formRef={deliveryFormRef} />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <SectionTitle
              eyebrow="Payment"
              title="Choose a payment option"
              description="Only available payment options are shown here."
            />

            <div className="mt-5 grid gap-4">
              {availablePaymentOptions.length > 0 ? (
                availablePaymentOptions.map(option => (
                  <PaymentOptionCard
                    key={option.key}
                    paymentOption={option}
                    checked={selectedPaymentOption === option.key}
                    onSelect={setSelectedPaymentOption}
                  />
                ))
              ) : (
                <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-sm text-slate-500">
                  No payment options are currently available.
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <SectionTitle
              eyebrow="Summary"
              title="Review and place order"
              description="Final check before we submit your order to the backend."
            />

            <div className="mt-5 space-y-4">
              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Delivery</div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  {selectedDeliveryDetailsId
                    ? deliveryDetails.find(detail => detail.str_id === selectedDeliveryDetailsId)?.name ?? "Selected delivery details"
                    : "No delivery details selected"}
                </div>
              </div>

              <div className="rounded-[1.25rem] bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Payment</div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  {selectedPaymentOption
                    ? availablePaymentOptions.find(option => option.key === selectedPaymentOption)?.name ?? "Selected payment option"
                    : "No payment option selected"}
                </div>
              </div>

              <div className="rounded-[1.25rem] bg-slate-950 p-4 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Estimated total</div>
                <div className="mt-2 text-2xl font-black">
                  {cart ? `${formatMoney(cart.currency, cart.minimum_total_amount)}${cart.maximum_total_amount !== cart.minimum_total_amount ? ` - ${formatMoney(cart.currency, cart.maximum_total_amount)}` : ""}` : "NGN 0"}
                </div>
              </div>
            </div>

            <Form method="post" className="mt-6 space-y-4">
              <input type="hidden" name="intent" value="place-order" />

              <div className="grid gap-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
                  <MapPin className="h-4 w-4" />
                  Delivery selection
                </div>
                {deliveryDetails.length > 0 ? (
                  <div className="grid gap-3">
                    {deliveryDetails.map(detail => (
                      <label
                        key={detail.str_id}
                        className={`cursor-pointer rounded-2xl border p-3 transition hover:-translate-y-0.5 ${
                          selectedDeliveryDetailsId === detail.str_id ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery_details_id"
                          value={detail.str_id}
                          checked={selectedDeliveryDetailsId === detail.str_id}
                          onChange={e => setSelectedDeliveryDetailsId(e.target.value)}
                          className="sr-only"
                          required
                        />
                        <div className="text-sm font-semibold text-slate-950">{detail.name || "Saved delivery details"}</div>
                        <div className="text-xs text-slate-500">{detail.phone_number}</div>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">Add a delivery profile before placing an order.</p>
                )}
              </div>

              <div className="grid gap-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
                  <CreditCard className="h-4 w-4" />
                  Payment selection
                </div>
                {availablePaymentOptions.length > 0 ? (
                  <div className="grid gap-3">
                    {availablePaymentOptions.map(option => (
                      <label
                        key={option.key}
                        className={`cursor-pointer rounded-2xl border p-3 transition hover:-translate-y-0.5 ${
                          selectedPaymentOption === option.key ? "border-slate-950 bg-slate-50" : "border-slate-200 bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment_option"
                          value={option.key}
                          checked={selectedPaymentOption === option.key}
                          onChange={e => setSelectedPaymentOption(e.target.value as PaymentOptionKey)}
                          className="sr-only"
                          required
                        />
                        <div className="text-sm font-semibold text-slate-950">{option.name}</div>
                        <div className="text-xs text-slate-500">{option.description}</div>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">No available payment methods were returned.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!canPlaceOrder || isPlacingOrder}
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPlacingOrder ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Placing order...
                  </>
                ) : (
                  "Place order"
                )}
              </button>

              {!canPlaceOrder ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  Select a delivery detail and a payment option before placing your order.
                </div>
              ) : null}
            </Form>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
              <CheckCircle2 className="h-4 w-4" />
              Checkout notes
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>Only payment options marked available are shown.</li>
              <li>If you choose prepay, we will hand you off to the payment link returned by the backend.</li>
              <li>Delivery details saved here can be reused on future orders.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
