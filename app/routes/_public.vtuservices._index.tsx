import { Link, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import Svg from "~/components/reusables/Svg";
import { icons } from "~/assets/icons";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";

type VtuService = {
  name: "Airtime" | "Data";
  description: string;
  icon: "airtime" | "data";
  to: string;
};

const services: VtuService[] = [
  {
    name: "Airtime",
    description: "Buy airtime from all networks in Nigeria",
    icon: "airtime",
    to: "/vtuservice/airtime",
  },
  {
    name: "Data",
    description: "Best data offers available at kidmonth",
    icon: "data",
    to: "/vtuservice/data"
  },
];

export function useVtuServicesController() {
  const navigation = useNavigation();
  const { getUserStoreManager } = useUserManager();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(Boolean(getUserStoreManager()));
  }, []);

  return {
    isLoading: navigation.state === "loading",
    isSignedIn,
    services,
  };
}

function ServiceIcon({ icon }: { icon: VtuService["icon"] }) {
  return (
    <Svg
      aria-label={icon === "airtime" ? "Airtime" : "Data"}
      className="h-12 w-12"
      role="img"
      src={icon === "airtime" ? icons.airtimeIcon : icons.dataIcon}
    />
  );
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
  const { isLoading, isSignedIn, services: vtuServices } = useVtuServicesController();

  return (
    <main className="grow min-w-0 overflow-x-hidden">
      <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:w-[90%] sm:px-0 sm:py-16 lg:py-24">
        {isLoading ? (
          <VtuServicesSkeleton />
        ) : (
          <section className="grid min-w-0 gap-6 sm:grid-cols-2">
            {vtuServices.map((service) => (
              <Link
                to={service.to}
                className="group min-w-0 overflow-hidden rounded-[2rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(14,42,77,0.14)] sm:p-8"
                key={service.name}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink transition duration-300 group-hover:scale-105">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h2 className="mt-8 text-2xl font-black text-brand-navy sm:text-3xl">{service.name}</h2>
                <p className="mt-3 max-w-sm break-words text-base leading-7 text-brand-navy/70 sm:text-lg">{service.description}</p>
              </Link>
            ))}
            {isSignedIn && (
              <Link
                to="/vtuservice/vtupurchases"
                className="group min-w-0 overflow-hidden rounded-[2rem] border border-brand-grey bg-white p-5 shadow-[0_16px_48px_rgba(14,42,77,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(14,42,77,0.14)] sm:p-8"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-pink/10 text-brand-pink transition duration-300 group-hover:scale-105">
                  <Svg aria-label="My VTU purchases" className="h-12 w-12" role="img" src={icons.noteIcon} />
                </div>
                <h2 className="mt-8 text-2xl font-black text-brand-navy sm:text-3xl">My VTU purchases</h2>
                <p className="mt-3 max-w-sm break-words text-base leading-7 text-brand-navy/70 sm:text-lg">View your airtime and data purchase history.</p>
              </Link>
            )}
          </section>
        )}
      </section>
    </main>
  );
}
