import { Form, useLoaderData, useActionData, useNavigate, Link, useLocation } from "@remix-run/react";
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
import { useUserManager } from "~/lib/store/store_managers/tokenManager";


export default function PartnerLoginOrRequestPartnerShip() {

  const {setUserStoreManager, getUserStoreManager} = useUserManager();
  var user = getUserStoreManager();
  const location = useLocation();
  if(!user || !(user.is_partner_account || user.business_id) ){
    return (
        <main className="h-dvh bg-secondary p-4 flex flex-col">
                <Link to={'/'} aria-label='home'>
                    <Svg src={icons.logoIcon} className='w-14 h-14 sm:w-16 sm:h-16' />
                </Link>
        <div className="flex flex-col md:flex-row gap-6 p-8  rounded-2xl border border-gray-100">
  {/* Login Section */}
  <div className="flex-1 flex flex-col items-start gap-4">
    <div className="p-3 rounded-lg shadow-sm">
    </div>
    <div>
      <h3 className="font-satoshi-black text-xl text-gray-900">Welcome Back</h3>
      <p className="text-gray-500 text-sm mt-1">Access your partner dashboard and manage your account.</p>
    </div>
    <Link 
      to="/login?redirectTo=/partners/home?&requireNewLogin=1" 
      className="text-accent font-satoshi-black flex items-center gap-2 hover:underline transition-all"
    >
      Login to Dashboard →
    </Link>
  </div>

  <div className="w-px bg-gray-200 hidden md:block" />

  {/* Join Section */}
  <div className="flex-1 flex flex-col items-start gap-4">
    <div className="bg-accent/10 p-3 rounded-lg">
    </div>
    <div>
      <h3 className="font-satoshi-black text-xl text-gray-900">New Here?</h3>
      <p className="text-gray-500 text-sm mt-1">Join our network and start growing your business with us.</p>
    </div>
    <Link 
      to="/partner/partner" 
      className="bg-accent text-white px-6 py-2 rounded-full font-satoshi-black hover:opacity-90 transition-all"
    >
      Become a Partner
    </Link>
  </div>
</div>
</main>
    )
  }
  useEffect(() => {
  window.location.replace("/partners/home");
}, []);
}
