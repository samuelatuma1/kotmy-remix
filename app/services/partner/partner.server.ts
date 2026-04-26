// filepath: app/services/partner/partner.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { BusinessPagedResponse, BusinessQuery, ICreatePartnerDTO } from "./types/partner.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";

export class PartnerServer {
  async requestPartnership(dto: ICreatePartnerDTO): Promise<TFetcherResponse<string>> {
    console.log(dto)
    const { data, error } = await ApiCall.call<string, ICreatePartnerDTO>({
      url: ApiEndPoints.requestPartnership,
      method: "POST",
      data: dto,
    });
    if (error) return { error, data: undefined };
    return { data, error: undefined };
  }

  async searchPartners(query: BusinessQuery, cookies: string): Promise<TFetcherResponse<BusinessPagedResponse>> {
    const params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    const url = `${ApiEndPoints.partnerSearch}?${params}`;
    const { data, error } = await ApiCall.call<BusinessPagedResponse, unknown>({
      url,
      method: "GET",
    }, cookies);
    if (error) return { error };
    return { data };
  }
}

export const partnerServer = new PartnerServer();
