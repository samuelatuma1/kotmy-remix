import { Form, useLoaderData, useActionData, useNavigate } from "@remix-run/react";
import { LoaderFunctionArgs, ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { authServer } from "~/services/auth/auth.server";
import { ILoginResponseDTO, UserProfile } from "~/services/auth/types/auth.dtos";
import { toast, useToast } from "~/components/reusables/use-toast";
import Svg from "~/components/reusables/Svg";
import Cta from "~/components/reusables/Cta";
import FormControl from "~/components/reusables/FormControl";
import { icons } from "~/assets/icons";
import DragnDrop from "~/components/public/contests/DragnDrop";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) {
      // User is not signed in
      return redirect("/login"); 
    }
  const { data, error, authRequired } = await authServer.getMe(cookieHeader || "");
    if (authRequired) {
      // User is authenticated
      return redirect("/login"); 
    }
  return json({ data, error });
}

export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const formData = await request.formData();
  
  const updateData = authServer.prepareUpdateUserPayload(formData)

  const { data, error } = await authServer.updateProfile(updateData, cookieHeader || "");
  return json({ data, error });
}

function useUserProfileController() {
  const { toast } = useToast();
  const loaderData = useLoaderData<{ data: ILoginResponseDTO; error: any }>();
  const actionData = useActionData<{ data?: ILoginResponseDTO; error?: any }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(loaderData?.data?.user_profile || null);
  const [email, setEmail] = useState<string>(loaderData?.data?.email || "");
  const [referralCode, setReferralCode] = useState<string>(loaderData?.data?.referral_code || "");
  const [imagePreview, setImagePreview] = useState<string | undefined>(profile?.image_url);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update profile.",
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
      setProfile(actionData.data.user_profile || null);
      setEmail(actionData.data.email || "");
      setReferralCode(actionData.data.referral_code || "")
      setImagePreview(actionData.data.user_profile?.image_url);
    }
  }, [actionData]);
 
  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return { profile, email, imagePreview, fileInputRef, handleImageChange, referralCode };
}

export default function UserProfilePage() {
  const { profile, email, imagePreview, fileInputRef, handleImageChange, referralCode } = useUserProfileController();
  const isLoading = !profile && !email;
  return (
    <div className="min-h-screen bg-white text-brand-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
          <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
            <div className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-pink px-6 py-8 text-white sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Account</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Profile settings</h1>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                Update your status here. Friends and family love to check your status.
              </p>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-secondary shadow-[0_10px_30px_rgba(14,42,77,0.12)]">
                    {isLoading ? (
                      <div className="h-full w-full animate-pulse bg-secondary" />
                    ) : imagePreview ? (
                      <img src={imagePreview} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <Svg src={icons.avatarIcon} className="h-full w-full" />
                    )}
                  </div>
                  <div className="absolute -right-1 bottom-2 h-5 w-5 rounded-full border-2 border-white bg-brand-gold" />
                </div>

                <div className="mt-5">
                  {isLoading ? (
                    <div className="space-y-3">
                      <div className="mx-auto h-8 w-44 animate-pulse rounded-full bg-secondary" />
                      <div className="mx-auto h-4 w-56 animate-pulse rounded-full bg-secondary" />
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-black tracking-tight text-brand-navy">
                        {profile?.first_name} {profile?.last_name}
                      </h2>
                      <p className="mt-2 text-sm text-brand-slate">{email}</p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-3 ">
                <InfoChip label="Referral code" value={referralCode || "Unavailable"} />
                <InfoChip label="Status" value={profile?.status || "Active"} />
              </div>

              
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
            <div className="border-b border-brand-grey px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate">Details</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-brand-navy">Edit profile</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-brand-slate">
                {/* Update your personal information and upload a new photo. Your email and referral code remain locked. */}
              </p>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              {isLoading ? (
                <ProfileSkeleton />
              ) : (
                <Form method="POST" encType="multipart/form-data" className="grid gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormControl as="input" id="first_name" name="first_name" labelText="First Name" defaultValue={profile?.first_name} icon={icons.avatarIcon} required />
                    <FormControl as="input" id="last_name" name="last_name" labelText="Last Name" defaultValue={profile?.last_name} icon={icons.avatarIcon} required />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormControl as="input" id="email" name="email" labelText="Email" defaultValue={email} icon={icons.avatarIcon} required readOnly />
                    <FormControl as="input" id="status" name="status" labelText="Status" defaultValue={profile?.status} icon={icons.avatarIcon} />
                  </div>

                  <FormControl as="input" id="" name="" labelText="Referral code" defaultValue={referralCode} icon={icons.lockIcon} required readOnly />

                  <div className="rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                      <Svg src={icons.avatarIcon} className="h-4 w-4" />
                      Profile Image
                    </div>
                    <p className="mt-2 text-sm leading-6 text-brand-slate">
                      Upload display picture
                    </p>
                    <div className="mt-5">
                      <DragnDrop name="image" labelText="Upload Image" multiple={false} required={false} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <Cta element="button" type="submit" className="min-w-[180px] rounded-full px-6 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(237,60,90,0.2)]">
                      Update Profile
                    </Cta>
                  </div>
                </Form>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-brand-grey bg-white px-4 py-3 shadow-[0_6px_20px_rgba(14,42,77,0.04)] ">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate ">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-brand-navy ">{value}</p>
    </div>
  )
}

function ProfileSkeleton() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-secondary" />
          <div className="h-14 rounded-2xl bg-secondary" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-secondary" />
          <div className="h-14 rounded-2xl bg-secondary" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-secondary" />
          <div className="h-14 rounded-2xl bg-secondary" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-secondary" />
          <div className="h-14 rounded-2xl bg-secondary" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="h-3 w-28 rounded-full bg-secondary" />
        <div className="rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5">
          <div className="h-4 w-40 rounded-full bg-white/80" />
          <div className="mt-3 h-4 w-3/4 rounded-full bg-white/80" />
          <div className="mt-5 h-12 rounded-2xl bg-white/80" />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="h-12 w-44 rounded-full bg-secondary" />
      </div>
    </div>
  )
}
