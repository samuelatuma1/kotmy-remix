import { TFetcherResponse } from "~/lib/api/types/fetcher.interface"
import { socials } from "~/lib/data/socials"
import { StageMediaType } from "~/lib/types/contest.interface"
import { IContestant, IContestantBiodata } from "~/services/contestant/types/contestant.interface"

export type ContestStatus = 'yet_to_start' | 'registering' | 'ongoing' | 'completed'
export type StageStatus = "yet_to_start" | "ongoing" | "completed"
export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type Social = typeof socials[number]

export type Rate = {
    social_media: {
        type: Social
        amount: number
    }
    tally: number
    judge: number
    givaah: number
    bonus?: number
    price_per_vote?: number
    vote_currency?: string

    social_media_bonus: number
    tally_bonus: number
    judge_bonus: number
    givaah_bonus: number

}

export interface IContestDto {
    _id: string
    str_id: string,
    name: string
    desc: string
    contest_unique_id: string
    tournament_unique_id: string
    image_url: string | null
    status: ContestStatus
    start_date: string
    end_date: string
    reg_deadline: string
    prizes: string
    sub_req: string
    terms_cond: string
    add_info: string
    uploaded_by: string
    can_register: boolean
    categories: string[]
    stages: IStage[]
    no_of_stages?: number
    no_of_winners?: number

    tally_vote_split_earnings: ITallyVoteSplitEarning
}

export interface IContest {
    _id: string
    id: string
    name: string
    desc: string
    tournament_unique_id: string
    contest_unique_id?: string
    image: string | null
    status: ContestStatus
    start_date: string
    end_date: string
    reg_deadline: string
    prizes: string
    sub_req: string
    terms_cond: string
    add_info: string
    categories: string[]

    no_of_stages?: number
    no_of_winners?: number
    image_url?: string

    tally_vote_split_earnings: ITallyVoteSplitEarning
}

export interface IContestWStage extends IContest {
    stages: IStage[]
}

export interface IContestWStageWContestant extends IContest {
    stages: IStageWContestant[]
}

export interface IContestWFinalResult extends IContestDto {
    final_result_scores?: ContestantResultForContest[]
    final_result_headings: string[]

}

export interface  ContestantResultForContest{
    stage_results: { [key: string]: number }
    position: number;
    total_votes: number;
    contestant_biodata: IContestantBiodata
    table_data: { [key: string]: string | number }
}
export interface IStage {
    _id: string
    contest_unique_id?: string  | null
    stage: number
    weight: number
    start_date: string
    end_date: string
    rates: Rate
    success_count: number
    grade: Record<Grade, [number, number]>
    format: "STRAIGHT" | 'PAIRED' | 'GROUPED' | null
    active: boolean // to be removed
    status: StageStatus // 'yet_to_start'
    number_of_contestants: number // 0
    total_registered_contestants: number // 0
    contestants_upload_folder: string
    contestants_view_folder: string

    price_per_vote?: number
    contest_id?: string
    media_type?: string | StageMediaType

    enable_bonus: boolean

    bonus_reset_time: string
}

export interface ITallyVoteSplitEarning{
    contestant_share_percent: number,
    min_for_referral_earning: number,
    referral_bonus_from_min: number,
    referral_percent_after_min: number
}
export interface StageBonusJob{
    job_id: string,
    next_run_time: string,
    success: boolean,
    message: string | null,
    job_added: boolean,
    job_removed: boolean
}
export interface IStageWContestant extends IStage {
    contestants: IContestant[]
}


export interface ICreateContestDTO {
    image: File | null
    name: string
    desc: string
    tournament_unique_id: string
    contest_unique_id: string
    start_date: string
    end_date: string
    reg_deadline: string
    categories: string // no longer a dict
    prizes: string
    sub_req: string
    terms_cond: string
    add_info: string
    no_of_stages: number
    stages: string // stringified ICreateStageDTO[]
    tally_vote_split_earnings: string // stringified ITallyVoteSplitEarning
}

export interface ICreateStageDTO {
    contest_unique_id: string
    stage: number
    weight: number
    rates: Rate
}

export interface IMigrateStageDTO {
    current_stage_id: string
    new_stage_id: string
}

export function dtoToContest(contest: IContestDto): IContest | IContestWStage {
    if (!contest) return contest
    return {
        _id: contest._id,
        id: contest.contest_unique_id,
        name: contest.name,
        desc: contest.desc,
        tournament_unique_id: contest.tournament_unique_id,
        image: contest.image_url,
        status: contest.status,
        start_date: contest.start_date,
        end_date: contest.end_date,
        reg_deadline: contest.reg_deadline,
        prizes: contest.prizes,
        sub_req: contest.sub_req,
        terms_cond: contest.terms_cond,
        add_info: contest.add_info,
        categories: contest.categories,
        stages: contest.stages,
        no_of_stages: contest.no_of_stages,
        no_of_winners: contest.no_of_winners,
        tally_vote_split_earnings: contest.tally_vote_split_earnings,
    }
}

export function dtoToContestInTournament(contest: Pick<IContestDto, 'contest_unique_id' | '_id' | 'image_url' | 'name' | 'status'>) {
    return {
        id: contest.contest_unique_id,
        image: contest.image_url,
        name: contest.name,
        status: contest.status,
    }
}


export interface WinnerResponse {
  contest_id: string;
  contestant_code: string;
  user_id: string;
  contestant_email: string;
  admin_remark: string;
  contestant_remark: string;
  rank: number;
  reward_status_updated_date: string | null;
  reward: any | null;
  win_type: string;
  contestant_biodata: any | null;
  user: any | null;
  contest: any | null;
  full_name: string;
  contest_name: string;
  image_url: string;
  remark: string;
  _id: string;
}

export interface WinnerQueryDTO {
  contest_id?: string | null;
  rank?: number | null;
  win_type?: string | null;
  user_id?: string | null;
}

// Query DTO for searching/listing contests (matches FastAPI ContestQuery)
export interface IContestQuery {
  name?: string | null;
  tournament_unique_id?: string | null;
  contest_unique_id?: string | null;
  uploaded_by?: string | null;
  min_created_at?: string | null; // ISO date string
  max_created_at?: string | null; // ISO date string
  status?: ContestStatus | null;
}

export interface IUserContestQuery {
  name?: string;
  tournament_unique_id?: string;
  contest_unique_id?: string;
  uploaded_by?: string;
  page_size?: number;
  last_key_id?: string | null;
  first_key_id?: string | null;
  direction?: "next" | "previous";
  
  // Datetimes are typically serialized as ISO strings in API responses/requests,
  // but you can accept Date objects depending on your HTTP client setup.
  min_created_at?: string | Date;
  max_created_at?: string | Date;
  
  status?: ContestStatus;
}

export interface IContestRepository {
    getContests(): Promise<TFetcherResponse<IContest[]>>
    getContestById(contestId: string): Promise<TFetcherResponse<IContest>>
    adminGetContestsInTournament(tournamentUniqueId: string, token: string): Promise<TFetcherResponse<IContestWStage[]>>
    getContestsInTournament(tournamentUniqueId: string): Promise<TFetcherResponse<IContestWStage[]>>
    createContest(contest: FormData, token: string): Promise<TFetcherResponse<IContest>>
    deleteContest(contestId: string, cookie: string): Promise<TFetcherResponse<boolean>>
   updateContest({ contestId, dto }: { contestId: string, dto: FormData}, cookie: string): Promise<TFetcherResponse<IContest>>
    updateStage({ stageId, dto}: { stageId: string; dto: Partial<IStage>;},token : string ): Promise<TFetcherResponse<IStage>>
    deleteStage({ stageId}: { stageId: string; }, token: string ): Promise<TFetcherResponse<null>>
    toggleRegistration({ contestId }: { contestId: string},  token: string ): Promise<TFetcherResponse<IContest>>
    getContestantsInStage(stageId: string, headers: { fingerprint: string }): Promise<TFetcherResponse<IStageWContestant>>
    migrateStage(payload: IMigrateStageDTO, token: string): Promise<TFetcherResponse<IStageWContestant>>
    getWinners(query?: WinnerQueryDTO): Promise<TFetcherResponse<WinnerResponse[]>>
    getWinnerById(winnerId: string): Promise<TFetcherResponse<WinnerResponse>>
}
