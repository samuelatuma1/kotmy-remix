import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { DiscountedAirtimeAmountResponse, GetDiscountedAirtimePrice, PurchaseVTUAirtimeProductFromWallet, SearchAirtimePlansQuery, VTUAirtimeProductFromBank, VTUAirtimePlanDTO, VTUAirtimeProduct, VTUPurchaseResponse, IQueryVTUPurchases, VTUPurchaseResponsePaged } from "./types/vtu.interface";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { ApiCall } from "~/lib/api/fetcher";
import { PaymentResponseDTO } from "../admin/types/admin.interface";


export class VTUServer {
  private buildQueryString(query: object) {
    return new URLSearchParams(
      Object.entries(query as Record<string, unknown>).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          acc[key] = String(value);
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();
  }

  async searchAirtimePlans(query: SearchAirtimePlansQuery, cookies?: Request): Promise<TFetcherResponse<VTUAirtimePlanDTO>> {
    const params = this.buildQueryString(query);
    const url = `${ApiEndPoints.getAirtimePlans}?${params}`;
    console.log("Ng toto sha, so rich in flavor")
    const { data, error } = await ApiCall.call<VTUAirtimePlanDTO, unknown>({
      url,
      method: "GET",
    }, cookies);
    if (error) return { error };
    return { data };
  }

  async getDiscountedAirtimePrice(query: GetDiscountedAirtimePrice, cookies?: Request):  Promise<TFetcherResponse<DiscountedAirtimeAmountResponse>>{
        const params = this.buildQueryString(query);
        const url = `${ApiEndPoints.discountedAirtimePrice}?${params}`;
        const { data, error } = await ApiCall.call<DiscountedAirtimeAmountResponse, unknown>({
        url,
        method: "GET",
        }, cookies);
        if (error) return { error };
        return { data };
  }

  async purchaseVTUAirtimeProductFromWallet(form: PurchaseVTUAirtimeProductFromWallet, cookies: Request):  Promise<TFetcherResponse<VTUPurchaseResponse>>{
    const { data, error } = await ApiCall.call<VTUPurchaseResponse, PurchaseVTUAirtimeProductFromWallet>({
          url: ApiEndPoints.airtimeplansWalletPurchase,
          method: "POST",
          data: form,
        }, cookies);
    
        if (error) return { error };
        return { data };
  }

  async purchaseVTUAirtimeProductFromBank(form: VTUAirtimeProductFromBank, cookies: Request):  Promise<TFetcherResponse<PaymentResponseDTO>>{
    const { data, error } = await ApiCall.call<PaymentResponseDTO, VTUAirtimeProductFromBank>({
          url: ApiEndPoints.airtimePurchaseFromProvider,
          method: "POST",
          data: form,
        }, cookies);
    
        if (error) return { error };
        return { data };
  }

  async getVTUPurchaseByReference(reference: string, cookies?: Request):  Promise<TFetcherResponse<VTUPurchaseResponse>>{
        const url = `${ApiEndPoints.getVtuPurchaseByReference(reference)}`;
        const { data, error } = await ApiCall.call<VTUPurchaseResponse, unknown>({
        url,
        method: "GET",
        }, cookies);
        if (error) return { error };
        return { data };
  }

  async getVTUPurchaseResponsePaged(query: IQueryVTUPurchases, cookies: Request): Promise<TFetcherResponse<VTUPurchaseResponsePaged>>  {
        const params = this.buildQueryString(query);
        const url = `${ApiEndPoints.getVtuPurchases}?${params}`;
        const { data, error } = await ApiCall.call<VTUPurchaseResponsePaged, unknown>({
        url,
        method: "GET",
        }, cookies);
        if (error) return { error };
        return { data };
    
  }

  
}

export const vtuServer = new VTUServer();