import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import Cta from "~/components/reusables/Cta";
import FormControl from "~/components/reusables/FormControl";
import { useToast } from "~/components/reusables/use-toast";
import { authServer } from "~/services/auth/auth.server";
import type { IForgotPasswordDTO } from "~/services/auth/types/auth.dtos";

type ActionData = {
  error?: string;
  message?: string;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return json({
    baseUrl: process.env._BASE_URL ?? url.origin,
    resetPath: "/resetpassword",
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const dto: IForgotPasswordDTO = {
    email: String(formData.get("email") ?? ""),
    redirect_link: String(formData.get("redirect_link") ?? ""),
  };

  const { error, data } = await authServer.forgotPassword(dto);

  if (error) {
    return json<ActionData>(
      {
        error: error.detail?.toString() || "Could not send reset email.",
      },
      { status: 400 }
    );
  }

  return json<ActionData>({
    message: typeof data === "string" ? data : "Reset email sent successfully.",
  });
}

export default function ForgotPassword() {
  const { baseUrl, resetPath } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { toast: pushToast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const redirectLink = useMemo(() => {
    const origin = baseUrl.replace(/\/$/, "");
    return `${origin}${resetPath}`;
  }, [baseUrl, resetPath]);

  const isValidEmail = /\S+@\S+\.\S+/.test(email.trim());
  const isSubmitting = navigation.state !== "idle";

  useEffect(() => {
    if (actionData?.error) {
      pushToast({
        variant: "destructive",
        title: "Request failed",
        description: actionData.error,
      });
    }

    if (actionData?.message) {
      setEmail("");
      setMessage(actionData.message);
      pushToast({
        title: "Email sent",
        description: actionData.message,
      });
    }
  }, [actionData, pushToast]);

  return (
    <main className="min-h-dvh bg-secondary p-4 flex flex-col">
      <section className="grow flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border bg-white p-5 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-satoshi-bold">Forgot password</h1>
            <Link to="/login" className="text-sm font-medium text-primary underline">
              Back to login
            </Link>
          </div>

          <Form method="post" className="mt-6 flex flex-col gap-4">
            <input type="hidden" name="redirect_link" value={redirectLink} />

            <FormControl
              as="input"
              id="email"
              name="email"
              labelText="Email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              required
            />
            {
              message && (
                <p className="text-sm text-black-600">{message}</p>
              )
            }
            <Cta
              element="button"
              type="submit"
              disabled={!isValidEmail || isSubmitting}
              className="rounded-xl p-3 font-medium transition-transform duration-200 hover:scale-[1.01]"
            >
              {isSubmitting ? "Sending..." : "Send reset email"}
            </Cta>
          </Form>
        </div>
      </section>
    </main>
  );
}
