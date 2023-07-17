
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({

      query:(user)=>{
        return{
            url:'register',
            method:'POST',
            body:user,
            header:{
                'content-type':'application/json',
            }
        }
      }
    }),
          loginUser : builder.mutation({
            query:(user)=>{
              return{
                url:'login',
            method:'POST',
            body:user,
            header:{
                'content-type':'application/json',
            }

              }
            }
          }),
          sendPasswordResetEmail : builder.mutation({
            query:(user)=>{
              return{
                url:'send-reset-password-email',
            method:'POST',
            body:user,
            header:{
                'content-type':'application/json',
            }

              }
            }
          }),
          resetPassword : builder.mutation({
            query:({actualData,id,token})=>{
              return{
                url:`/reset-password/${id}/${token}`,
            method:'POST',
            body:actualData,
            header:{
                'content-type':'application/json',
            }

              }
            }
          }),
          loggeduser: builder.query({
            query:(token)=>{
              return{
                url:`loggeduser`,
            method:'GET',
        
            headers:{
                'authorization':`Bearer ${token}`,
            }

              }
            }
          }),
           changeUserPassword: builder.mutation({
            query:({actualData,token})=>{
              return{
                url:'changepassword',
            method:'POST',
            body: actualData,
        
            headers:{
                'authorization':`Bearer ${token}`,
            }

              }
            }
          })
// after make use hook




  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation,useLoginUserMutation,useSendPasswordResetEmailMutation,useResetPasswordMutation,useLoggeduserQuery,useChangeUserPasswordMutation} = userAuthApi