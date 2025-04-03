import { useCallback, useState } from "react";
import { ECategory, IProductFilters } from "../../../types/product";
import { ALL, PriceConfig } from "../../../constants";

const initialFilters: IProductFilters = {
  q: "",
  price_gte: PriceConfig.min,
  price_lte: PriceConfig.max,
  _sort: "-createdAt,price",
};

export const useMarketplaceFilters = () => {
  const [filters, setFilters] = useState<IProductFilters>(initialFilters);

  const handleFilterChange = useCallback(
    (fieldChanged: Partial<IProductFilters>) => {
      setFilters((prev) => ({ ...prev, ...fieldChanged }));
    },
    []
  );

  const handleCategoryChange = useCallback(
    (category: ECategory | typeof ALL) => {
      setFilters((prev) => ({
        ...prev,
        category: category === ALL ? undefined : category,
      }));
    },
    []
  );

  return {
    filters,
    handleFilterChange,
    handleCategoryChange,
  };
};
