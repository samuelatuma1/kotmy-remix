import { EnrichedContestant, IContestant } from '~/services/contestant/types/contestant.interface'
import { noImage } from '~/assets/images'
import SocialLink from './SocialLink'
import { Social } from '~/services/contest/types/contest.interface'
import TallyVoteDialog from './TallyVoteDialog'
import { Link } from '@remix-run/react'
import { socials } from '~/lib/data/socials'
import { useState } from 'react'


interface ContestantStatisticsCardProps {
  contestant: EnrichedContestant;
}

export  function ContestantStatisticsCard({ contestant }: ContestantStatisticsCardProps) {

    const [totalVotes, setTotalVotes] = useState<number>(getContestantTotalVotes(contestant));
 function getContestantTotalVotes(contestant: EnrichedContestant): number {
    if(contestant.originalContestantData?.result?.total_votes > 0){
        return contestant.originalContestantData.result.total_votes
    }
    let computedTotalVotes = 0;
    Object.entries(contestant.originalContestantData.vote).forEach(([key, value]) => {
        if(typeof value === 'number')
            computedTotalVotes+= value;

    });
    return computedTotalVotes;
 }
  const { fullName, contestName, stage, stageStatus, contestImage, is_evicted, originalContestantData, stageSocialMedia } = contestant;
  const vote = originalContestantData.vote;
  const result = originalContestantData.result ;
  console.log(contestant)
  return (
    <article className="border-2 border-primary rounded-3xl overflow-hidden">
      <Link to={`/contest/contestant/${originalContestantData._id}?stageId=${originalContestantData.stage_id}&contestantCode=${originalContestantData.code}`}>
        <img src={originalContestantData.image_url || noImage} alt={fullName} className="w-full h-80 object-cover object-top" />
      </Link>
      <div className="p-4 bg-secondary">
        <span className="block font-black uppercase mb-2">{fullName}</span>
        <span className="block text-[#5F6D7E] text-sm font-medium mb-2">{contestName}</span>
        <span className="block text-[#5F6D7E] text-xs font-medium mb-2">Stage {stage} • {stageStatus.replace(/_/g, " ")}</span>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-500">Total Votes</span>
            <div className="text-xl font-bold text-indigo-700">{totalVotes}</div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Rank</span>
            <div className="text-xl font-bold text-green-700">{originalContestantData.rank ?? "N/A"}</div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Grade</span>
            <div className="text-lg font-semibold text-gray-800">{result?.grade ?? "N/A"}</div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Vote %</span>
            <div className="text-lg font-semibold text-blue-600">{result?.overall_vote_percentage ?? 0}%</div>
          </div>
        </div>
        <div className="mb-4">
          <span className="block text-xs text-gray-500 mb-1">Votes by Channel</span>
          <div className="grid grid-cols-2 gap-2">
            
            <div className="flex items-center gap-2">
                <span className="text-xs font-semibold capitalize">{stageSocialMedia}</span>
                <span className="text-sm font-bold">
                  {vote.social_media}
                </span>
              </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Tally</span>
              <span className="text-sm font-bold">{vote.tally ?? result?.weighted_scores?.tally ?? 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Judge</span>
              <span className="text-sm font-bold">{vote.judge ?? result?.weighted_scores?.judge ?? 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Givaah</span>
              <span className="text-sm font-bold">{vote.givaah ?? result?.weighted_scores?.givaah ?? 0}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold">Bonus</span>
              <span className="text-sm font-bold">{vote.bonus ?? result?.weighted_scores?.bonus ?? 0}</span>
            </div>
          </div>
        </div>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${is_evicted ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {is_evicted ? "Evicted" : "Active"}
        </span>
      </div>
    </article>
  );
}

export default function ContestantCard({ contestant, socialMedia }: { contestant: IContestant, socialMedia: Social }) {
    const fullName = `${contestant.contestant_biodata.first_name} ${contestant.contestant_biodata.last_name}`
    console.log({contestant})
    return (
        
        <article className='border-2 border-primary rounded-3xl overflow-hidden'>
            <Link to={`/contest/contestant/${contestant._id}?stageId=${contestant.stage_id}&contestantCode=${contestant.code}`}>
                <img src={contestant.image_url || noImage} alt="person smiling" className='w-full h-80 object-cover object-top' />
            </Link>
            <div className="p-4 bg-secondary">
                <span className='block text-[#5F6D7E] text-sm font-medium mb-2'>Vote now for your favorite contestant</span>
                <span className='block font-black uppercase mb-4'>{fullName}</span>
                <span className='block text-[#5F6D7E] text-sm font-medium mb-2'>{contestant.category}</span>
                <div className="grid grid-cols-2 gap-4">
                    {socialMedia === "kotmy"
                        ? <SocialLink
                            type={socialMedia}
                            url={contestant.social_media_url}
                            voted={contestant.result.device_voted_for_contestant}
                            contestantId={contestant._id}
                            stageId={contestant.stage_id}
                        />
                        : <SocialLink
                            type={socialMedia}
                            url={contestant.social_media_url}
                            voted={contestant.result.device_voted_for_contestant}
                        />
                    }
                    <TallyVoteDialog contestant={contestant}>
                        <SocialLink type='tally' className='w-full' />
                    </TallyVoteDialog>
                    {/* <SocialLink type='givaah' url='.' /> */}
                </div>
            </div>
        </article>
        
    )
}
