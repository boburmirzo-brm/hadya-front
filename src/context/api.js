import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:8000',
  // baseUrl: "https://cheerfulexemplaryfirewall--boburmirzo-brm.repl.co",
  baseUrl: "https://hadyasweets.uz",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("hadya-token")
    if (token) {
      headers.set('authentication', `${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Product', 'User'],
  endpoints: () => ({}),
})

