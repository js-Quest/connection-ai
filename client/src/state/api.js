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
      }),
    }),
    postAiFriend: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "openai/friend",
        method: "POST",
        body: payload,
      }),
    }),
    postAiDate: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "openai/date",
        method: "POST",
        body: payload,
      }),
    }),
    postAiWork: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "openai/work",
        method: "POST",
        body: payload,
      }),
    }),
    postAiAssist: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "openai/assist",
        method: "POST",
        body: payload,
      }),
    }),
    postLogin: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    postSignUp: build.mutation({
      query: (payload) => ({
        // url endpoint being called
        url: "auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
  })
})

export const { 
  usePostAiTextMutation, 
  usePostAiFriendMutation, 
  usePostAiDateMutation, 
  usePostAiWorkMutation, 
  usePostAiAssistMutation,
  usePostLoginMutation,
  usePostSignUpMutation
} = api;