import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`
        }),
        getCategoryByID: builder.query({
            query: (id) => `products/${id}`,
        }),
        deleteCategoryByID: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE"
            })
        })
    }),
    postCategory: builder.mutation({
        query: (payload) => ({
            url: 'products',
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }),
})

 
export const {useD}=productApi
