export const API_PATHS = {
  PRODUCTS: {
    BASE: "/products",
    BY_ID: (id: string | number) => `/products/${id}`,
  },
};

export default API_PATHS;
