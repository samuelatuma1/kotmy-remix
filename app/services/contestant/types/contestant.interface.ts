import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IContestWStageWContestant, IStage, IContest, Social, IStageWContestant } from "~/services/contest/types/contest.interface";

export interface IContestant {
  _id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  stage_id: string;
  contestant_biodata_id: string;
  image: null;
  vote: {
    social_media: number;
    tally: number;
    judge: number;
    givaah: number;
    bonus: number;
    social_media_bonus: number;
    tally_bonus: number;
    judge_bonus: number;
    givaah_bonus: number;
  };
  social_media_url: string;
  code: string;
  is_evicted: boolean;
  category: string;
  rank: number;
  image_url: string;
  result: {
    overall_vote_percentage: number;
    position: number;
    grade: string;
    total_votes: number;
    weighted_scores: {
      social_media: number;
      tally: number;
      judge: number;
      givaah: number;
      bonus: number;
    };
    device_voted_for_contestant: boolean;
  };
  contestant_biodata: IContestantBiodata
  pin?: string
  allow_update?: boolean,
  info?: string
}

export interface IContestantBiodata {
    _id: string;
    first_name: string;
    last_name: string;
    dob: string;
    sex: string;
    email: string;
    state_of_residence: string;
    whatsapp_no: string;
    info: string;
  
}

export interface IContestantBiodataWContest extends IContestantBiodata {
    contest?: IContest[] 
}
export interface ILeanContestant {
  _id: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  stage_id: string;
  contestant_biodata_id: string;
  image: null;
  vote: {
    social_media: number;
    tally: number;
    judge: number;
    givaah: number;
    bonus: number;
    social_media_bonus: number;
    tally_bonus: number;
    judge_bonus: number;
    givaah_bonus: number;
  };
  social_media_url: string;
  code: string;
  is_evicted: boolean;
  category: string;
  rank: number;
  image_url: string;
  result: null;
  contestant_biodata: null;
}

export interface IEditContestantDTO {
  biodata?: {
    first_name?: string;
    last_name?: string;
    dob?: string;
    sex?: string;
    email?: string;
    state_of_residence?: string;
    whatsapp_no?: string;
  };
  social_media_url?: string;
  vote?: {
    social_media?: number;
    judge?: number;
    bonus?: number;
  };
}

export interface IToggleEvictContestantDTO {
  stage_id: string;
  action: "evict" | "admit";
  contestants_ids: string[];
}

export interface IGetTallyLinkDTO {
  provider: string;
  email: string;
  phone_number: string;
  contestant_id: string;
  number_of_votes: number;
  redirect_url: string;
}

export interface IVoteContestantDto {
  name?: string;
  email?: string;
  phone?: string;
  device_fingerprint?: string;
  contestant_id: string;
}

export interface IContestantRepository {
  callTallyWebhook(dto: unknown): Promise<TFetcherResponse<unknown>>;
  editContestantAdmin(
    payload: { dto: FormData; contestantId: string },
    token: string
  ): Promise<TFetcherResponse<IContestant>>;
  getTallyLink(
    dto: IGetTallyLinkDTO
  ): Promise<TFetcherResponse<{ payment_link: string }>>;
  registerContestant(payload: {
    contestId: string;
    dto: FormData;
  }, cookies: string | Request): Promise<TFetcherResponse<IContestant>>;
  toggleEvictContestants(
    dto: IToggleEvictContestantDTO,
    token: string
  ): Promise<TFetcherResponse<void>>;
  voteContestant(payload: {
    dto: IVoteContestantDto;
    stageId: string;
    // fingerprint: string;
  }, cookies: string | Request): Promise<TFetcherResponse<ILeanContestant>>;
  getContestantViaHash(hash: string): Promise<TFetcherResponse<IContestWStageWContestant>>;
}

import { StageMediaType, StageStatus } from "~/lib/types/contest.interface"
import { extend } from "isbot";
import { IBasePaginationQuery } from "~/services/admin/types/admin.interface";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";

export interface EnrichedContestant{
  id: string
  fullName: string
  contestantCode: string
  contestName: string
  stage: number
  stageStatus: StageStatus,
  stageMediaType: StageMediaType | string
  contestImage: string
  contestantId: string,
  contestantImage?: string,
  originalContestantData: IContestant,
  code: string,
  stageSocialMedia: Social,
  info: string,
  is_evicted: boolean
}

export interface IVoteContestantWithGivaahCredits{
    contestant_id: string
    givaah_credits_to_use: number
}

export interface IVoteContestantFromWalletPayload {
  contestant_id: string;
  wallet_id: string;
  remark: string;
  number_of_votes: number;
}

export interface StageContestantsQuery extends IBasePaginationQuery{
  wild_card?: string

}

// class PagedContestantsStageResponse(PagedModel, StageResponse):
//     items: List[ContestantResponse] = Field(default=[])
//     contestants: List[ContestantResponse] | None = Field(default=None, exclude=True)

export interface PagedContestantsStageResponse extends IPaginatedResponse<IContestant>, IStageWContestant{
  
}