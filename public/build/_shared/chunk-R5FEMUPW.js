import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";

// app/lib/helpers/contestant.helper.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/helpers/contestant.helper.ts"
  );
  import.meta.hot.lastModified = "1763968701207.4275";
}
var ContestantHelper = class {
  enrichContestantsDataForContest(contestWStageWContetant) {
    const contestantsUpload = [];
    for (const stage of contestWStageWContetant.stages) {
      for (const contestant of stage.contestants) {
        const contestantUpload = {
          id: contestant._id,
          fullName: `${contestant.contestant_biodata?.first_name} ${contestant.contestant_biodata?.last_name}`,
          contestantCode: contestant.code,
          contestName: contestWStageWContetant.name,
          stage: stage.stage,
          stageStatus: stage.status,
          stageMediaType: stage.media_type ?? "image",
          contestImage: contestWStageWContetant.image_url ?? "",
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
    console.log({ contestantsUpload });
    return contestantsUpload;
  }
  enrichContestsContestantsData(contestsWStageWContetant) {
    let pendingUploads = [];
    for (const contest of contestsWStageWContetant) {
      const flattenedContest = this.enrichContestantsDataForContest(contest);
      pendingUploads.push(...flattenedContest);
    }
    return pendingUploads;
  }
};
var contestantHelper = new ContestantHelper();

export {
  contestantHelper
};
//# sourceMappingURL=/build/_shared/chunk-R5FEMUPW.js.map
