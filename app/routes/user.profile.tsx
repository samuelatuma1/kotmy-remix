import { Form, useLoaderData, useActionData, useNavigate } from "@remix-run/react";
import { LoaderFunctionArgs, ActionFunctionArgs, json } from "@remix-run/node";
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
  const { data, error } = await authServer.getMe(cookieHeader || "");
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

  return { profile, email, imagePreview, fileInputRef, handleImageChange };
}

export default function UserProfilePage() {
  const { profile, email, imagePreview, fileInputRef, handleImageChange } = useUserProfileController();
  const isLoading = !profile && !email;
  return (
    <div className="min-h-screen text-gray-900 bg-secondary flex flex-col items-center pt-24 pb-16">
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 mb-4">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            ) : imagePreview ? (
              <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <Svg src={icons.avatarIcon} className="w-full h-full" />
            )}
          </div>
          {isLoading ? (
            <>
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2" />
              <div className="h-5 w-56 bg-gray-200 rounded animate-pulse" />
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900">{profile?.first_name} {profile?.last_name}</h1>
              <p className="text-lg text-gray-600">{email}</p>
            </>
          )}
        </div>
        {isLoading ? (
          <div className="bg-white border rounded-3xl p-8 flex flex-col gap-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 bg-gray-200 rounded animate-pulse" />
          </div>
        ) : (
          <Form method="POST" encType="multipart/form-data" className="bg-white border rounded-3xl p-8 flex flex-col gap-6">
            <FormControl as="input" id="first_name" name="first_name" labelText="First Name" defaultValue={profile?.first_name} icon={icons.avatarIcon} required />
            <FormControl as="input" id="last_name" name="last_name" labelText="Last Name" defaultValue={profile?.last_name} icon={icons.avatarIcon} required />
            <FormControl as="input" id="email" name="email" labelText="Email" defaultValue={email} icon={icons.avatarIcon} required readOnly />
            <FormControl as="input" id="status" name="status" labelText="Status" defaultValue={profile?.status} icon={icons.avatarIcon} />
            <label htmlFor="image" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Svg src={icons.avatarIcon} className="w-4 h-4" />
              Profile Image
            </label>
            
            <DragnDrop name="image" labelText="Upload Image" multiple={false} required={false} />
            <Cta element="button" type="submit" className="rounded-lg p-3">Update Profile</Cta>
          </Form>
        )}
      </div>
    </div>
  );
}
