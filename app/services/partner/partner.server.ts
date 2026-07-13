// filepath: app/services/partner/partner.server.ts
import { ApiCall } from "~/lib/api/fetcher";
import { ApiEndPoints } from "~/lib/api/endpoints";
import {
  Business,
  BusinessQuery,
  Cart,
  CreateDeliveryDetails,
  BusinessSearchOrderDTO,
  CustomerOrdersQuery,
  DeliveryDetails,
  IAdminResolveOrderDispute,
  ICustomerConfirmOrder,
  ICustomerDisputeOrderFulfilledDTO,
  IBusinessOwnerModel,
  ICartDeliveryAndPaymentOptions,
  ICreatePartnerDTO,
  ICreatePartnerProductDTO,
  IOrderData,
  IPartnerSettlement,
  ISettlementPayment,
  ISettlementPaymentProviderResponse,
  ISettlementPaymentWalletResponse,
  ISearchPartnerSettlementDTO,
  IQueryPartnerLocations,
  IQueryPartnerProduct,
  IUpdateBusinessStatus,
  IUpdatePartnerProductDTO,
  IUpsertCartItemsDTO,
  OrderResponse,
  PartnerLocation,
  PartnerProduct,
  PartnerProductResponse,
  PartnerSettlement,
  PlaceOrderDTO,
  AdminSearchOrderDTO,
} from "./types/partner.interface";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "../common/types/paginated_data";

export class PartnerServer {
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
    const params = this.buildQueryString(query);
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

  async getPartnerProducts(query: IQueryPartnerProduct, cookies?: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerProduct>>> {
    const params = this.buildQueryString(query);

    const url = `${ApiEndPoints.getPartnerProducts}?${params}`;

     const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerProduct>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getMarketplaceProducts(query: IQueryPartnerProduct, cookies?: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerProduct>>> {
    const params = this.buildQueryString(query);

    const url = `${ApiEndPoints.getMarketplaceProducts}?${params}`;

    const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerProduct>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getCart(cookies?: string): Promise<TFetcherResponse<Cart | null>> {
    const { data, error } = await ApiCall.call<Cart, unknown>({
      url: ApiEndPoints.getPartnerCartItems,
      method: "GET",
    }, cookies);

    if (error) {
      if (typeof error.detail === "string" && error.detail === "No active cart found") {
        return { data: null };
      }
      return { error };
    }

    return { data };
  }

  async upsertCartItems(dto: IUpsertCartItemsDTO, cookies?: string): Promise<TFetcherResponse<Cart>> {
    const { data, error } = await ApiCall.call<Cart, IUpsertCartItemsDTO>({
      url: ApiEndPoints.getPartnerCartItems,
      method: "POST",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getPartnerLocations(query: IQueryPartnerLocations, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<PartnerLocation>>> {
    const params = this.buildQueryString(query);

    const url = `${ApiEndPoints.getPartnerLocations}?${params}`;

     const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerLocation>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getCartDeliveryAndPaymentOptions(cookies?: string): Promise<TFetcherResponse<ICartDeliveryAndPaymentOptions>> {
    const { data, error } = await ApiCall.call<ICartDeliveryAndPaymentOptions, unknown>({
      url: ApiEndPoints.getPartnerCartDelivery,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async searchPartnerSettlements(
    query: ISearchPartnerSettlementDTO,
    cookies: string
  ): Promise<TFetcherResponse<IPaginatedResponse<IPartnerSettlement>>> {
    const params = this.buildQueryString(query);
    const url = params ? `${ApiEndPoints.searchPartnerSettlements}?${params}` : ApiEndPoints.searchPartnerSettlements;

    const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerSettlement>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  //
  async adminSearchPartnerSettlements(
    query: ISearchPartnerSettlementDTO,
    cookies: string
  ): Promise<TFetcherResponse<IPaginatedResponse<IPartnerSettlement>>> {
    const params = this.buildQueryString(query);
    const url = params ? `${ApiEndPoints.adminSearchPartnerSettlements}?${params}` : ApiEndPoints.adminSearchPartnerSettlements;

    const { data, error } = await ApiCall.call<IPaginatedResponse<PartnerSettlement>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async settlementsProviderPayment(
    dto: ISettlementPayment,
    cookies: string
  ): Promise<TFetcherResponse<ISettlementPaymentProviderResponse>> {
    const { data, error } = await ApiCall.call<ISettlementPaymentProviderResponse, ISettlementPayment>({
      url: ApiEndPoints.settlementsProviderPayment,
      method: "POST",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async settlementsWalletPayment(
    dto: ISettlementPayment,
    cookies: string
  ): Promise<TFetcherResponse<ISettlementPaymentWalletResponse>> {
    const { data, error } = await ApiCall.call<ISettlementPaymentWalletResponse, ISettlementPayment>({
      url: ApiEndPoints.settlementsWalletPayment,
      method: "POST",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async createDeliveryDetails(dto: CreateDeliveryDetails, cookies?: string): Promise<TFetcherResponse<DeliveryDetails>> {
    const { data, error } = await ApiCall.call<DeliveryDetails, CreateDeliveryDetails>({
      url: ApiEndPoints.createPartnerDeliveryDetails,
      method: "POST",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async placeOrder(dto: PlaceOrderDTO, cookies?: string): Promise<TFetcherResponse<OrderResponse[]>> {
    const { data, error } = await ApiCall.call<OrderResponse[], PlaceOrderDTO>({
      url: ApiEndPoints.placePartnerOrders,
      method: "POST",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getCustomerOrders(query: CustomerOrdersQuery, cookies?: string): Promise<TFetcherResponse<IPaginatedResponse<OrderResponse>>> {
    const params = this.buildQueryString(query);
    const url = params ? `${ApiEndPoints.getCustomerOrders}?${params}` : ApiEndPoints.getCustomerOrders;

    const { data, error } = await ApiCall.call<IPaginatedResponse<OrderResponse>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getPartnerOrders(query: BusinessSearchOrderDTO, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<OrderResponse>>> {
    const params = this.buildQueryString(query);
    const url = params ? `${ApiEndPoints.getPartnerOrders}?${params}` : ApiEndPoints.getPartnerOrders;
    
    const { data, error } = await ApiCall.call<IPaginatedResponse<OrderResponse>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getAdminOrders(query: AdminSearchOrderDTO, cookies: string): Promise<TFetcherResponse<IPaginatedResponse<OrderResponse>>> {
    const params = this.buildQueryString(query);
    const url = params ? `${ApiEndPoints.adminPartnerOrders}?${params}` : ApiEndPoints.adminPartnerOrders;
    
    const { data, error } = await ApiCall.call<IPaginatedResponse<OrderResponse>, unknown>({
      url,
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async adminResolveDispute(dto: IAdminResolveOrderDispute, cookies: string): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, IAdminResolveOrderDispute>({
      url: ApiEndPoints.adminResolveOrderDispute,
      method: "PATCH",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async getOrderById(orderId: string, cookies: string): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, unknown>({
      url: ApiEndPoints.getPartnerOrderById(orderId),
      method: "GET",
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async fulfillOrder(dto: IOrderData, cookies: string): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, IOrderData>({
      url: ApiEndPoints.fulfillPartnerOrder,
      method: "PATCH",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async cancelOrder(dto: IOrderData, cookies: string): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, IOrderData>({
      url: ApiEndPoints.cancelPartnerOrder,
      method: "PATCH",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async customerConfirmOrder(
    dto: ICustomerConfirmOrder,
    cookies: string
  ): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, ICustomerConfirmOrder>({
      url: ApiEndPoints.confirmPartnerOrderFulfillment,
      method: "PATCH",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }

  async customerDispute(
    dto: ICustomerDisputeOrderFulfilledDTO,
    cookies: string
  ): Promise<TFetcherResponse<OrderResponse>> {
    const { data, error } = await ApiCall.call<OrderResponse, ICustomerDisputeOrderFulfilledDTO>({
      url: ApiEndPoints.disputePartnerOrderFulfillment,
      method: "PATCH",
      data: dto,
    }, cookies);

    if (error) return { error };
    return { data };
  }
}

export const partnerServer = new PartnerServer();
