import { Form, useLocation, useNavigate } from "@remix-run/react"

import FormControl from "../../reusables/FormControl"
import Button from "../../reusables/Button"
import DragnDrop from "./DragnDrop"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/reusables/select-shad"
import { nigerianStates } from "~/lib/data/states"
import { IContest } from "~/services/contest/types/contest.interface"
import { useUserManager } from "~/lib/store/store_managers/tokenManager"
import { UserAtom } from "~/lib/store/atoms/token"
import { useEffect, useState } from "react"
import { toast } from "~/components/reusables/use-toast"


function useRegistrationForm({ contest }: { contest: IContest }){
    // Users must be signed in to register for a contest
    const {getUserStoreManager} = useUserManager();
    const [user, setUser] = useState<UserAtom | null>(null);
    const navigate = useNavigate();
    const referralKey = 'referral_code'
    useEffect(() => {
        const user = getUserStoreManager();
        setUser(user);
    }, []);
    // 
    const addQueryParams = (url: string, key: string, value: any) => {
        const fullURL = new URL(url)
        fullURL.searchParams.set(key, value)
        return fullURL.toString()
    }

    const getQueryParam = ( key: string) => {
        let url = window.location.href
        const fullURL = new URL(url)
        return fullURL.searchParams.get(key) ?? ""
    }
    const copyReferalLink = async () => {
        const origin = window.location.origin
        const fullPath = `${origin}${path}`
        const urlWithReferralId = addQueryParams(fullPath, referralKey, user?.referral_code)
        await navigator.clipboard.writeText(urlWithReferralId);
        toast({
        title: "Link Copied",
        description: "Your referral link has been successfully copied, hurray.",
        });
    }
    const location = useLocation();

    const getReferalLinkForWhatsAppShare = () => {
        const origin = window.location.origin
        const fullPath = `${origin}${path}`
        const urlWithReferralId = addQueryParams(fullPath, 'referral_code', user?.referral_code)
        let WhatsAppText = `Please use my referal link to register for KOTMY's ${contest.name} contest. click on the link to register ${urlWithReferralId}`;
        return   `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
    }
    
    const pathname = location.pathname; // e.g., /my-route
    const search = location.search;   // e.g., ?query=value
    const hash = location.hash;     // e.g., #section
    const path = pathname + search + hash; // Combines them

    return {user, navigate, copyReferalLink, getReferalLinkForWhatsAppShare, path, getQueryParam, referralKey }
}
export default function RegistrationForm({ contest }: { contest: IContest }) {
    
    const {user, navigate, copyReferalLink, getReferalLinkForWhatsAppShare, path, getQueryParam,referralKey } = useRegistrationForm({contest})
    if(!user) {
        
        return (
            <div className="w-full max-w-xl bg-white border rounded-3xl shadow-lg flex flex-col items-center justify-center gap-6 py-12 px-6 sm:px-12 text-center">
                <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-accent"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.761-3.582-5-8-5Z" fill="currentColor"/></svg>
                <h2 className="text-2xl font-satoshi-bold text-accent">Sign In Required</h2>
                <p className="text-gray-700 text-base max-w-md">You must be signed in to register for this contest. 
                    Please sign in to continue and unlock the registration form or refer your friends and win great prices.</p>
                <Button element="button" onClick={() => navigate(`/login?redirectTo=${encodeURIComponent(path)}`)} className="mt-2 px-8 py-3 text-lg rounded-lg font-bold bg-accent text-white hover:bg-accent/90 transition">Sign In</Button>
                <p className="text-sm text-gray-400 mt-2">Don't have an account? <span className="underline text-accent cursor-pointer" onClick={() => navigate(`/signup?redirectTo=${encodeURIComponent(path)}`)}>Sign up here</span></p>
            </div>
        )
    };
    return (
        <Form method="POST" encType="multipart/form-data" className="bg-secondary p-[5%] sm:p-10 sm:rounded-3xl flex flex-col w-full max-w-xl gap-6">
            <p className="text-2xl font-satoshi-bold">
                Participate by filling in your basic information below and clicking "Submit".
            </p>

            <div>
                Refer your friends to this contest and win big prices. <br/>
                Click to copy referral link &nbsp;
                <button type="button"
                    onClick={copyReferalLink}
                    className="inline-flex items-center gap-2 px-3 py-1.5 max-h-10 rounded-md font-bold bg-accent text-white hover:bg-accent/90 transition shadow text-sm mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l-4-4m4 4l4-4" />
                    </svg>
                    Refer
                </button>
                <br />
                Or Share on <a target="_blank"
                                rel="noopener noreferrer"
                                href={getReferalLinkForWhatsAppShare()}
                                className="inline-block px-3 py-1.5 rounded-md bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition">
                                WhatsApp
                            </a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <FormControl as="input" labelText="First Name" id="first_name" name="first_name"
                    placeholder="Enter your first name" required
                />
                <FormControl as="input" labelText="Last Name" id="last_name" name="last_name"
                    placeholder="Enter your last name" required
                />
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <FormControl as="input" labelText="Email Address" id="email" name="email" value={`${user?.email}`} readOnly
                    placeholder="Enter your email address" required
                />
                <FormControl as="input" type="date" labelText="Date of Birth" id="dob" name="dob"
                    placeholder="dd/mm/yyyy" max={new Date().toISOString().split("T")[0]} required
                />
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <label htmlFor="gender" className="font-bold flex flex-col">Gender
                    <Select name="sex" required>
                        <SelectTrigger className="h-10 font-normal rounded-lg shadow-none hover:border-accent">
                            <SelectValue placeholder={"Gender"} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={"MALE"} className="focus:bg-blue-700/25">Male</SelectItem>
                            <SelectItem value={"FEMALE"} className="focus:bg-blue-700/25">Female</SelectItem>
                        </SelectContent>
                    </Select>
                </label>
                <label htmlFor="state_of_residence" className="font-bold flex flex-col">State of Residence
                    <Select name="state_of_residence" required>
                        <SelectTrigger className="h-10 font-normal rounded-lg shadow-none hover:border-accent">
                            <SelectValue placeholder={"Select a state"} />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(nigerianStates).map(([key, val]) => (
                                <SelectItem key={key} value={key} className="focus:bg-blue-700/25">{val}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </label>
            </div>
            
            
            <div className="grid gap-6 lg:grid-cols-2">
                <FormControl as="input" type="tel" labelText="Whatsapp Number" id="whatsapp_no" name="whatsapp_no"
                    placeholder="Enter your whatsapp number" required
                />
                <label htmlFor="category" className="font-bold flex flex-col">Category
                    <Select name="category" required={!!contest.categories.length}>
                        <SelectTrigger className="h-10 font-normal rounded-lg shadow-none hover:border-accent">
                            <SelectValue placeholder={"Select a category"} />
                        </SelectTrigger>
                        <SelectContent>
                            {contest.categories.map((category) => (
                                <SelectItem key={category} value={category} className="focus:bg-blue-700/25">{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </label>

                
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <FormControl as="input" labelClassNames="col-span-1 max-w-full" labelText="Referral code" id="referral_code" name="referral_code"
                    placeholder="" defaultValue={`${getQueryParam(referralKey)}`}
                />
            </div>

            <FormControl as="textarea" labelClassNames="col-span-2 max-w-full" labelText="What would you like your voters to know?" id="info" name="info"
                    placeholder="" 
            />

            

            
            <DragnDrop labelText="Upload Image" name="contestant_image" multiple required />
            <input type="hidden" name="contestId" value={contest._id} />
            <Button element="button" type="submit" name="intent" value="register" className="md:self-end">Submit</Button>
        </Form>
    )
}
