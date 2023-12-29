import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({ url: '/get/users' }),
      providesTags:[ "User"]
    }),
    signUp: build.mutation({
      query: (body)=> ({
        url: "/create/sign-up",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    signIn: build.mutation({
      query: (body)=> ({
        url: "/create/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    updateUser: build.mutation({
      query: ({_id, body})=> ({
        url: `/put/user/${_id}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["User"]
    }),
    deleteUser: build.mutation({
      query: (id)=> ({
        url:`/delete/user/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["User"]
    })
  }),
})

export const {
    useGetUsersQuery,
    useSignInMutation,
    useSignUpMutation,
    useDeleteUserMutation,
    useUpdateUserMutation
} = userApi


