import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFilterSection } from "./useFilterSection";
import { ESort, ETheme, ETier } from "../../../types/product";
import { ALL, PriceConfig } from "../../../constants";

describe("useFilterSection", () => {
  it("initializes with correct default values", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    expect(result.current.handleValuesChange).toBeDefined();
    expect(result.current.resetValues).toBeDefined();
  });

  it("calls callback with filter when handleValuesChange is called with search", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ search: "test query" });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalled();
  });

  it("calls callback with filter when handleValuesChange is called with priceRange", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ priceRange: [10, 100] });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalled();
  });

  it("calls callback with filter when handleValuesChange is called with theme", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ theme: ETheme.HALLOWEEN });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({ theme: ETheme.HALLOWEEN })
    );

    // Test with ALL value
    act(() => {
      result.current.handleValuesChange({ theme: ALL });
    });

    // The callback is called with the filter where theme is undefined
    expect(callback).toHaveBeenCalledWith(
      expect.not.objectContaining({ theme: expect.anything() })
    );
  });

  it("calls callback with filter when handleValuesChange is called with tier", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ tier: ETier.PREMIUM });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({ tier: ETier.PREMIUM })
    );

    // Test with ALL value
    act(() => {
      result.current.handleValuesChange({ tier: ALL });
    });

    // The callback is called with the filter where tier is undefined
    expect(callback).toHaveBeenCalledWith(
      expect.not.objectContaining({ tier: expect.anything() })
    );
  });

  it("calls callback with filter when handleValuesChange is called with timeSort", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ timeSort: ESort.DESC });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({ _sort: expect.stringContaining("-createdAt") })
    );
  });

  it("calls callback with filter when handleValuesChange is called with priceSort", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.handleValuesChange({ priceSort: ESort.ASC });
    });

    // The callback is called with the filter
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({ _sort: expect.stringContaining("price") })
    );
  });

  it("resets values when resetValues is called", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useFilterSection(callback));

    act(() => {
      result.current.resetValues();
    });

    // The callback is called with the reset filter values
    expect(callback).toHaveBeenCalledWith({
      q: "",
      price_gte: PriceConfig.min,
      price_lte: PriceConfig.max,
      _sort: expect.stringContaining("-createdAt"),
    });
  });
});
