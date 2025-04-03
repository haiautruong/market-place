import { useEffect, useState } from "react";
import { createSortStringForField } from "../../../utils/sortUtils";
import { ESort, IProductFilters } from "../../../types/product";
import { ALL, PriceConfig } from "../../../constants";
import { useDebounce } from "../../../hooks/useDebounce";
import { IFilterFormValues } from "../components/FilterSection/FilterSection";

export const useFilterSection = (
  callback: (filter: IProductFilters) => void
) => {
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([
    PriceConfig.min,
    PriceConfig.max,
  ]);

  const debouncedSearch = useDebounce(searchValue);
  const debouncedPriceRange = useDebounce(priceRangeValue);

  const handleValuesChange = (changedValues: Partial<IFilterFormValues>) => {
    const filter: IProductFilters = {};

    if (changedValues.search !== undefined) {
      setSearchValue(changedValues.search || "");
    }

    if (changedValues.priceRange) {
      setPriceRangeValue(changedValues.priceRange);
    }

    if (changedValues.theme) {
      filter.theme =
        changedValues.theme === ALL ? undefined : changedValues.theme;
    }

    if (changedValues.tier) {
      filter.tier = changedValues.tier === ALL ? undefined : changedValues.tier;
    }

    if (changedValues.timeSort) {
      filter._sort =
        (filter._sort || "") +
        createSortStringForField("createdAt", changedValues.timeSort);
    }

    if (changedValues.priceSort) {
      filter._sort =
        (filter._sort || "") +
        createSortStringForField("price", changedValues.priceSort);
    }

    console.log({ filter });

    callback(filter);
  };

  const resetValues = () => {
    setSearchValue("");
    setPriceRangeValue([PriceConfig.min, PriceConfig.max]);

    callback({
      q: "",
      price_gte: PriceConfig.min,
      price_lte: PriceConfig.max,
      _sort: createSortStringForField("createdAt", ESort.DESC),
    });
  };

  // Effect for handling debounced search
  useEffect(() => {
    const filter: IProductFilters = {};
    filter.q = debouncedSearch;
    callback(filter);
  }, [debouncedSearch, callback]);

  // Effect for handling debounced price range
  useEffect(() => {
    const filter: IProductFilters = {};
    filter.price_gte = debouncedPriceRange[0];
    filter.price_lte = debouncedPriceRange[1];
    callback(filter);
  }, [debouncedPriceRange, callback]);

  return {
    handleValuesChange,
    resetValues,
  };
};
