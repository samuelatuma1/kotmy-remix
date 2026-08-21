import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, Link, useNavigate, useNavigation } from "@remix-run/react";
import { useMemo, useRef, useState } from "react";
import Cta from "~/components/reusables/Cta";
import { walletRepo } from "~/services/wallet/wallet.server";
import { useLoaderData, useActionData } from "@remix-run/react";
import {  ActionFunctionArgs, json,  } from "@remix-run/node";
import { useEffect,  } from "react";
import { authServer } from "~/services/auth/auth.server";
import { useToast } from "~/components/reusables/use-toast";
import Svg from "~/components/reusables/Svg";
import { icons } from "~/assets/icons";
import { IAddAccountDetailsRequest, ICurrencyBanks, IGetWithdrawalCharge, IRequestWithdrawal, IRequestWithdrawalResponse, IResolveAccountDetailsResponse, IResolveAccountRequest, IWallet, IWalletAccount, IWithdrawalChargeResponse } from "~/services/wallet/types/wallet.interface";
import { requireAuth } from "~/lib/session.server";

export async function loader ({request, params}: LoaderFunctionArgs){
    const validateAuth = await requireAuth(request);
    const walletid = params.walletid;
    if(!walletid){
      return redirect("/partners/wallet")
    }
    const [wallet, withdrawalAccounts] = await Promise.all([walletRepo.getPartnerWalletById(walletid, request), walletRepo.getWalletWithdrawalAccounts(walletid, request)])
     if(wallet.authRequired){
        redirect("/login")
    }
    if(!wallet.data){
      return redirect("/partners/wallet")
    }
    const walletAccount = wallet.data;
  
    const walletCurrencyBanksResponse = await walletRepo.getBanksForCurrency(walletAccount.wallet_currency, request)


    
   
    console.log("User wallets", {walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse})
    return {error: wallet.error as any, walletAccount,walletCurrencyBanks : walletCurrencyBanksResponse.data, withdrawalAccounts: withdrawalAccounts.data, authRequired: wallet.authRequired}
}




export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  const formData = await request.formData();
  const intent = formData.get("intent") as string
  switch (intent){
    
    case "getCharge":
      console.log("getCharge", formData.get("bank") as string)
      var chargeDTO: IGetWithdrawalCharge = {
        wallet_id: formData.get("wallet_id") as string,
        withdrawal_account_id: formData.get("withdrawal_account_id") as string,
        amount: parseFloat(formData.get("amount") as string),
        withdrawal_pin: "",
        accepted_charges: 1
      }
      var withdrawalChargesResponse = await walletRepo.getPartnerWithdrawalCharges(chargeDTO, request)
      
      return json({...withdrawalChargesResponse, intent})
    case "requestWithdrawal":
        var withdrawalDTO: IRequestWithdrawal = {
            wallet_id: formData.get("wallet_id") as string,
            amount: parseFloat(formData.get("amount") as string),
            withdrawal_account_id: formData.get("withdrawal_account_id") as string,
            withdrawal_pin: formData.get("withdrawal_pin") as string,
            narration: formData.get("narration") as string || "Withdrawal",
            accepted_charges: 1
        }
        var withdrawalResponse = await walletRepo.requestPartnerWithdrawal(withdrawalDTO, request)
        return json({...withdrawalResponse, intent})
  }
  // Logic for adding a recipient would go here
  return json({ success: true });
}

export function useAddWithdrawalAccountPage(){
  let navigate = useNavigate()
  const {error, walletAccount, walletCurrencyBanks, withdrawalAccounts, authRequired} = useLoaderData<typeof loader>()
  const { toast } = useToast();
    const actionData = useActionData<{ success?: boolean; error?: any, intent: string, data?: IResolveAccountDetailsResponse | IRequestWithdrawalResponse }>();
  const [banks, setBanks] = useState<ICurrencyBanks[]>([])
  const [wallet, setWallet] = useState<IWallet>()
  const [accountDetails, setAccountDetails] = useState<IResolveAccountDetailsResponse | null>(null)
  const [withdrawalCharges, setWithdrawalCharges] = useState<IWithdrawalChargeResponse | null>(null);
    useEffect(() => {
      if(error){
          toast({
              variant: "destructive",
              title: "An error occured",
              description: error?.detail.toString() ?? "Error occured"
          });
      }
    }, [error])

     useEffect(() => {
      if(actionData?.intent === "getCharge" && actionData?.data){
          setWithdrawalCharges(actionData.data as unknown as IWithdrawalChargeResponse)
      }

      

      if(actionData?.intent === "addAccountDetails" && actionData?.data){
          toast({ title: "Success", description: "Recipient added successfully." });
          navigate("/partners/wallet")
          return
      }

      if(actionData?.intent === "requestWithdrawal" && actionData?.data){
        const responseData = actionData.data as IRequestWithdrawalResponse;
        toast({ title: "Success", description: `${responseData.message}. Ref: ${responseData.reference}` });
        navigate("/partners/wallet")
      }

      if (actionData?.success) {
        toast({ title: "Success", description: "Recipient added successfully." });
      }
      if(actionData?.error){
        toast({
            variant: "destructive",
            title: "An error occured",
            description: actionData?.error?.detail.toString() ?? "Error occured"
        });
        }

      }, [actionData, actionData?.data]);
   useEffect(() => {
      if(walletCurrencyBanks){
        setBanks(walletCurrencyBanks)
      }
      if(walletAccount){
        setWallet(walletAccount)
      }
   }, [walletAccount, walletCurrencyBanks])

   return {banks, wallet, accountDetails, withdrawalAccounts,setAccountDetails, withdrawalCharges, setWithdrawalCharges }
}
export default function AddWithdrawalAccountPage() {
  const { banks, wallet, accountDetails, withdrawalAccounts, setAccountDetails, withdrawalCharges, setWithdrawalCharges } = useAddWithdrawalAccountPage();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  // Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<ICurrencyBanks | null>(null);
  const [withdrawalAccount, setWithdrawalAccount] = useState<IWalletAccount | null>(null);
  const [amount, setAmount] = useState<number>(0)
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter banks based on search
  const filteredBanks = useMemo(() => {
    return banks.filter((bank) =>
      bank.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [banks, searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputClasses = `
    w-full h-14 px-5 
    bg-white border border-gray-200 
    rounded-2xl text-gray-900 text-base
    outline-none transition-all duration-200
    hover:border-gray-400
    focus:border-slate-800 focus:ring-1 focus:ring-slate-800
  `;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16 px-4">
      <div className="max-w-md w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
             <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                <Svg src={icons.avatarIcon} className="w-6 h-6 text-white" />
             </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Withdraw </h1>
          <p className="text-gray-500 mt-1 text-sm">Enter details below</p>
        </div>

        {!withdrawalCharges ? (
          <Form method="POST" className="w-full flex flex-col gap-4">
            
      
            <div className="relative" ref={dropdownRef}>
             
              <label className="mb-2 block text-[15px] font-medium text-[#1A1A1A]">
                  Select beneficiary<span className="ml-0.5 text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Select account to transfer to"
                className={inputClasses}
                value={isOpen ? searchTerm : withdrawalAccount ? `${withdrawalAccount?.name ?? "" } ${withdrawalAccount?.acct_number ?? ""} - ${withdrawalAccount?.bankname ?? ""}` : `Select Beneficiary`}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (!isOpen) setIsOpen(true);
                }}
                onFocus={() => {
                    setIsOpen(true);
                    setSearchTerm(""); // Clear search on focus to show all options
                }}
              />
              
              

              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>

              {/* Custom Options UI */}
              {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden">
                  {withdrawalAccounts ?? [].length > 0 ? (
                    (withdrawalAccounts ?? []).map((acct) => (
                      <div
                        key={acct._id}
                        className="px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors"
                        onClick={() => {
                          setWithdrawalAccount(acct);
                          setSearchTerm(`${withdrawalAccount?.name} ${withdrawalAccount?.acct_number} - ${withdrawalAccount?.bankname}`);
                          setIsOpen(false);
                        }}
                      >
                        {acct.name ?? ""}<br />
                        {acct.acct_number ?? ""} - {acct.bankname ?? ""}
                      </div>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-gray-400 italic">No withdrawal account. Please add a withdrawal account to conitnue</div>
                  )}
                </div>
              )}
            </div>

            {/* Account Number Input */}
            <div className="relative">
              <input 
                id="amount" 
                name="amount" 
                type="number"
                min={100}
                placeholder="Amount"
                required 
                className={inputClasses}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </div>

            <input type="hidden" name="intent" value="getCharge" />
            <input type="hidden" name="withdrawal_account_id" value={withdrawalAccount?._id || ""} required />
            <input type="hidden" name="wallet_id" value={`${wallet?._id}`} />

            

            <Cta 
              element="button" 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full h-14 rounded-2xl bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]"
            >
              {isSubmitting ? "Continuing..." : "Continue"}
            </Cta>
          </Form>
        ) : (
            <Form method="POST" className="w-full flex flex-col max-w-md mx-auto">
      
      {/* 1. Sending Section */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-500 mb-2 block">You withdraw exactly</label>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
            <span className="font-bold text-gray-900">{wallet?.wallet_currency || "USD"}</span>
          </div>


         

          <input 
                id="amount" 
                name="amount" 
                type="number"
                min={100}
                placeholder="Amount"
                value={amount}
                required 
                readOnly
                className="text-right text-4xl font-bold bg-transparent outline-none w-full text-gray-900"
              />
        </div>
        <p className="text-sm text-gray-400 mt-2">Bal: {wallet?.withdrawable_balance.toLocaleString() || "0.00"}</p>
      </div>

      {/* 2. Breakdown Card (Inspired by the Screenshot) */}
      <div className="bg-[#F8F9FB] rounded-3xl p-6 border border-gray-100 flex flex-col gap-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Processing Fee:</span>
          <span className="font-medium text-gray-900">
             - {wallet?.wallet_currency} {withdrawalCharges?.transaction_charge || "0.00"}
          </span>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Destination Account:</span>
          <span className="font-medium text-gray-900 text-right">
            {withdrawalAccount?.bankname}
          </span>
        </div>

        <div className="pt-3 mt-1 border-t border-gray-200 flex justify-between items-center">
          <span className="text-sm text-gray-500 font-medium">Total:</span>
          <span className="text-lg font-bold text-gray-900">
            {wallet?.wallet_currency} {((withdrawalCharges?.total_charge ?? 0) + amount).toLocaleString()}
          </span>
        </div>

        {/* Guaranteed/Remark Box */}
        {withdrawalCharges?.remark && (
          <div className="mt-2 bg-white/50 border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
               <span className="opacity-60">ℹ️</span>
               <span>{withdrawalCharges.remark}</span>
            </div>
            <ChevronDownIcon /> {/* Reusing your icon from before */}
          </div>
        )}
      </div>

      {/* 3. Recipient Info Section */}
      <div className="mt-8 mb-6">
        <label className="text-sm font-medium text-gray-500 mb-2 block">Recipient details</label>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 uppercase">
              {withdrawalAccount?.name}
            </span>
            <span className="text-gray-500 text-sm">
              {withdrawalAccount?.acct_number}
            </span>
          </div>
        </div>
      </div>

      {/* 4. Security & Actions */}
      <div className="space-y-4">
        <label className="mb-2 block text-[15px] font-medium text-[#1A1A1A]">
            Withdrawal PIN<span className="ml-0.5 text-red-500">*</span>
          </label>
        <div className="relative">
          <input 
            id="withdrawal_pin" 
            name="withdrawal_pin" 
            type="password"
            maxLength={6}
            minLength={6}
            required 
            className={`${inputClasses} text-center tracking-[1em] font-bold`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <Cta 
            element="button" 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 rounded-2xl bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]"
          >
            {isSubmitting ? "Confirming..." : "Confirm Withdrawal"}
          </Cta>

          <button 
            type="button" 
            onClick={() => setWithdrawalCharges(null)}
            className="w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
        </div>
      </div>

      {/* Hidden Fields kept as requested */}
      <input type="hidden" name="intent" value="requestWithdrawal" />
      <input type="hidden" name="withdrawal_account_id" value={withdrawalAccount?._id || ""} />
      <input type="hidden" name="wallet_id" value={`${wallet?._id}`} />
    </Form>
        )}
      </div>
    </div>
  );
}

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);