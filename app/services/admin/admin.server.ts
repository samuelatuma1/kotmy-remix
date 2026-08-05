import { ApiEndPoints } from "~/lib/api/endpoints";
import { ApiCall } from "~/lib/api/fetcher";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { ILoginResponseDTO } from "~/services/auth/types/auth.dtos";
import { IGetPaymentsDTO, TallyTransaction, ICreateBankTransaction, ICreateAdminUser, IUpdateAdminUser, IUserQueryDTO } from "./types/admin.interface";





export class AdminRepository {
  async getPayments(cookies: string | Request, query: IGetPaymentsDTO | null = null): Promise<TFetcherResponse<IPaginatedResponse<TallyTransaction>>> {
    let url = ApiEndPoints.adminPayments;
    if (query) {
      const params = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => {
        if (v !== undefined && v !== null) acc[k] = String(v);
        return acc;
      }, {} as Record<string, string>));
      const qs = params.toString();
      if (qs) url = `${url}?${qs}`;
    }

    const { data, error, authRequired } = await ApiCall.call<IPaginatedResponse<TallyTransaction>, unknown>({
      method: "GET",
      url,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }

  async createBankTransaction(cookies: string | Request, dto: ICreateBankTransaction): Promise<TFetcherResponse<TallyTransaction>> {
    const url = ApiEndPoints.createBankPayment;
    const { data, error, authRequired } = await ApiCall.call<TallyTransaction, unknown>({
      method: "POST",
      url,
      data: dto,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }

  async getAllRoles(cookies: string | Request): Promise<TFetcherResponse<{[key: string]: string[]}>>{
    const url = ApiEndPoints.getAllRoles;
    const { data, error, authRequired } = await ApiCall.call<{[key: string]: string[]}, unknown>({
      method: "GET",
      url,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }

  async createAdminUser(cookies: string | Request, dto: ICreateAdminUser ):  Promise<TFetcherResponse<ILoginResponseDTO>>{
    const url = ApiEndPoints.createAdminUser
    const { data, error, authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
      method: "POST",
      url,
      data: dto,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };

  }

  async updateAdminUser(cookies: string | Request, userId: string, dto: IUpdateAdminUser ):  Promise<TFetcherResponse<ILoginResponseDTO>>{
    const url = ApiEndPoints.updateUser(userId)
    const { data, error, authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
      method: "PATCH",
      url,
      data: dto,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }

  async getAdminUser(cookies: string | Request, userId: string){
    const url = ApiEndPoints.getUserById(userId)
    const { data, error, authRequired } = await ApiCall.call<ILoginResponseDTO, unknown>({
      method: "GET",
      url,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }

  async queryUsers(cookies: string | Request, query: IUserQueryDTO | null = null): Promise<TFetcherResponse<IPaginatedResponse<ILoginResponseDTO>>>{
      let url = ApiEndPoints.pagedUsers;
      if (query) {
        const params = new URLSearchParams(Object.entries(query).reduce((acc, [k, v]) => {
          if (v !== undefined && v !== null) acc[k] = String(v);
          return acc;
        }, {} as Record<string, string>));
        const qs = params.toString();
        if (qs) url = `${url}?${qs}`;
      }

      const { data, error, authRequired } = await ApiCall.call<IPaginatedResponse<ILoginResponseDTO>, unknown>({
        method: "GET",
        url,
      }, cookies);

      if (data) return { data };
      return { error, authRequired };
  }

}

export const adminRepo = new AdminRepository();
