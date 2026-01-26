import { ApiEndPoints } from "~/lib/api/endpoints";
import { ILedgerEntry, IUserLedgersQuery, IWallet, IWalletRepository } from "./types/wallet.interface";
import { ApiCall } from "~/lib/api/fetcher";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";

export class WalletRepository implements IWalletRepository{
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
}

export let walletRepo = new WalletRepository();
