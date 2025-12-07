import { Form, Link, useActionData, useNavigate, useSearchParams } from "@remix-run/react";
import { icons } from "~/assets/icons";
import { adminAvatar } from "~/assets/images";
import FormControl from "~/components/reusables/FormControl";
import Cta from "~/components/reusables/Cta";
import Svg from "~/components/reusables/Svg";
import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useEffect } from "react";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { toast, useToast } from "~/components/reusables/use-toast";
import DragnDrop from "~/components/public/contests/DragnDrop";
import { authServer } from "~/services/auth/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const signupData = authServer.prepareUserSignupPayload(formData);
  const { error, data, headers} = await authServer.signup(signupData);

  let responseHeaders : Record<string, string> = {};
  if(error){
        return { error: error.detail?.toString() || "An error occurred during login.", data: null};
    }

  if(headers?.['Set-Cookie']){
        const setCookieHeader = headers?.['Set-Cookie'];
        responseHeaders = { "Set-Cookie": setCookieHeader }
        return json({ data, error: null }, { 
            headers: responseHeaders 
         });
    }

  return json({ error, data, headers });
}

function useSignupController() {
  const actionData = useActionData<typeof action>();
  const [searchQuery] = useSearchParams();
  const { setUserStoreManager } = useUserManager();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Sign Up Failed",
        description: actionData.error,
      });

      actionData.error = "";
    }
  }, [actionData?.error]);

  useEffect(() => {
    if (actionData?.data) {
      setUserStoreManager(actionData.data, true);
      navigate(searchQuery.get("redirectTo") || "/user/profile");
      return;
    }
  }, [actionData?.data]);
  return { actionData };
}

export default function Signup() {
  const { actionData } = useSignupController();
  return (
    <main className="bg-secondary p-4 flex flex-col">
      <Link to={'/'} aria-label='home'>
        <Svg src={icons.logoIcon} className='w-14 h-14 sm:w-16 sm:h-16' />
      </Link>
      <section className="grow flex flex-col justify-center items-center">
        
        <Form method="POST" encType="multipart/form-data" className="w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3">
          <div className="w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white">
            <div className="w-max p-4 border border-disabled rounded-full bg-white">
              <img src={adminAvatar} alt="person silhouette" width={24} height={24} />
            </div>
          </div>
          <h1 className="text-2xl font-satoshi-bold text-center">Create your account</h1>
          <hr />
          <p className="text-center text-sm mt-2">Already have an account? <Link to="/login" className="text-primary underline">Login</Link></p>
          <div className="my-2 flex flex-col gap-3">
            <FormControl as="input" id="first_name" name="first_name" placeholder="First Name" labelText="First Name" icon={icons.avatarIcon} required />
            <FormControl as="input" id="last_name" name="last_name" placeholder="Last Name" labelText="Last Name" icon={icons.avatarIcon} required />
            <FormControl as="input" id="email" name="email" placeholder="Enter your email address" labelText="Email" icon={icons.avatarIcon} required />
            <FormControl as="input" id="password" name="password" placeholder="Enter your password" labelText="Password" type="password" icon={icons.lockIcon} required />
            <FormControl as="input" id="status" name="status" placeholder="Status (optional)" labelText="Status" icon={icons.avatarIcon} />

            <label htmlFor="image" className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Svg src={icons.avatarIcon} className="w-4 h-4" />
              Profile Image
            </label>
            <DragnDrop className='sm:col-span-2' name='image' multiple={false} labelText="Upload profile photo" />
          </div>
          <Cta element="button" type="submit" className="rounded-lg p-3">Sign Up</Cta>
          
        </Form>
      </section>
    </main>
  );
}
