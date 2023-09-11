// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
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
      providesTags: (result) =>
        result
          ? result.length ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]: [{ type: "Posts", id: "LIST" }]
          : [{ type: "Posts", id: "LIST" }],
    }),
    createProduct: builder.mutation({
      query(data) {
        const { path, ...body } = data;
        return {
          url: path,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Posts", id: "LIST" }],
    }),
    deleteProduct: builder.mutation({
      query(data) {
        const { path, _id } = data;
        return {
          url: `${path}/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = productApi;
