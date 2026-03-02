import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, Link, useNavigate, useNavigation } from "@remix-run/react";
import { useMemo, useRef, useState } from "react";
import Cta from "~/components/reusables/Cta";
import { walletRepo } from "~/services/wallet/wallet.server";
import { useLoaderData, useActionData } from "@remix-run/react";
import {  ActionFunctionArgs, json,  } from "@remix-run/node";
import { useEffect,  } from "react";
import { useToast } from "~/components/reusables/use-toast";
import Svg from "~/components/reusables/Svg";
import { icons } from "~/assets/icons";
import { IAddAccountDetailsRequest, ICurrencyBanks, IResolveAccountDetailsResponse, IResolveAccountRequest, IWallet } from "~/services/wallet/types/wallet.interface";

export async function loader ({request, params}: LoaderFunctionArgs){
    const cookieHeader = request.headers.get("Cookie") ?? "";
    console.log({cookieHeader})
    if (!cookieHeader) {
    // User is not signed in
      redirect("/login"); 
    }
    const walletid = params.walletid;
    if(!walletid){
      return redirect("/user/wallet")
    }
    let {error, data, authRequired} = await walletRepo.getUserWalletById(walletid, cookieHeader);
     if(authRequired){
        redirect("/login")
    }
    console.log("RIDE OR DIE", data)
    if(!data){
      return redirect("/user/wallet")
    }
    const walletAccount = data;
  
    const walletCurrencyBanksResponse = await walletRepo.getBanksForCurrency(walletAccount.wallet_currency, cookieHeader)
   
    console.log("User wallets", {walletAccount, walletCurrencyBanks: walletCurrencyBanksResponse})
    return {error, walletAccount,walletCurrencyBanks : walletCurrencyBanksResponse.data, authRequired}
}




export async function action({ request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie") ?? "";
  const formData = await request.formData();
  const intent = formData.get("intent") as string
  switch (intent){
    case "getAccountDetails":
      console.log("getAccountDetails", formData.get("bank") as string)
      var dto: IResolveAccountRequest = {
        currency: formData.get("currency") as string,
        account_number: formData.get("accountNumber") as string,
        bank_code: formData.get("bank") as string,
        wallet_id: formData.get("wallet_id") as string
      }
      var {data, error, authRequired} = await walletRepo.resolveAccountDetails(dto, cookieHeader)
      console.log("DATA",error, data, authRequired)
      return json({data, error, authRequired, intent})
    case "addAccountDetails":
      console.log("getAccountDetails", formData.get("bank") as string)
      var _dto: IAddAccountDetailsRequest = {
        currency: formData.get("currency") as string,
        account_number: formData.get("accountNumber") as string,
        bank_code: formData.get("bank_code") as string,
        wallet_id: formData.get("wallet_id") as string,
        pin: formData.get("pin") as string,
      }
      
      var response = await walletRepo.addAccountDetails(_dto, cookieHeader)
      console.log("ADD ACCOUNT DEETS",response?.error?.detail,response, _dto)
      return json({...response, intent})
      break;
  }
  // Logic for adding a recipient would go here
  return json({ success: true });
}

export function useAddWithdrawalAccountPage(){
  let navigate = useNavigate()
  const {error, walletAccount, walletCurrencyBanks, authRequired} = useLoaderData<typeof loader>()
  const { toast } = useToast();
  const actionData = useActionData<{ success?: boolean; error?: any, intent: string, data?: IResolveAccountDetailsResponse }>();
  const [banks, setBanks] = useState<ICurrencyBanks[]>([])
  const [wallet, setWallet] = useState<IWallet>()
  const [accountDetails, setAccountDetails] = useState<IResolveAccountDetailsResponse | null>(null)
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
      if(actionData?.intent === "getAccountDetails" && actionData?.data){
          setAccountDetails(actionData.data)
      }

      

      if(actionData?.intent === "addAccountDetails" && actionData?.data){
          toast({ title: "Success", description: "Recipient added successfully." });
          navigate("/user/wallet")
          return
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

   return {banks, wallet, accountDetails, setAccountDetails }
}
export default function AddWithdrawalAccountPage() {
  const { banks, wallet, accountDetails, setAccountDetails } = useAddWithdrawalAccountPage();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  // Search States
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<ICurrencyBanks | null>(null);
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
          <h1 className="text-2xl font-bold text-gray-900">Add personal account</h1>
          <p className="text-gray-500 mt-1 text-sm">Enter your banking details below</p>
        </div>

        {!accountDetails ? (
          <Form method="POST" className="w-full flex flex-col gap-4">
            
            {/* Country Select */}
            <div className="relative">
              <select id="country" name="country" required className={`${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`}>
                <option value="NG">Nigeria</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>
            </div>

            {/* Searchable Bank Select */}
            <div className="relative" ref={dropdownRef}>
              <input
                type="text"
                placeholder="Search or select bank"
                className={inputClasses}
                value={isOpen ? searchTerm : selectedBank?.name || ""}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (!isOpen) setIsOpen(true);
                }}
                onFocus={() => {
                    setIsOpen(true);
                    setSearchTerm(""); // Clear search on focus to show all options
                }}
              />
              
              {/* Hidden Input to maintain Remix Form functionality */}
              <input type="hidden" name="bank" value={selectedBank?.code || ""} required />

              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>

              {/* Custom Options UI */}
              {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden">
                  {filteredBanks.length > 0 ? (
                    filteredBanks.map((bank) => (
                      <div
                        key={bank.code}
                        className="px-5 py-4 hover:bg-slate-50 cursor-pointer text-gray-900 border-b border-gray-50 last:border-none transition-colors"
                        onClick={() => {
                          setSelectedBank(bank);
                          setSearchTerm(bank.name);
                          setIsOpen(false);
                        }}
                      >
                        {bank.name}
                      </div>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-gray-400 italic">No banks found</div>
                  )}
                </div>
              )}
            </div>

            {/* Account Number Input */}
            <div className="relative">
              <input 
                id="accountNumber" 
                name="accountNumber" 
                placeholder="Account Number (10 digits)"
                required 
                className={inputClasses}
              />
            </div>

            <input type="hidden" name="intent" value="getAccountDetails" />
            <input type="hidden" name="currency" value={`${wallet?.wallet_currency}`} />
            <input type="hidden" name="wallet_id" value={`${wallet?._id}`} />

            

            <Cta 
              element="button" 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]"
            >
              {isSubmitting ? "Getting details..." : "Get Account Details"}
            </Cta>
          </Form>
        ) : (
           <Form method="POST" className="w-full flex flex-col gap-4">
            
            {/* Country Select */}
            <div className="relative">
              <select id="country" name="country" required className={`${inputClasses} bg-gray-50 cursor-not-allowed appearance-none`}>
                <option value="NG">Nigeria</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ChevronDownIcon />
              </div>
            </div>

            <div className="relative">
              <input 
                required 
                value={selectedBank?.name || ""} 
                readOnly
                className={inputClasses}
              />
            </div>

            {/* Account Number Input */}
            <div className="relative">
              <input 
                id="accountNumber" 
                name="accountNumber" 
                placeholder="Account Number (10 digits)"
                required 
                readOnly
                className={inputClasses}
              />
            </div>

            <div className="relative">
              <input 
                id="pin" 
                name="pin" 
                placeholder="PIN (6 digits)"
                required 
                minLength={6}
                maxLength={6}
                type="password"
                className={inputClasses}
              />
            </div>
            <input type="hidden" name="bank_code" value={selectedBank?.code || ""} required />
            <input type="hidden" name="intent" value="addAccountDetails" />
            <input type="hidden" name="currency" value={`${wallet?.wallet_currency}`} />
            <input type="hidden" name="wallet_id" value={`${wallet?._id}`} />

            {/* Account Name Display */}
            <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex justify-between items-center">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Account Name</span>
              <p className="text-sm font-bold text-slate-800">
                {accountDetails ? accountDetails.account_name : "Invalid Account"}
              </p>
            </div>
            
            
            <Cta 
              element="button" 
              type="submit" 
              disabled={isSubmitting}
              className="mt-6 w-full h-14 rounded-2xl bg-slate-900 hover:bg-black text-white font-semibold text-lg shadow-sm transition-transform active:scale-[0.98]"
            >
              {isSubmitting ? "Adding..." : "Add Account"}
            </Cta>

            <button type="button" onClick={() => setAccountDetails(null)}
              className="w-full h-14 rounded-2xl bg-white border border-gray-200 text-gray-500 font-medium hover:bg-gray-50 transition-colors"
            >
              Go back
            </button>
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