// IreneBrooksPortfolio.tsx

import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React, { useEffect, useState } from 'react';
import ContestantCard, { ContestantStatisticsCard } from '~/components/public/contests/ContestantCard';
import { toast } from '~/components/reusables/use-toast';
import { contestantHelper } from '~/lib/helpers/contestant.helper';
import { getFingerprint } from '~/lib/session.server';
import { contestantRepo } from '~/services/contestant/contestant.server';
import { EnrichedContestant } from '~/services/contestant/types/contestant.interface';
import { action as registerAction, RegisterAction } from './_public.contests.$tournamentId.$contestId._index';
import { useLocation } from '@remix-run/react';
// ... (loader and useContestContestantController remain the same) ...
// type RegisterAction = typeof action
export async function loader({ request }: LoaderFunctionArgs) {
  // call contestant server to get contestant data
  const url = new URL(request.url)
  const { fingerprint } = await getFingerprint({ request })
  const contestantCode = url.searchParams.get('contestantCode') ?? ""
  const stageId = url.searchParams.get('stageId') ?? ""
  const {data, error} = await contestantRepo.getContestantDetailsForContest(contestantCode, stageId)

  return {data, error, url: request.url}
}

export { registerAction as action };

export function useContestContestantController(){
  const [enrichedContestants, setEnrichedcontestants] = useState<EnrichedContestant[]>([]);
  const [contestantDetailsForActiveStage, setContestantDetailsForActiveStage] = useState<EnrichedContestant | null>(null);
  const {data, error, url} = useLoaderData<typeof loader>()
const location = useLocation();
  // console.log({data, error}) // Removed for production
  // Use a ref for the toast logic to ensure it doesn't fire multiple times in strict mode
  const [isToastFired, setIsToastFired] = useState(false);

  useEffect(() => {
    if(error && !isToastFired){
      toast({
          variant: "destructive",
          title: "An error occured",
          description: error?.detail.toString() ?? "Error occured"
      });
      setIsToastFired(true);
  }
  }, [error, isToastFired])
   

  useEffect(() => {
    if(data){
      const _enrichedContestants = contestantHelper.enrichContestantsDataForContest(data);
      setEnrichedcontestants(_enrichedContestants);
      // Find the currently active/ongoing stage for the main display
      setContestantDetailsForActiveStage(_enrichedContestants.find(c => c.stageStatus === "ongoing") ?? _enrichedContestants[0] ?? null) 
    }
  }, [data])

  const handleCopy = async () => {
    /// Copy the URL to the clipboard
    await navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied",
      description: "Contestant profile link copied to clipboard.",
    });
  }

  let WhatsAppText = `Please vote for my profile in the contest! Check it out here: ${url}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(WhatsAppText)}`;
  
  return {enrichedContestants, contestantDetailsForActiveStage, handleCopy, whatsappUrl}
}

export default function ContestContestant() {
  const {enrichedContestants, contestantDetailsForActiveStage, handleCopy, whatsappUrl} = useContestContestantController();
  const profileContestant = contestantDetailsForActiveStage || enrichedContestants[0]; // Use active or first available

  if (!profileContestant) {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <p className="text-xl text-gray-500">Loading or no contestant data found...</p>
        </div>
    );
  }

  const { originalContestantData, stageSocialMedia, fullName, info, stage, is_evicted } = profileContestant;

  return (
    
    <div className="min-h-screen text-gray-900">
      
      {/* ------------------- HERO PROFILE SECTION ------------------- */}
      <header className=" pt-24 pb-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
            
            {/* Image Card (Left) - Now uses the ContestantCard for consistent style */}
            <div className="w-full lg:w-96 flex-shrink-0 mb-8 lg:mb-0">
              {/* Note: This ContestantCard should ideally be a simplified 'ProfileCard' if used here, 
                 but we use the original for immediate compatibility/display of the main details. */}
              <ContestantCard 
                contestant={originalContestantData} 
                socialMedia={stageSocialMedia} 
              />
            </div>

            {/* Profile Details and Stats (Right) */}
            <div className="flex-grow pt-4">
              <div className="flex justify-between items-start">
                  <div>
                      <div className="flex items-center mb-2">
                          <h1 className="text-5xl font-extrabold text-gray-900">
                              {fullName}
                          </h1>
                          <span className="ml-4 inline-flex items-center px-4 py-1.5 rounded-full text-base font-semibold tracking-wide bg-indigo-50 text-indigo-800">
                              {is_evicted ? "EVICTED" : "ACTIVE"}
                          </span>
                      </div>
                      <p className="text-xl text-gray-600 mb-6 font-light">{info}</p>
                      <p className="text-lg text-gray-700 mb-8 max-w-2xl">{contestantDetailsForActiveStage?.info ?? "No stage-specific bio available. Displaying general contestant info."}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-4 mb-8">
                          <button onClick={() => handleCopy()} className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 transform hover:scale-[1.02]">
                              Share Link
                          </button>
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-gray-300 text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-150 transform hover:scale-[1.02]">
                              Share via WhatsApp
                          </a>
                      </div>
                  </div>

                  
              </div>

              {/* Contest Stats */}
              <div className="grid grid-cols-3 gap-8 pt-6 mt-6 border-t border-gray-200">
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-indigo-600">{enrichedContestants.length}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider mt-1">Total Stages</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-gray-900">{stage}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider mt-1">Current Stage</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold text-gray-900">{is_evicted ? "No" : "Yes" }</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider mt-1">In Contest</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ------------------- STAGES PORTFOLIO SECTION ------------------- */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Secondary Navigation Tabs (Sticky for better UX) */}
        <div className=" z-10 border-b border-gray-200 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 pt-4 pb-3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contest Stages History</h2>
            {/* Keeping a simple tab for future expansion (e.g., 'Achievements', 'Gallery') */}
            <nav>
                <ul className="flex space-x-10 text-lg font-medium">
                    <li className="text-indigo-600 border-b-2 border-indigo-600 pb-2 cursor-pointer">
                        All Stages ({enrichedContestants.length})
                    </li>
                    {/* Add more tabs here later */}
                </ul>
            </nav>
        </div>
        
        {/* Stage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {enrichedContestants.map(contestant => (
            <ContestantStatisticsCard 
              key={`${contestant.code}-${contestant.id}`} 
              contestant={contestant} 
            />
          ))}
        </div>
        
      </main>
    </div>
  );
}