import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const formPageAPI = createApi({
    reducerPath: 'formPageAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.sbercloud.ru',
    }),
    endpoints: (build) => ({
        setFormData: build.mutation<any, any>({
            query: (payload: any) => ({
                url: '/content/v1/bootcamp/frontend',
                method: 'POST',
                body: payload
            }),
        }),
    })
})

export const {
    useSetFormDataMutation,
} = formPageAPI
