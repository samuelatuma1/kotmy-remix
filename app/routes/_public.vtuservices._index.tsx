import { useNavigation } from "@remix-run/react";

type VtuService = {
  name: "Airtime" | "Data";
  description: string;
  icon: "airtime" | "data";
};

const services: VtuService[] = [
  {
    name: "Airtime",
    description: "Buy airtime from all networks in Nigeria",
    icon: "airtime",
  },
  {
    name: "Data",
    description: "Best data offers available at kidmonth",
    icon: "data",
  },
];

export function useVtuServicesController() {
  const navigation = useNavigation();

  return {
    isLoading: navigation.state === "loading",
    services,
  };
}

function AirtimeIcon() {
  return (
    <svg
      aria-label="Airtime"
      className="h-12 w-12"
      fill="none"
      role="img"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="currentColor" height="30" rx="5" width="20" x="14" y="9" />
      <path d="M20 14h8M21 34h6" stroke="white" strokeLinecap="round" strokeWidth="2" />
      <circle cx="24" cy="28" fill="white" r="2" />
      <path d="M11 17.5a17 17 0 0 0 0 13M37 17.5a17 17 0 0 1 0 13" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg
      aria-label="Data"
      className="h-12 w-12"
      fill="none"
      role="img"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 33a2 2 0 1 0 0 .01" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <path d="M17 26a10 10 0 0 1 14 0M12 21a17 17 0 0 1 24 0M7 16a24 24 0 0 1 34 0" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: VtuService["icon"] }) {
  return icon === "airtime" ? <AirtimeIcon /> : <DataIcon />;
}

function VtuServicesSkeleton() {
  return (
    <section aria-hidden="true" className="grid min-w-0 gap-6 sm:grid-cols-2">
      {services.map((service) => (
        <div
          className="min-w-0 animate-pulse rounded-[2rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] sm:p-8"
          key={service.name}
        >
          <div className="h-12 w-12 rounded-2xl bg-slate-200" />
          <div className="mt-8 h-7 w-28 rounded-full bg-slate-200" />
          <div className="mt-4 h-4 w-full rounded-full bg-slate-200" />
          <div className="mt-2 h-4 w-4/5 rounded-full bg-slate-200" />
        </div>
      ))}
    </section>
  );
}

export default function VtuServices() {
  const { isLoading, services: vtuServices } = useVtuServicesController();

  return (
    <main className="grow min-w-0 overflow-x-hidden">
      <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:w-[90%] sm:px-0 sm:py-16 lg:py-24">
        {isLoading ? (
          <VtuServicesSkeleton />
        ) : (
          <section className="grid min-w-0 gap-6 sm:grid-cols-2">
            {vtuServices.map((service) => (
              <article
                className="group min-w-0 overflow-hidden rounded-[2rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(14,42,77,0.14)] sm:p-8"
                key={service.name}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink transition duration-300 group-hover:scale-105">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h2 className="mt-8 text-2xl font-black text-brand-navy sm:text-3xl">{service.name}</h2>
                <p className="mt-3 max-w-sm break-words text-base leading-7 text-brand-navy/70 sm:text-lg">{service.description}</p>
              </article>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
