// filepath: app/services/partner/partner.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { ICreatePartnerDTO } from "./types/partner.interface";
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
}

export const partnerServer = new PartnerServer();
