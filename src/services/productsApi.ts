import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductsResponse } from "../types/product";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // GET /products?limit=...&skip=...
    getProducts: builder.query<ProductsResponse, { limit?: number; skip?: number } | void>({
      query: (params) => {
        const limit = params?.limit ?? 20;
        const skip = params?.skip ?? 0;
        return `/products?limit=${limit}&skip=${skip}`;
      },
    }),

    // GET /products/:id — used for a product detail view if one gets added later
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
