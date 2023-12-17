import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ url: '/get/products', params }),
      providesTags:[ "Product"]
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url: "/create/product",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/delete/product/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation
} = productApi


