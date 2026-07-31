
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "@remix-run/react";
import { userServer } from "~/services/user/userserver";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { toast } from "~/components/reusables/use-toast";
import { EnrichedContestant } from "~/services/contestant/types/contestant.interface";
import { noImage } from "~/assets/images";
import { contestantHelper } from "~/lib/helpers/contestant.helper";


export async function loader({request}: LoaderFunctionArgs){

  const cookieHeader = request.headers.get("Cookie");
  console.log({cookieHeader})
  if (!cookieHeader) {
    // User is not signed in
    return redirect("/login"); 
  }
  const {data, error, authRequired} = await userServer.getPendingUploads(cookieHeader)
  console.log({data, error})

  if(authRequired){
      return redirect("/login"); 
  }

  return json({data, error, authRequired})
}





interface WinnerCardProps {
  contestImageUrl: string;
  contest_name: string;
  stage: string;
  full_name: string;
  contestantId: string;
}

const PendingUploadCard: React.FC<WinnerCardProps> = ({
  contestImageUrl,
  contest_name,
  stage,
  full_name,
  contestantId
}) => (
  <Link
    to={`/user/contestant/${contestantId}`}
    className="group block h-full transition-transform duration-300 hover:-translate-y-1"
  >
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-grey bg-white shadow-[0_16px_48px_rgba(14,42,77,0.08)]">
      <div className="relative">
        <img
          src={contestImageUrl || noImage}
          alt={full_name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-navy/45 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-navy shadow-[0_8px_24px_rgba(14,42,77,0.12)]">
          Pending
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5 sm:px-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate">
            {contest_name}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-pink">
            Stage {stage}
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <h3 className="text-xl font-black tracking-tight text-brand-navy">
            {full_name}
          </h3>
          <span className="rounded-full border border-brand-grey bg-secondary px-3 py-2 text-xs font-semibold text-brand-navy transition-colors duration-200 group-hover:border-brand-pink group-hover:bg-white">
            Review
          </span>
        </div>
      </div>
    </article>
  </Link>
);

export function useUserPendingsUploadController(){

  const {data, error, authRequired} = useLoaderData<typeof loader>()

  const [pendingUploads, setPendingUploads] = useState<EnrichedContestant[]>([]);

   if(error){
      toast({
          variant: "destructive",
          title: "An error occured",
          description: error?.detail.toString() ?? "Error occured"
      });
  }

  useEffect(() => {
    if (data) {
        let flattenedUploads = contestantHelper.enrichContestsContestantsData(data);
        setPendingUploads(flattenedUploads);
        console.log({flattenedUploads})
    }
  }, [data]);
  
  return {pendingUploads}
}

export default function UserPendingsUpload(){
  const {pendingUploads} = useUserPendingsUploadController()
  return(
    <div className="min-h-screen bg-white text-brand-navy">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]">
          <div className="grid gap-0 lg:grid-cols-1">
            <div className="bg-brand-navy px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Upload center
              </p>
              <h1 className="mt-3 max-w-xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Pending uploads
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                Your next submissions are waiting here. Open a card to continue where you left off.
              </p>
            </div>
          </div>
        </section>

        <main className="py-8 sm:py-10 lg:py-12">
          {pendingUploads.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {pendingUploads.map((pendingUpload) => (
                <PendingUploadCard
                  key={pendingUpload.contestantId}
                  contestImageUrl={pendingUpload.contestImage}
                  contest_name={pendingUpload.contestName}
                  stage={pendingUpload.stage.toString()}
                  full_name={pendingUpload.fullName}
                  contestantId={pendingUpload.contestantId}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </main>
      </div>
    </div>
  )

}

function EmptyState() {
  return (
    <section className="rounded-[2rem] border border-dashed border-brand-grey bg-secondary px-6 py-14 text-center sm:px-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-grey bg-white shadow-[0_10px_24px_rgba(14,42,77,0.06)]">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 text-brand-pink" fill="none">
          <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 11.5h6M9 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <h2 className="mt-6 text-2xl font-black tracking-tight text-brand-navy">
        No pending uploads
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-slate">
        You’re all caught up right now. Once a contest stage needs attention, it will appear here.
      </p>
    </section>
  )
}
