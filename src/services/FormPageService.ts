import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RequestPayloadType} from "../shared/types/all-types"

export const formPageAPI = createApi({
    reducerPath: 'formPageAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.sbercloud.ru',
    }),
    endpoints: (build) => ({
        setFormData: build.mutation<any, RequestPayloadType>({
            query: (payload: RequestPayloadType) => ({
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
