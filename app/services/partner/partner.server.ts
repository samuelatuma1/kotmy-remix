// filepath: app/services/partner/partner.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { Business, BusinessQuery, ICreatePartnerDTO, ICreatePartnerProductDTO, IQueryPartnerLocations, IQueryPartnerProduct, PartnerLocation, PartnerProduct, PartnerProductResponse } from "./types/partner.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";

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

  async searchPartners(query: BusinessQuery, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<Business>>> {
    const params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    const url = `${ApiEndPoints.partnerSearch}?${params}`;
    const { data, error } = await ApiCall.call<IPaginatedResponse<Business>, unknown>({
      url,
      method: "GET",
    }, cookies);
    if (error) return { error };
    return { data };
  }

  async addPartnerProduct(
    dto: ICreatePartnerProductDTO,
    cookie: string
  ): Promise<TFetcherResponse<PartnerProductResponse>> {
    const formData = new FormData();
    formData.append("name", dto.name);
    formData.append("description", dto.description);
    formData.append("price_min", String(dto.price_min ?? 0));
    formData.append("price_max", String(dto.price_max ?? 0));
    formData.append("category", dto.category ?? "");
    formData.append("currency", dto.currency ?? "NGN");
    formData.append("status", dto.status ?? "available");
    if (dto.business_id) formData.append("business_id", dto.business_id);
    if (dto.sku) formData.append("sku", dto.sku);
    if (dto.tags && dto.tags.length > 0) {
      dto.tags.forEach(tag => formData.append("tags", tag));
    }
    if (dto.created_by) formData.append("created_by", dto.created_by);
    if (dto.image) formData.append("image", dto.image);

    const { data, error } = await ApiCall.call<PartnerProductResponse, FormData>({
      url: ApiEndPoints.createPartnerProduct,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }, cookie);

    if (error) return { error };
    return { data };
  }

  async getPartnerProducts(query: IQueryPartnerProduct, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerProduct>>> {
    const params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const url = `${ApiEndPoints.getPartnerProducts}?${params}`;

     const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerProduct>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getPartnerLocations(query: IQueryPartnerLocations, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerLocation>>> {
    const params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const url = `${ApiEndPoints.getPartnerLocations}?${params}`;

     const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerLocation>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }
}

export const partnerServer = new PartnerServer();
