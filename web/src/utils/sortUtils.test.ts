import { describe, it, expect } from "vitest";
import {
  parseSortString,
  createSortString,
  createSortStringForField,
  getSortParams,
  combineSortFields,
} from "./sortUtils";
import { ESort } from "../types/product";

describe("sortUtils", () => {
  // Tests for parseSortString
  describe("parseSortString", () => {
    it("should return an empty array when no sort string is provided", () => {
      expect(parseSortString()).toEqual([]);
      expect(parseSortString("")).toEqual([]);
    });

    it("should parse a single ascending field correctly", () => {
      const result = parseSortString("price");
      expect(result).toEqual([{ field: "price", order: ESort.ASC }]);
    });

    it("should parse a single descending field correctly", () => {
      const result = parseSortString("-price");
      expect(result).toEqual([{ field: "price", order: ESort.DESC }]);
    });

    it("should parse multiple fields correctly", () => {
      const result = parseSortString("title,-price,createdAt");
      expect(result).toEqual([
        { field: "title", order: ESort.ASC },
        { field: "price", order: ESort.DESC },
        { field: "createdAt", order: ESort.ASC },
      ]);
    });

    it("should handle fields with special characters", () => {
      const result = parseSortString("-created_at,user.name");
      expect(result).toEqual([
        { field: "created_at", order: ESort.DESC },
        { field: "user.name", order: ESort.ASC },
      ]);
    });
  });

  // Tests for createSortString
  describe("createSortString", () => {
    it("should return an empty string when no configs are provided", () => {
      expect(createSortString([])).toBe("");
    });

    it("should create a sort string for a single ascending field", () => {
      const configs = [{ field: "price", order: ESort.ASC }];
      expect(createSortString(configs)).toBe("price");
    });

    it("should create a sort string for a single descending field", () => {
      const configs = [{ field: "price", order: ESort.DESC }];
      expect(createSortString(configs)).toBe("-price");
    });

    it("should create a sort string for multiple fields", () => {
      const configs = [
        { field: "title", order: ESort.ASC },
        { field: "price", order: ESort.DESC },
        { field: "createdAt", order: ESort.ASC },
      ];
      expect(createSortString(configs)).toBe("title,-price,createdAt");
    });
  });

  // Tests for createSortStringForField
  describe("createSortStringForField", () => {
    it("should create a sort string for an ascending field", () => {
      expect(createSortStringForField("price", ESort.ASC)).toBe("price");
    });

    it("should create a sort string for a descending field", () => {
      expect(createSortStringForField("price", ESort.DESC)).toBe("-price");
    });

    it("should handle fields with special characters", () => {
      expect(createSortStringForField("created_at", ESort.DESC)).toBe(
        "-created_at"
      );
      expect(createSortStringForField("user.name", ESort.ASC)).toBe(
        "user.name"
      );
    });
  });

  // Tests for getSortParams
  describe("getSortParams", () => {
    it("should return an empty object when no configs are provided", () => {
      expect(getSortParams([])).toEqual({});
    });

    it("should return _sort and _order for a single field", () => {
      const configs = [{ field: "price", order: ESort.ASC }];
      expect(getSortParams(configs)).toEqual({
        _sort: "price",
        _order: "asc",
      });
    });

    it("should return _sort and _order for a single descending field", () => {
      const configs = [{ field: "price", order: ESort.DESC }];
      expect(getSortParams(configs)).toEqual({
        _sort: "price",
        _order: "desc",
      });
    });

    it("should return only _sort for multiple fields", () => {
      const configs = [
        { field: "title", order: ESort.ASC },
        { field: "price", order: ESort.DESC },
      ];
      expect(getSortParams(configs)).toEqual({
        _sort: "title,-price",
      });
    });
  });

  // Tests for combineSortFields
  describe("combineSortFields", () => {
    it("should return an empty string when no field-order pairs are provided", () => {
      expect(combineSortFields([])).toBe("");
    });

    it("should combine a single field-order pair correctly", () => {
      expect(combineSortFields([["price", ESort.ASC]])).toBe("price");
      expect(combineSortFields([["price", ESort.DESC]])).toBe("-price");
    });

    it("should combine multiple field-order pairs correctly", () => {
      const pairs: [string, ESort][] = [
        ["title", ESort.ASC],
        ["price", ESort.DESC],
        ["createdAt", ESort.ASC],
      ];
      expect(combineSortFields(pairs)).toBe("title,-price,createdAt");
    });

    it("should handle fields with special characters", () => {
      const pairs: [string, ESort][] = [
        ["created_at", ESort.DESC],
        ["user.name", ESort.ASC],
      ];
      expect(combineSortFields(pairs)).toBe("-created_at,user.name");
    });
  });
});
