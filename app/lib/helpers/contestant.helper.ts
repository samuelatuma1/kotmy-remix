import { IContestWStageWContestant } from "~/services/contest/types/contest.interface";
import { EnrichedContestant } from "~/services/contestant/types/contestant.interface";

export class ContestantHelper {
    enrichContestantsDataForContest(contestWStageWContetant: IContestWStageWContestant): EnrichedContestant[] {
        const contestantsUpload: EnrichedContestant[] = [];

        for (const stage of contestWStageWContetant.stages) {
            for (const contestant of stage.contestants) {
                const contestantUpload: EnrichedContestant = {
                    id: contestant._id,
                    fullName: `${contestant.contestant_biodata?.first_name} ${contestant.contestant_biodata?.last_name}`,
                    contestantCode: contestant.code,
                    contestName: contestWStageWContetant.name,
                    stage: stage.stage,
                    stageStatus: stage.status,
                    stageMediaType: stage.media_type ?? "image",
                    contestImage: contestWStageWContetant.image_url ?? '',
                    contestantId: contestant._id,
                    contestantImage: contestant.image_url,
                    originalContestantData: contestant,
                    code: contestant.code,
                    stageSocialMedia: stage.rates.social_media.type,
                    info: contestant.info ?? "Abeg, vote for me",
                    is_evicted: contestant.is_evicted
                };
                contestantsUpload.push(contestantUpload);
            }
        }
        console.log({contestantsUpload});
        return contestantsUpload;
    }

    enrichContestsContestantsData(contestsWStageWContetant: IContestWStageWContestant[]): EnrichedContestant[] {
        let pendingUploads: EnrichedContestant[] = [];
        for (const contest of contestsWStageWContetant) {
            const flattenedContest = this.enrichContestantsDataForContest(contest);
            pendingUploads.push(...flattenedContest);
        }
        return pendingUploads;
    }
}

export const contestantHelper = new ContestantHelper();