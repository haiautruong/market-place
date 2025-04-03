import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { getProducts } from "../../../services/product";
import { config } from "../../../config/env";
import { IProductFilters } from "../../../types/product";

const QUERY_KEY = "products";

export const useProducts = (
  filters: Omit<IProductFilters, "_page" | "_limit"> = {}
) => {
  const queryClient = useQueryClient();

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    }, config.autoRefreshInterval);

    return () => clearInterval(interval);
  }, [queryClient]);

  return useInfiniteQuery({
    queryKey: [QUERY_KEY, filters],
    queryFn: ({ pageParam = 1 }) =>
      getProducts({
        ...filters,
        _page: pageParam,
        _limit: config.itemsPerPage,
      }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      const hasMore = lastPage.products.length === config.itemsPerPage;
      return hasMore ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
};
