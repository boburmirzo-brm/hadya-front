import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://cheerfulexemplaryfirewall--boburmirzo-brm.repl.co",
    // baseUrl: "http://localhost:8000",
   }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ([path, params]) => {
        if (params) {
          path += "?";
          Object.entries(params).forEach(([a, b]) => {
            path += `${a}=${b}&`;
          });
          return path.slice(0, -1)
        } else {
          return path;
        }
      },
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query(data) {
        const { path, body } = data;
        return {
          url: path,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query(data) {
        const { path, _id } = data;
        return {
          url: `${path}/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags:["Product"],
    }),
    validProduct: builder.mutation({
      query(data) {
        const { path, _id, body } = data;
        return {
          url: `${path}/${_id}`,
          method: "PATCH",
          body
        };
      },
      invalidatesTags:["Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useValidProductMutation
} = productApi;
