import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { config } from "../config/env";

const AxiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Log requests in development
    if (import.meta.env.DEV) {
      console.log(
        `API Request: ${config.method?.toUpperCase()} ${config.url}`,
        config.params || {}
      );
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("Request error:", error.message);
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    // Log responses in development
    if (import.meta.env.DEV) {
      console.log(
        `API Response: ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`,
        response.status,
        response.data
      );
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );

      switch (error.response.status) {
        case 401:
          // Unauthorized - handle authentication errors
          // e.g., redirect to login or refresh token
          console.error("Authentication error");
          break;
        case 403:
          // Forbidden
          console.error("Permission denied");
          break;
        case 404:
          // Not found
          console.error("Resource not found");
          break;
        case 500:
          // Server error
          console.error("Server error");
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Request configuration error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;
