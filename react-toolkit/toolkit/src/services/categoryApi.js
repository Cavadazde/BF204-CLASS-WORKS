import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: " https://northwind.vercel.app/api/" }),
    endpoints: (builder) => ({
        //endpoints
        getAllCustomers: builder.query({
            query: () => `customers`
        }),
        getCategoryByID: builder.query({
            query: (id) => `customers/${id}`,
        }),
        deleteCategoryByID: builder.mutation({
            query: (id) => ({
                url: `customers/${id}`,
                method: "DELETE"
            })
        })
    })
})


export const { useGetAllCustomersQuery, useDeleteCategoryByIDMutation } = categoriesApi