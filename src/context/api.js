import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:8000',
  // baseUrl: "https://cheerfulexemplaryfirewall--boburmirzo-brm.repl.co",
  baseUrl: "https://hadyasweets.uz",
  prepareHeaders: (headers) => {
    const token = "fake__token"
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Product', 'Blog'],
  endpoints: () => ({}),
})

// export const enhancedApi = api.enhanceEndpoints({
//   endpoints: () => ({
//     getPost: () => 'test',
//   }),
// })
