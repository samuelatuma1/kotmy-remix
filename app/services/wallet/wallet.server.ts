import { ApiEndPoints } from "~/lib/api/endpoints";
import { IAddAccountDetailsRequest, ICreateWithdrawalPinDTO, ICurrencyBanks, IGetWithdrawalCharge, ILedgerEntry, IRequestWithdrawal, IRequestWithdrawalResponse, IResolveAccountDetailsResponse, IResolveAccountRequest, IUserLedgersQuery, IWallet, IWalletAccount, IWithdrawalChargeResponse } from "./types/wallet.interface";
import { ApiCall } from "~/lib/api/fetcher";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";
import { ILoginResponseDTO } from "../auth/types/auth.dtos";

export class WalletRepository{
    async getUserWallets(cookies: string): Promise<TFetcherResponse<IWallet[]>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.userWallets,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getOrganizationWallets(cookies: string): Promise<TFetcherResponse<IWallet[]>> {
        // Implement API call to fetch user wallets
        const { data, error,authRequired } = await ApiCall.call<IWallet[], unknown>({
            method: "GET",
            url: ApiEndPoints.organizationWallets,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getUserWalletById(walletId: string, cookies: string): Promise<TFetcherResponse<IWallet>> {
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

    async getWalletWithdrawalAccounts(walletid: string, cookies: string): Promise<TFetcherResponse<IWalletAccount[]>> {
        const { data, error,authRequired } = await ApiCall.call<IWalletAccount[], unknown>({
            method: "GET",
            url: ApiEndPoints.getWalletWithdrawalAccounts(walletid)
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getBanksForCurrency(currency: string, cookies: string): Promise<TFetcherResponse<ICurrencyBanks[]>> {
        const { data, error,authRequired } = await ApiCall.call<ICurrencyBanks[], unknown>({
            method: "GET",
            url: ApiEndPoints.getBanksForCurrency(currency)
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired }
    }

    async getUserLedgersForWallet(cookies: string, query: IUserLedgersQuery | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILedgerEntry>>>{
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

    // /v2/api/wallet/organization_ledgers
    async getOrganizationLedgersForWallet(cookies: string, query: IUserLedgersQuery | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILedgerEntry>>>{
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


    async wallet_search(query: IUserLedgersQuery, cookies: string): Promise<TFetcherResponse<IWallet>>{
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

    async requestWithdrawalToken(cookies: string): Promise<TFetcherResponse<string>> {
        const { data, error,authRequired } = await ApiCall.call<string, unknown>({
            method: "GET",
            url: ApiEndPoints.requestWithdrawalTokenForPinCreation,
            
        }, cookies)

        console.log({data, error})
        if(data) return {data}
        return { error, authRequired } as TFetcherResponse<string>
    }
    async createWithdrawalPin( dto: ICreateWithdrawalPinDTO, cookies: string): Promise<TFetcherResponse<ILoginResponseDTO>> {
        const { data, error,authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
            method: "POST",
            url: ApiEndPoints.setWithdrawalPin,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
        
        
    }

    async resolveAccountDetails(dto: IResolveAccountRequest, cookies: string): Promise<TFetcherResponse<IResolveAccountDetailsResponse>> {
        const { data, error,authRequired } = await ApiCall.call<IResolveAccountDetailsResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.resolveAccountDetails,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
    }



    async addAccountDetails(dto: IAddAccountDetailsRequest, cookies: string): Promise<TFetcherResponse<IWalletAccount>> {
        const { data, error,authRequired } = await ApiCall.call<IWalletAccount, unknown>({
            method: "POST",
            url: ApiEndPoints.addACCountDetails,
            data: dto
            
        }, cookies)
        
        if(data) return {data}
        return { error, authRequired }
    }

     async getWithdrawalCharges(dto: IGetWithdrawalCharge, cookies: string): Promise<TFetcherResponse<IWithdrawalChargeResponse>> {
        const { data, error,authRequired } = await ApiCall.call<IWithdrawalChargeResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.getWithdrawalCharges,
            data: dto
            
        }, cookies)
        console.log("EERIE", dto,data, error)
        if(data) return {data}
        return { error, authRequired }
    }
    async requestWithdrawal(dto: IRequestWithdrawal, cookies: string): Promise<TFetcherResponse<IRequestWithdrawalResponse>> {
        const { data, error, authRequired } = await ApiCall.call<IRequestWithdrawalResponse, unknown>({
            method: "POST",
            url: ApiEndPoints.requestWithdrawal,
            data: dto
        }, cookies);

        if (data) return { data };
        return { error, authRequired };
    }

    
}

export let walletRepo = new WalletRepository();
