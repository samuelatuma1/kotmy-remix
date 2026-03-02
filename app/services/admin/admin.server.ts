import { ApiEndPoints } from "~/lib/api/endpoints";
import { ApiCall } from "~/lib/api/fetcher";
import { TFetcherResponse } from "~/lib/api/types/fetcher.interface";
import { IPaginatedResponse } from "~/services/common/types/paginated_data";
import { ILoginResponseDTO } from "~/services/auth/types/auth.dtos";
import { IGetPaymentsDTO, TallyTransaction, ICreateBankTransaction } from "./types/admin.interface";





export class AdminRepository {
  async getPayments(cookies: string, query: IGetPaymentsDTO | null = null): Promise<TFetcherResponse<IPaginatedResponse<TallyTransaction>>> {
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

  async createBankTransaction(cookies: string, dto: ICreateBankTransaction): Promise<TFetcherResponse<TallyTransaction>> {
    const url = ApiEndPoints.createBankPayment;
    const { data, error, authRequired } = await ApiCall.call<TallyTransaction, unknown>({
      method: "POST",
      url,
      data: dto,
    }, cookies);

    if (data) return { data };
    return { error, authRequired };
  }
}

export const adminRepo = new AdminRepository();
