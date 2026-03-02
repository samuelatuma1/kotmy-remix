
export interface IPaginatedResponse<T> {
  current_page: number;
  total_pages: number;
  total_items: number;
  items_per_page: number;
  items: T[];
  last_key_id: string | null;
  first_key_id: string | null;
}