import { ESort } from "../types/product";

/**
 * Sort configuration interface
 */
export interface ISortConfig {
  field: string;
  order: ESort;
}

/**
 * Converts string format sort (like "-createdAt,price") to sort config objects
 * @param sortString The sort string in format like "-field1,field2" where "-" indicates descending order
 * @returns Array of sort configurations
 */
export function parseSortString(sortString?: string): ISortConfig[] {
  if (!sortString) return [];

  return sortString.split(",").map((part) => {
    if (part.startsWith("-")) {
      return {
        field: part.substring(1),
        order: ESort.DESC,
      };
    }
    return {
      field: part,
      order: ESort.ASC,
    };
  });
}

/**
 * Creates a sort string from sort configurations
 * @param configs Array of sort configurations
 * @returns Sort string in format like "-field1,field2"
 */
export function createSortString(configs: ISortConfig[]): string {
  if (!configs.length) return "";

  return configs
    .map((config) =>
      config.order === ESort.DESC ? `-${config.field}` : config.field
    )
    .join(",");
}

/**
 * Creates a sort string for a specific field with specified order
 * @param field The field to sort by
 * @param order The sort order
 * @returns Format like "-field" for DESC or "field" for ASC
 */
export function createSortStringForField(field: string, order: ESort): string {
  return order === ESort.DESC ? `-${field}` : field;
}

/**
 * Converts sort configurations to filter format required by the API
 * @param configs Array of sort configurations
 * @returns Object with _sort and _order keys for API filtering
 */
export function getSortParams(configs: ISortConfig[]): {
  _sort?: string;
  _order?: string;
} {
  if (!configs.length) return {};

  // For a single sort field, use the simple format
  if (configs.length === 1) {
    return {
      _sort: configs[0].field,
      _order: configs[0].order,
    };
  }

  // For multiple sort fields, use the comma-separated format
  return {
    _sort: createSortString(configs),
  };
}

/**
 * Combines multiple sort fields into a single string representation
 * @param fieldOrderPairs Array of [field, order] pairs
 * @returns Combined sort string for API
 */
export function combineSortFields(fieldOrderPairs: [string, ESort][]): string {
  return fieldOrderPairs
    .map(([field, order]) => createSortStringForField(field, order))
    .join(",");
}
