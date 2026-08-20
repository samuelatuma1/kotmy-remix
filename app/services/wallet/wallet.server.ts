import { ApiEndPoints } from "~/lib/api/endpoints";
import { IAddAccountDetailsRequest, IAdminRefereeIncomeForReferrerPagedResponse, IAdminReferrerBoardQuery, IAffiliateLeaderboardResponse, IAffiliateLeaderboardSearch, ICreateWithdrawalPinDTO, ICurrencyBanks, IGetWithdrawalCharge, ILedgerEntry, IReferrerBoardQuery, IRequestWithdrawal, IRequestWithdrawalResponse, IResolveAccountDetailsResponse, IResolveAccountRequest, IUserLedgersQuery, IWallet, IWalletAccount, IWithdrawalChargeResponse, ReferrerBoardPagedResponse } from "./types/wallet.interface";
import { ApiCall } from "~/lib/api/fetcher";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";
import { ILoginResponseDTO } from "../auth/types/auth.dtos";
import { IUserQueryDTO } from "../admin/types/admin.interface";

export class WalletRepository{
    async getUserWallets(cookies: string | Request): Promise<TFetcherResponse<IWallet[]>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.userWallets,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getBusinessWallets(cookies: string | Request): Promise<TFetcherResponse<IWallet[]>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.businessWallets,

        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getOrganizationWallets(cookies: string | Request): Promise<TFetcherResponse<IWallet[]>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.organizationWallets,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getUserWalletById(walletId: string, cookies: string | Request): Promise<TFetcherResponse<IWallet>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.userWallets,
            
        }, cookies)

        if(data) {
            const res = data.find(wallet => wallet._id === walletId)
            return {data: res as unknown as IWallet, error, authRequired}
        }
        return { error, authRequired }
    }

     async getPartnerWalletById(walletId: string, cookies: string | Request): Promise<TFetcherResponse<IWallet>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.partnerWallets,
            
        }, cookies)

        if(data) {
            const res = data.find(wallet => wallet._id === walletId)
            return {data: res as unknown as IWallet, error, authRequired}
        }
        return { error, authRequired }
    }

    async getWalletWithdrawalAccounts(walletid: string, cookies: string | Request): Promise<TFetcherResponse<IWalletAccount[]>> {
        const { data, error,authRequired } = await ApiCall.call<IWalletAccount[], unknown>({
            method: "GET",
            url: ApiEndPoints.getWalletWithdrawalAccounts(walletid)
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getBanksForCurrency(currency: string, cookies: string | Request): Promise<TFetcherResponse<ICurrencyBanks[]>> {
        const { data, error,authRequired } = await ApiCall.call<ICurrencyBanks[], unknown>({
            method: "GET",
            url: ApiEndPoints.getBanksForCurrency(currency)
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getUserLedgersForWallet(cookies: string | Request, query: IUserLedgersQuery | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILedgerEntry>>>{
        // convert all data in query to url params if query is not null
        let url = ApiEndPoints.userLedgers;
        if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => {
                if (value !== null && value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            }, {} as Record<string, string>));
            const queryString = params.toString();

            if (queryString) {
                url = `${url}?${queryString}`;
            }
        }
        
        const { data, error,authRequired } = await ApiCall.call<IPaginatedResponse<ILedgerEntry>, unknown>({
            method: "GET",
            url,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getBusinessLedgersForWallet(cookies: string | Request, query: IUserLedgersQuery | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILedgerEntry>>>{
        // convert all data in query to url params if query is not null
        let url = ApiEndPoints.businessLedgers;
        if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => {
                if (value !== null && value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            }, {} as Record<string, string>));
            const queryString = params.toString();

            if (queryString) {
                url = `${url}?${queryString}`;
            }
        }
        
        const { data, error,authRequired } = await ApiCall.call<IPaginatedResponse<ILedgerEntry>, unknown>({
            method: "GET",
            url,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getBusinessWalletById(walletId: string, cookies: string | Request): Promise<TFetcherResponse<IWallet>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.businessWallets,
            
        }, cookies)

        if(data) {
            const res = data.find(wallet => wallet._id === walletId)
            return {data: res as unknown as IWallet, error, authRequired}
        }
        return { error, authRequired }
    }


    // /v2/api/wallet/organization_ledgers
    async getOrganizationLedgersForWallet(cookies: string | Request, query: IUserLedgersQuery | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILedgerEntry>>>{
        // convert all data in query to url params if query is not null
        let url = ApiEndPoints.organizationLedgers;
        if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => {
                if (value !== null && value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            }, {} as Record<string, string>));
            const queryString = params.toString();

            if (queryString) {
                url = `${url}?${queryString}`;
            }
        }
        
        const { data, error,authRequired } = await ApiCall.call<IPaginatedResponse<ILedgerEntry>, unknown>({
            method: "GET",
            url,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }


    async wallet_search(query: IUserLedgersQuery, cookies: string | Request): Promise<TFetcherResponse<IWallet>>{
        let url = ApiEndPoints.walletMetrics;
        const params = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => {
            if (value !== null && value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {} as Record<string, string>));
        const queryString = params.toString();
        if (queryString) url = `${url}?${queryString}`;

        const { data, error, authRequired } = await ApiCall.call<IWallet, unknown>({
            method: 'GET',
            url,
        }, cookies);
        console.log("MY DATA", data)
        if (data) return { data };
        return { error, authRequired };
    }

    async business_wallet_search(query: IUserLedgersQuery, cookies: string | Request): Promise<TFetcherResponse<IWallet>>{
        let url = ApiEndPoints.businessWalletMetrics;
        const params = new URLSearchParams(Object.entries(query).reduce((acc, [key, value]) => {
            if (value !== null && value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {} as Record<string, string>));
        const queryString = params.toString();
        if (queryString) url = `${url}?${queryString}`;

        const { data, error, authRequired } = await ApiCall.call<IWallet, unknown>({
            method: 'GET',
            url,
        }, cookies);
        console.log("MY DATA", data)
        if (data) return { data };
        return { error, authRequired };
    }

    async requestWithdrawalToken(cookies: string | Request): Promise<TFetcherResponse<string>> {
        const { data, error,authRequired } = await ApiCall.call<string, unknown>({
            method: "GET",
            url: ApiEndPoints.requestWithdrawalTokenForPinCreation,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired } as TFetcherResponse<string>
    }

    async requestPartnerWithdrawalToken(cookies: string | Request): Promise<TFetcherResponse<string>> {
        console.log(`Requesting partner withdrawal token for Request: ${cookies}`);
        const { data, error,authRequired } = await ApiCall.call<string, unknown>({
            method: "GET",
            url: ApiEndPoints.requestPartnerWithdrawalTokenForPinCreation,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired } as TFetcherResponse<string>
    }
    
    async createWithdrawalPin( dto: ICreateWithdrawalPinDTO, cookies: string | Request): Promise<TFetcherResponse<ILoginResponseDTO>> {
        const { data, error,authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
            method: "POST",
            url: ApiEndPoints.setWithdrawalPin,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
        
        
    }

    async createPartnerWithdrawalPin( dto: ICreateWithdrawalPinDTO, cookies: string | Request): Promise<TFetcherResponse<ILoginResponseDTO>> {
        const { data, error,authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
            method: "POST",
            url: ApiEndPoints.setPartnerWithdrawalPin,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
        
        
    }

    

    async resolveAccountDetails(dto: IResolveAccountRequest, cookies: string | Request): Promise<TFetcherResponse<IResolveAccountDetailsResponse>> {
        const { data, error,authRequired } = await ApiCall.call<IResolveAccountDetailsResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.resolveAccountDetails,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
    }



    async addAccountDetails(dto: IAddAccountDetailsRequest, cookies: string | Request): Promise<TFetcherResponse<IWalletAccount>> {
        const { data, error,authRequired } = await ApiCall.call<IWalletAccount, unknown>({
            method: "POST",
            url: ApiEndPoints.addACCountDetails,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
    }

    async addPartnerAccountDetails(dto: IAddAccountDetailsRequest, cookies: string | Request): Promise<TFetcherResponse<IWalletAccount>> {
        const { data, error,authRequired } = await ApiCall.call<IWalletAccount, unknown>({
            method: "POST",
            url: ApiEndPoints.addPartnerAccountDetails,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
    }

    

     async getWithdrawalCharges(dto: IGetWithdrawalCharge, cookies: string | Request): Promise<TFetcherResponse<IWithdrawalChargeResponse>> {
        const { data, error,authRequired } = await ApiCall.call<IWithdrawalChargeResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.getWithdrawalCharges,
            data: dto
            
        }, cookies)
        console.log("EERIE", dto,data, error)
        if(data) return {data}
        return { error, authRequired }
    }

    async getPartnerWithdrawalCharges(dto: IGetWithdrawalCharge, cookies: string | Request): Promise<TFetcherResponse<IWithdrawalChargeResponse>> {
        const { data, error,authRequired } = await ApiCall.call<IWithdrawalChargeResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.getPartnerWithdrawalCharges,
            data: dto
            
        }, cookies)
        console.log("EERIE", dto,data, error)
        if(data) return {data}
        return { error, authRequired }
    }

    // business_get_withdrawal_charge_for_account
    async requestWithdrawal(dto: IRequestWithdrawal, cookies: string | Request): Promise<TFetcherResponse<IRequestWithdrawalResponse>> {
        const { data, error, authRequired } = await ApiCall.call<IRequestWithdrawalResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.requestWithdrawal,
            data: dto
        }, cookies);

        if (data) return { data };
        return { error, authRequired };
    }

    // /v2/api/wallet/business_request_withdrawal
     async requestPartnerWithdrawal(dto: IRequestWithdrawal, cookies: string | Request): Promise<TFetcherResponse<IRequestWithdrawalResponse>> {
        const { data, error, authRequired } = await ApiCall.call<IRequestWithdrawalResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.requestPartnerWithdrawal,
            data: dto
        }, cookies);

        if (data) return { data };
        return { error, authRequired };
    }

    async queryReferralBoard(cookies: string | Request, query: IReferrerBoardQuery | null = null): Promise<TFetcherResponse<ReferrerBoardPagedResponse>>{
          let url = ApiEndPoints.pagedReferralBoard;
          if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => {
              if (v !== undefined && v !== null) acc[k] = String(v);
              return acc;
            }, {} as Record<string, string>));

            const qs = params.toString();
            console.log({qs})
            if (qs) url = `${url}?${qs}`;
          }
    
          const { data, error, authRequired } = await ApiCall.call<ReferrerBoardPagedResponse, unknown>({
            method: "GET",
            url,
          }, cookies);
    
          if (data) return { data };
          return { error, authRequired };
      }


    async queryAdminAffiliateBoard(cookies: string | Request, query: IAdminReferrerBoardQuery | null = null): Promise<TFetcherResponse<IAdminRefereeIncomeForReferrerPagedResponse>>{
          let url = ApiEndPoints.adminAffiliateBoard;
          if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => {
              if (v !== undefined && v !== null) acc[k] = String(v);
              return acc;
            }, {} as Record<string, string>));

            const qs = params.toString();
            console.log({qs})
            if (qs) url = `${url}?${qs}`;
          }
    
          const { data, error, authRequired } = await ApiCall.call<IAdminRefereeIncomeForReferrerPagedResponse, unknown>({
            method: "GET",
            url,
          }, cookies);
    
          if (data) return { data };
          return { error, authRequired };
    }

    async queryAffiliateReferralBoard(cookies: Request, query: IAffiliateLeaderboardSearch | null = null): Promise<TFetcherResponse<IPaginatedResponse<IAffiliateLeaderboardResponse>>>{
          let url = ApiEndPoints.pagedAffiliateReferralBoard;
          if (query) {
            const params = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => {
              if (v !== undefined && v !== null) acc[k] = String(v);
              return acc;
            }, {} as Record<string, string>));

            const qs = params.toString();
            console.log({qs})
            if (qs) url = `${url}?${qs}`;
          }

          const { data, error, authRequired } = await ApiCall.call<IPaginatedResponse<IAffiliateLeaderboardResponse>, unknown>({
            method: "GET",
            url,
          }, cookies);
    
          if (data) return { data };
          return { error, authRequired };
      }

    
}

export let walletRepo = new WalletRepository();
