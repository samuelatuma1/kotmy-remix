import { LoaderFunctionArgs, ActionFunctionArgs, json } from "@remix-run/node";
import { useActionData, useLoaderData, Form, useNavigate, useNavigation } from "@remix-run/react";
import { partnerServer } from "~/services/partner/partner.server";
import type { ICreatePartnerDTO, AddressDTO, ContactPersonDTO } from "~/services/partner/types/partner.interface";
import { useState } from "react";
import { toast } from '~/components/reusables/use-toast';
import { useEffect } from 'react';

export async function loader({}: LoaderFunctionArgs) {
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  console.log("d")
  for (const [key, value] of formData.entries()) {
  console.log(`${key}: ${value}`);
}
  console.log(formData.values())
  const business_locations: AddressDTO[] = [
    {
      street: formData.get("location_street") as string,
      city: formData.get("location_city") as string,
      state: formData.get("location_state") as string,
      country: formData.get("location_country") as string,
    },
  ];
  const contact_person: ContactPersonDTO = {
    name: formData.get("contact_name") as string,
    email: formData.get("contact_email") as string,
    country: formData.get("contact_country") as string,
    phone: formData.get("contact_phone") as string,
  };
  const dto: ICreatePartnerDTO = {
    legal_business_name: formData.get("legal_business_name") as string,
    country_of_incorporation: formData.get("country_of_incorporation") as string,
    phone_number: formData.get("phone_number") as string,
    roc_cac_number: formData.get("roc_cac_number") as string,
    tax_id: formData.get("tax_id") as string,
    industry: formData.get("industry") as string,
    estimated_weekly_volume_min: Number(formData.get("estimated_weekly_volume_min")),
    estimated_weekly_volume_max: Number(formData.get("estimated_weekly_volume_max")),
    estimated_weekly_volume_currency: formData.get("estimated_weekly_volume_currency") as string,
    business_description: formData.get("business_description") as string,
    website: formData.get("website") as string,
    referral_percentage: Number(formData.get("referral_percentage")),
    business_email: formData.get("business_email") as string,
    notes: (formData.get("notes") as string)?.split("\n") ?? [],
    contact_person,
    business_locations,
  };
  const response = await partnerServer.requestPartnership(dto);
  return response;
}

function Stepper({ currentStep }: { currentStep: number }) {
  const steps = ["Business info", "Business address", "Contact details"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs sm:text-sm font-medium text-gray-400 mb-8 sm:mb-12">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-x-1 sm:gap-x-2">
          <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${i === currentStep ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}>
            {i + 1}
          </span>
          <span className={i === currentStep ? "text-black" : ""}>{step}</span>
          {i < steps.length - 1 && (
            <span className="hidden sm:inline">&gt;</span>
          )}
        </div>
      ))}
    </div>
  );
}

const Label = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-5">
    {children} {required && <span className="text-red-500">*</span>}
    
  </label>
);

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-gray-400 bg-white";

function usePartnerOnboardingController(){
    const navigation = useNavigation();
  const [section, setSection] = useState(0);
  const [form, setForm] = useState<any>({
    estimated_weekly_volume_currency: "USD",
    referral_percentage: 10,
    country_of_incorporation: "Nigeria"
  });
  const actionData = useActionData<{ data?: string; error?: any }>();
  const isSuccess = !!actionData?.data && !actionData?.error;
  const businessName = form.legal_business_name ?? "Partner";
  const navigate = useNavigate();
    useEffect(() => {
    if (actionData?.error) {
      // eslint-disable-next-line no-console
      console.log(actionData.error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not submit partnership request!",
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Submission successful",
        description: "Your partnership request was successfully submitted!",
      });
    }
}, [actionData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(form)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  return {section, form, navigation, handleChange, setSection, businessName, isSuccess, navigate}
}
export default function PartnerOnboarding() {
  
    const {section, form, navigation, handleChange, setSection, isSuccess, navigate, businessName} = usePartnerOnboardingController()
    if (isSuccess) {
      return (
        <main className="min-h-screen bg-white font-sans text-slate-900 flex items-center justify-center">
          <div className="max-w-xl w-full mx-auto px-4 py-16 text-center">
            <div className="mb-6">
              <svg className="mx-auto mb-4 text-green-500" width="48" height="48" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" opacity="0.1"/><path d="M7 13l3 3 7-7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Thank you, {businessName}!</h1>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                We have received your request to partner with us.<br/>
                A member of our team will contact you soon.
              </p>
            </div>
            <button
              className="inline-block bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all text-base sm:text-lg"
              onClick={() => navigate("/")}
            >
              Go to Homepage
            </button>
          </div>
        </main>
      );
    }
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      <div className="max-w-3xl mx-auto px-2 sm:px-6 pt-8 sm:pt-12">
        <Stepper currentStep={section} />

        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
            
            {section === 0 ? "Tell us about your business" : section === 1 ? "Enter your business's legal address": "Enter contact info details"}
          </h1>
        </div>

        <div className="w-full max-w-xl mx-auto">
          <Form method="post" className="space-y-6">
  {/* Step 0: Business Info */}
  <div className={section === 0 ? "" : "hidden"}>
    <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
      <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Company information</h3>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between flex-wrap"><span className="text-gray-500">Company name:</span> <span className="font-semibold">{form.legal_business_name} <span className="text-green-500">●</span></span></div>
        <div className="flex justify-between flex-wrap"><span className="text-gray-500">Phone Number:</span> <span className="font-semibold">{form.phone_number}</span></div>
        {/* <div className="flex justify-between flex-wrap"><span className="text-gray-500">Date of incorporation:</span> <span className="font-semibold">15 January 2020</span></div> */}
        <div className="flex justify-between flex-wrap"><span className="text-gray-500">Status:</span> <span className="text-blue-600 font-semibold inline-flex items-center gap-1">✓ Active</span></div>
      </div>
    </div>
    <div>
      <Label required>Legal business name</Label>
      <input name="legal_business_name" required className={inputClass} value={form.legal_business_name || ""} onChange={handleChange} />
    </div>
    <div>
      <Label required>Country of incorporation</Label>
      <select name="country_of_incorporation" className={inputClass} value={form.country_of_incorporation} onChange={handleChange}>
        <option value="Nigeria">🇳🇬 Nigeria</option>
        <option value="Kenya">🇰🇪 Kenya</option>
      </select>
    </div>

    <div>
      <Label required>Business Email</Label>
      <input
        name="business_email"
        type="email"
        className={inputClass}
        value={form.business_email || ""}
        onChange={handleChange}
        required
        placeholder="Enter business email"
      />
    </div>

    <div>
      <Label required>Partner commision support (%)</Label>
      <p className="text-xs sm:text-sm  text-gray-500  tracking-wider mb-3 sm:mb-1">We connect you to paying customers. What percentage of each sale are you willing to contribute as a partnership commission?</p>

      <input
        name="referral_percentage"
        type="number"
        min={5}
        className={inputClass}
        value={form.referral_percentage || 10}
        onChange={handleChange}
        required
        // placeholder="Enter business email"
      />
    </div>

    <div>
      <Label required>Phone number</Label>
      <div className="flex flex-col sm:flex-row gap-2 items-stretch">
        <div className="relative w-full sm:w-32">
          <select
            name="phone_country_code"
            className="block w-full appearance-none px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base pr-8"
            defaultValue="+234"
            style={{ minWidth: '5.5rem' }}
          >
            <option value="+234">🇳🇬 +234</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">▼</span>
        </div>
        <input
          name="phone_number"
          required
          className={inputClass + " flex-1"}
          placeholder="810 234 6879"
          value={form.phone_number || ""}
          onChange={handleChange}
          type="tel"
          autoComplete="tel"
        />
      </div>
    </div>
    <div>
      <Label>ROC / CAC Number</Label>
      <input name="roc_cac_number" className={inputClass} value={form.roc_cac_number || ""} onChange={handleChange} />
    </div>
    <div>
      <Label>Tax ID (TIN)</Label>
      <input name="tax_id" className={inputClass} value={form.tax_id || ""} onChange={handleChange} />
    </div>


    

    <div>
      <Label required>Estimated Weekly Volume Currency</Label>
      <select
        name="estimated_weekly_volume_currency"
        className={inputClass}
        value={form.estimated_weekly_volume_currency || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select currency</option>
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>
      </select>
    </div>

    <div>
      <Label required>Estimated weekly volume</Label>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{form.estimated_weekly_volume_currency}</span>
          <input name="estimated_weekly_volume_min" type="number" placeholder="Min" className={`${inputClass} pl-16`} value={form.estimated_weekly_volume_min || ""} onChange={handleChange} />
        </div>
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{form.estimated_weekly_volume_currency}</span>
          <input name="estimated_weekly_volume_max" type="number" placeholder="Max" className={`${inputClass} pl-16`} value={form.estimated_weekly_volume_max || ""} onChange={handleChange} />
        </div>
      </div>
    </div>
    <div>
      <Label required>Business description</Label>
      <div className="relative">
        <textarea name="business_description" required className={`${inputClass} h-32 resize-none`} value={form.business_description || ""} onChange={handleChange} />
        <span className="absolute bottom-3 right-3 text-xs text-gray-400">0/5000</span>
      </div>
    </div>
    <div>
      <Label>Website (Optional)</Label>
      <input name="website" className={inputClass} placeholder="https://www.acmetrading.com" value={form.website || ""} onChange={handleChange} />
    </div>

    
    <div>
      <Label required>Industry</Label>
      <select
        name="industry"
        className={inputClass}
        value={form.industry || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select industry</option>
        <option value="Services">Services</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Hospitality">Hospitality</option>
        <option value="Financial Industry">Financial Industry</option>
        <option value="Technology">Technology</option>
        <option value="Education">Education</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Retail">Retail</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Construction">Construction</option>
        <option value="Transportation">Transportation</option>
        <option value="Other">Other</option>
      </select>
    </div>


    <button type="button" className="w-full bg-[#4B4870] hover:bg-[#3d3a5c] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-all mt-4 text-base sm:text-lg" onClick={() => setSection(1)}>
      Next
    </button>
  </div>

  {/* Step 1: Business Address */}
  <div className={section === 1 ? "" : "hidden"}>
    <div>
      <Label required>Country of territory</Label>
      <select name="location_country" required className={inputClass} value={form.location_country || ""} onChange={handleChange}>
        <option value="">Select your country</option>
        <option value="Nigeria">Nigeria</option>
      </select>
    </div>
    <div>
      <Label required>Street Address</Label>
      <input name="location_street" required placeholder="123 Main Street" className={inputClass} value={form.location_street || ""} onChange={handleChange} />
    </div>
    <div>
      <Label required>State</Label>
      <select name="location_state" required className={inputClass} value={form.location_state || ""} onChange={handleChange}>
        <option value="">Select state</option>
        <option value="Lagos">Lagos</option>
      </select>
    </div>
    <div>
      <Label required>City</Label>
      <input name="location_city" required className={inputClass} value={form.location_city || ""} onChange={handleChange} />
    </div>
    <div>
      <Label required>Postal Code</Label>
      <input name="location_postal" className={inputClass} value={form.location_postal || ""} onChange={handleChange} />
    </div>
    <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-5">
      <button type="button" className="w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl" onClick={() => setSection(0)}>Back</button>
      <button type="button" className="w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg" onClick={() => setSection(2)}>
        Next
      </button>
    </div>
   
  </div>

  {/* Step 2: Contact Info */}
  <div className={section === 2 ? "" : "hidden"}>
    <div>
      <Label required>Country of territory</Label>
      <select name="contact_country" required className={inputClass} value={form.contact_country || ""} onChange={handleChange}>
        <option value="">Select your country</option>
        <option value="Nigeria">Nigeria</option>
      </select>
    </div>
    <div>
      <Label required>Contact Name</Label>
      <input name="contact_name" required placeholder="John Doe" className={inputClass} value={form.contact_name || ""} onChange={handleChange} />
    </div>
    <div>
      <Label required>Contact Email</Label>
      <input name="contact_email" required className={inputClass} value={form.contact_email || ""} onChange={handleChange} />
    </div>
    <div>
      <Label required>Contact Phone</Label>
      <input name="contact_phone" className={inputClass} value={form.contact_phone || ""} onChange={handleChange} />
    </div>
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <button type="button" className="w-full sm:flex-1 bg-gray-100 text-gray-600 font-semibold py-3 sm:py-4 rounded-xl" onClick={() => setSection(1)}>Back</button>
      <button type="submit" className="w-full sm:flex-[2] bg-[#4B4870] text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg">
        {navigation.state === 'submitting' ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  </div>
</Form>
        </div>
      </div>
    </main>
  );
}