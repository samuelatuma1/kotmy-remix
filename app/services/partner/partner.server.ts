// filepath: app/services/partner/partner.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import { Business, BusinessQuery, IBusinessOwnerModel, ICreatePartnerDTO, ICreatePartnerProductDTO, IQueryPartnerLocations, IQueryPartnerProduct, IUpdateBusinessStatus, IUpdatePartnerProductDTO, PartnerLocation, PartnerProduct, PartnerProductResponse } from "./types/partner.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";

export class PartnerServer {
  private appendIfPresent(formData: FormData, key: string, value?: string | number | boolean | null) {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, String(value));
    }
  }

  private appendMany(formData: FormData, key: string, values?: string[]) {
    if (values && values.length > 0) {
      values.forEach(value => formData.append(key, value));
    }
  }

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

  async getBusinessDetails(businessId: string, cookies: string): Promise<TFetcherResponse<Business>> {
    const { data, error } = await ApiCall.call<Business, unknown>({
      url: ApiEndPoints.getPartnerBusinessDetails(businessId),
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async updateBusinessStatus(dto: IUpdateBusinessStatus, cookies: string): Promise<TFetcherResponse<Business>> {
    const { data, error } = await ApiCall.call<Business, IUpdateBusinessStatus>({
      url: ApiEndPoints.updatePartnerBusinessStatus,
      method: "PATCH",
      data: {
        ...dto,
        updated_on: dto.updated_on ?? new Date().toISOString(),
      },
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async addBusinessOwner(dto: IBusinessOwnerModel, cookies: string): Promise<TFetcherResponse<Business>> {
    const { data, error } = await ApiCall.call<Business, IBusinessOwnerModel>({
      url: ApiEndPoints.addBusinessOwner,
      method: "PATCH",
      data: dto,
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
    this.appendIfPresent(formData, "business_id", dto.business_id);
    this.appendIfPresent(formData, "sku", dto.sku);
    this.appendMany(formData, "tags", dto.tags);
    this.appendMany(formData, "locations", dto.locations);
    this.appendIfPresent(formData, "created_by", dto.created_by);
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

  async getPartnerProductById(productId: string, cookies: string): Promise<TFetcherResponse<PartnerProductResponse>> {
    const { data, error } = await ApiCall.call<PartnerProductResponse, unknown>({
      url: ApiEndPoints.getPartnerProductById(productId),
      method: "GET",
    }, cookies);
    console.log(data)
    if (error) return { error };
    return { data };
  }

  async updatePartnerProduct(
    productId: string,
    dto: IUpdatePartnerProductDTO,
    cookie: string
  ): Promise<TFetcherResponse<PartnerProductResponse>> {
    const formData = new FormData();
    this.appendIfPresent(formData, "name", dto.name);
    this.appendIfPresent(formData, "description", dto.description);
    this.appendIfPresent(formData, "price_min", dto.price_min);
    this.appendIfPresent(formData, "price_max", dto.price_max);
    this.appendIfPresent(formData, "category", dto.category);
    this.appendIfPresent(formData, "currency", dto.currency);
    this.appendIfPresent(formData, "status", dto.status);
    this.appendIfPresent(formData, "business_id", dto.business_id);
    this.appendIfPresent(formData, "sku", dto.sku);
    this.appendMany(formData, "tags", dto.tags);
    this.appendIfPresent(formData, "created_by", dto.created_by);
    this.appendMany(formData, "locations", dto.locations);
    if (dto.image) formData.append("image", dto.image);

    const { data, error } = await ApiCall.call<PartnerProductResponse, FormData>({
      url: ApiEndPoints.updatePartnerProduct(productId),
      method: "PATCH",
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

  async getMarketplaceProducts(query: IQueryPartnerProduct, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerProduct>>> {
    const params = new URLSearchParams(
      Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    const url = `${ApiEndPoints.getMarketplaceProducts}?${params}`;

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
