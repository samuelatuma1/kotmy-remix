import { ActionFunctionArgs, json, redirect, type LoaderFunctionArgs, type SerializeFrom } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { useState, useMemo, useEffect } from "react";
import { UserAtom } from "~/lib/store/atoms/token";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { ICreateWithdrawalPinDTO, ILedgerEntry, IWallet } from "~/services/wallet/types/wallet.interface";
import { walletRepo } from "~/services/wallet/wallet.server";
import { User, AlertCircle, X, Mail } from "lucide-react";
import { useRef } from 'react';
import { ILoginResponseDTO } from "~/services/auth/types/auth.dtos";
import { toast } from "~/components/reusables/use-toast";
import { authServer } from "~/services/auth/auth.server";
import { requireAuth } from "~/lib/session.server";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/reusables/Dialog";
var tokenRequested = false;
export async function action({ request }: ActionFunctionArgs) {
    const cookieHeader = request.headers.get("Cookie") ?? "";

    const formData = await request.formData()
    const intent = formData.get("intent");

    if (intent === "request-token") {
        const { data, error, authRequired } = await walletRepo.requestWithdrawalToken(request);
        return json({ data, error, authRequired, intent });
    }
    
      
    const withdrawalPinDto: ICreateWithdrawalPinDTO = {
        token: formData.get("token") as string,
        withdrawal_pin: formData.get("withdrawal_pin") as string,
        confirm_withdrawal_pin: formData.get("confirm_withdrawal_pin") as string
    }
    console.log({'_DATA_': withdrawalPinDto})

    const {data, error, authRequired} = await walletRepo.createWithdrawalPin(withdrawalPinDto, request)
    console.log({ data, error, authRequired })
    return json({ data, error, authRequired, intent });
        
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("SEtting")
  const validateAuth = await requireAuth(request);
  const { data, error, authRequired } = await authServer.getMe(request);
  if (authRequired) {
      // User is not authenticated
      return redirect("/login"); 
    }
  
  if(data){
    if(data.withdrawal_pin_set){
        // user already has pin setup. No need to retry
        return redirect("/user/wallet")
    }
  }
  return json({ data, error });
}

function useSetWithdrawalPinController() {
  const {setUserStoreManager, getUserStoreManager} = useUserManager();
  const [user, setUser] = useState<UserAtom | null>(null)
  const [showTokenModal, setShowTokenModal] = useState(true)
  // Track which wallet is currently selected (default to the first one)
  const actionData = useActionData<typeof action>();
  const loader_ = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isRequestingToken = navigation.state === "submitting" && navigation.formData?.get("intent") === "request-token";

  useEffect(() => {
    const _user = getUserStoreManager()
    
  }, [getUserStoreManager]);



  return { 
    user,
    actionData,
    setUserStoreManager,
    loader_,
    showTokenModal,
    setShowTokenModal,
    isRequestingToken
  };
}


export default function SetWithdrawalPin() {
  const {loader_, actionData, setUserStoreManager, showTokenModal, setShowTokenModal, isRequestingToken} = useSetWithdrawalPinController();
  useEffect(() => {
    console.log({actionData})
   
    if (actionData?.intent === "request-token") {
      if (actionData?.error) {
        toast({
          variant: "destructive",
          title: "Token Request Failed",
          description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Failed to send token",
        });
      }
      if (actionData?.data) {
        setShowTokenModal(false);
        toast({
          variant: "default",
          title: "Token sent",
          description: "We've sent a token to your email address.",
        });
      }
      return;
    }

    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Set Withdrawal Pin Failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Withdrawal Pin Creation failed",
      });
    }

    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Withdrawal PIN updated successfully",
        description: "Withdrawal PIN created successfully",
      });
      setUserStoreManager(actionData.data as unknown as UserAtom, true)
      }
    }, [actionData])
  
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 font-sans relative">
      <Link to="/user/wallet" className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"><X size={24} /></Link>

      <Form className="w-full max-w-lg text-center"  method="POST">
        <input type="hidden" name="intent" value="create-withdrawal-pin" />
        {/* Visual Header / Avatar Section */}
        <div className="mb-8 flex justify-center">
          
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#E5E5EF]">
            {/* Outer decorative rings */}
            <div className="absolute h-24 w-24 rounded-full border border-slate-100"></div>
            <div className="absolute h-32 w-32 rounded-full border border-slate-50/50"></div>
            
            <User className="h-8 w-8 text-[#1A1A1A]" fill="currentColor" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-[#1A1A1A]">
          Set withdrawal PIN
        </h1>
        <p className="mb-10 text-[15px] text-gray-500">
          We sent a token to your email address. Please enter it below along with your desired withdrawal PIN.
        </p>

        {/* Input Group */}
        <div className="text-left">
          <label className="mb-2 block text-[15px] font-medium text-[#1A1A1A]">
            token<span className="ml-0.5 text-red-500">*</span>
          </label>
          
          <div className="relative">
            <input
              type="text"
              maxLength={4}
              minLength={4}
              pattern="[0-9]*"
              name="token"
              placeholder="4 digit token sent to your email"
              className="w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink"
            />
          </div>
          
          {/* Error Message */}
          {/* <div className="mt-2 flex items-center gap-2 text-[#E15151]">
            <AlertCircle size={18} />
            <span className="text-[14px] font-medium">Invalid account number</span>
          </div> */}
        </div>

        <div className="text-left">
          <label className="mb-2 block text-[15px] font-medium text-[#1A1A1A]">
            Withdrawal PIN<span className="ml-0.5 text-red-500">*</span>
          </label>
          
          <div className="relative">
            <input
              type="text"
              maxLength={6}
              minLength={6}
              pattern="[0-9]*"
              name="withdrawal_pin"
              placeholder="Enter your desired 6-digit PIN"
              className="w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink"
            />
          </div>
          
          {/* Error Message */}
          {/* <div className="mt-2 flex items-center gap-2 text-[#E15151]">
            <AlertCircle size={18} />
            <span className="text-[14px] font-medium">Invalid PIN</span>
          </div> */}
        </div>

        <div className="text-left">
          <label className="mb-2 block text-[15px] font-medium text-[#1A1A1A]">
            Confirm Withdrawal PIN<span className="ml-0.5 text-red-500">*</span>
          </label>
          
          <div className="relative">
            <input
              type="text"
              maxLength={6}
              minLength={6}
              pattern="[0-9]*"
              name="confirm_withdrawal_pin"
              placeholder="Confirm your 6-digit PIN"
              className="w-full rounded-xl border border-[#D1D1E0] p-4 text-lg text-[#1A1A1A] outline-none transition-focus focus:border-brand-pink"
            />
          </div>
          
          {/* Error Message */}
          {/* <div className="mt-2 flex items-center gap-2 text-[#E15151]">
            <AlertCircle size={18} />
            <span className="text-[14px] font-medium">Invalid PIN</span>
          </div> */}
        </div>

        {/* Primary Action Button */}
        <button 
          type="submit"
          className="mt-10 w-full rounded-2xl bg-brand-pink py-4 text-lg font-semibold text-white transition-all hover:bg-brand-pink/90 active:scale-[0.99]"
        >
          Create Withdrawal PIN
        </button>

      </Form>

      {/* Token delivery modal */}
      <Dialog open={showTokenModal} onOpenChange={setShowTokenModal}>
        <DialogContent className="max-w-md rounded-2xl p-8 bg-white">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pink/10">
              <Mail className="h-6 w-6 text-brand-pink" />
            </div>
            <DialogTitle className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              Set your withdrawal pin
            </DialogTitle>
            <DialogDescription className="mt-2 text-[15px] text-gray-500">
              Choose how we should send token to set withdrawal pin.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-brand-pink bg-brand-pink/5 p-4 transition-colors">
              <input
                type="radio"
                name="token_delivery"
                value="email"
                defaultChecked
                className="h-4 w-4 accent-brand-pink"
              />
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-pink" />
                <span className="text-[15px] font-medium text-[#1A1A1A]">Send to email</span>
              </span>
            </label>
          </div>

          <Form method="POST" className="mt-6">
            <input type="hidden" name="intent" value="request-token" />
            <button
              type="submit"
              disabled={isRequestingToken}
              className="w-full rounded-2xl bg-brand-pink py-4 text-lg font-semibold text-white transition-all hover:bg-brand-pink/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isRequestingToken ? "Sending token..." : "Send token"}
            </button>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}