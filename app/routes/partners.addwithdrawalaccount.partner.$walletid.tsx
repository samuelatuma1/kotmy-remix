import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Form, Link, useNavigate, useParams } from "@remix-run/react";
import { useState } from "react";
import Cta from "~/components/reusables/Cta";
import { requireAuth } from "~/lib/session.server";
import { walletRepo } from "~/services/wallet/wallet.server";

export async function loader ({request, params}: LoaderFunctionArgs){
    const validateAuth = await requireAuth(request);
    const walletid = params.walletid ?? "";
    const {error, data, authRequired} = await walletRepo.getWalletWithdrawalAccounts(walletid, request);

    if(authRequired){
        redirect("/login")
    }
    console.log("User wallets", data)
    return {error, data, authRequired}
}
// Icons (Replace with your actual icon paths or SVGs)
const UserIcon = () => (
  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 bg-white rounded-full mt-[-4px]" />
    </div>
  </div>
);

const BriefcaseIcon = () => (
  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
    <div className="w-10 h-8 bg-green-500 rounded-lg flex items-center justify-center relative">
        <div className="w-4 h-2 border-2 border-white rounded-t-sm absolute -top-1" />
    </div>
  </div>
);

export function useAccountTypePage(){
  const params = useParams();
  
  const [selectedType, setSelectedType] = useState<"personal" | "partner" | null>(null);
  const [accountRedirectUrl, setAccountRedirectUrl] = useState("")
  function updateSelectAccountType(accountType: "personal" | "partner"){
      setSelectedType(accountType)
      setAccountRedirectUrl(`/partners/addwithdrawalaccount/${accountType}/${params.walletid}`)

  }
  return {selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl}
}

export default function AccountTypePage() {
  const {selectedType, setSelectedType, updateSelectAccountType, accountRedirectUrl} = useAccountTypePage()
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          What type of account <br /> would you like to add?
        </h1>

        <Form method="post" className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
        

            {/* Business Account Card */}
            <div 
              onClick={() => updateSelectAccountType("partner")}
              className={`relative cursor-pointer transition-all duration-300 rounded-[40px] p-10 flex flex-col items-center text-center border-2 
                ${selectedType === "partner" ? "border-green-500 ring-4 ring-green-50" : "border-transparent bg-gray-50/50 hover:bg-gray-100"}`}
            >
              <div className="mb-8 scale-125">
                <BriefcaseIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Partner account</h3>
              <p className="text-gray-500 leading-relaxed max-w-[280px]">
                Create an account with one of our partners. No creation fee charge attached
              </p>
              <input type="radio" name="accountType" value="partner" className="hidden" checked={selectedType === "partner"} readOnly />
            </div>

          </div>

          {/* Action Button */}
          <div className="max-w-md mx-auto">
            <Link to={`${accountRedirectUrl}`}>
                <Cta 
              element="button" 
              type="submit" 
              disabled={!selectedType}
              className={`w-full py-4 rounded-2xl text-lg font-semibold transition-colors`}
            >
              Continue
            </Cta>
            </Link>
            
          </div>
        </Form>
      </div>
    </div>
  );
}