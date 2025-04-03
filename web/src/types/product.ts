export enum ECategory {
  UPPER_BODY = "Upper Body",
  LOWER_BODY = "Lower Body",
  HAT = "Hat",
  SHOES = "Shoes",
  ACCESSORY = "Accessory",
  LEGENDARY = "Legendary",
  MYTHIC = "Mythic",
  EPIC = "Epic",
  RARE = "Rare",
}

export enum ESort {
  ASC = "asc",
  DESC = "desc",
}

export enum ETheme {
  DARK = "Dark",
  LIGHT = "Light",
  COLORFUL = "Colorful",
  HALLOWEEN = "Halloween",
}

export enum ETier {
  BASIC = "Basic",
  PREMIUM = "Premium",
  DELUXE = "Deluxe",
}

export interface IProduct {
  id: number;
  title: string;
  category: ECategory;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: ETheme;
  tier: ETier;
  imageId: number;
  author: IAuthor;
}

export interface IAuthor {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export interface IProductFilters {
  q?: string;
  category?: ECategory;
  theme?: ETheme;
  tier?: ETier;
  price_gte?: number;
  price_lte?: number;
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
}
