import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: [],
  endpoints: (build) => ({
    // to make post api call to backend
    postAiText: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "openai/text",
        method: "POST",
        body: payload,
      })
    })
  })
})

export const { usePostAiTextMutation } = api;