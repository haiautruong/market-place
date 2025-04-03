import { IProduct, IProductFilters } from "../types/product";
import ApiInstance from "./instance";
import { API_PATHS } from "./apiPath";

// Define API response types
export interface IProductsResponse {
  products: IProduct[];
  totalCount: number;
}

/**
 * Fetches products based on provided filters
 * @param filters - Optional filters to apply to the product query
 * @returns Promise with products and total count
 */
export const getProducts = async (
  filters: IProductFilters = {}
): Promise<IProductsResponse> => {
  const { data, headers } = await ApiInstance.get<IProduct[]>(
    API_PATHS.PRODUCTS.BASE,
    {
      params: filters,
    }
  );

  return {
    products: data,
    totalCount: parseInt(headers["x-total-count"] || "0", 10),
  };
};

/**
 * Fetches a single product by ID
 * @param id - Product ID
 * @returns Promise with the product data
 */
export const getProductById = async (
  id: string | number
): Promise<IProduct> => {
  const { data } = await ApiInstance.get<IProduct>(
    API_PATHS.PRODUCTS.BY_ID(id)
  );
  return data;
};
