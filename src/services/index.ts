import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { RootState } from "../store";

const baseUrl = process.env.SERVICE_URL || "";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllDaily: builder.query<any, void>({
      query: () => "/daily",
    }),
    reRollDailyById: builder.mutation({
      query: ({ id }) => ({
        url: `/daily/${id}/reroll`,
        method: "POST",
        body: {},
      }),
    }),
    reRollDailyRewardsById: builder.mutation({
      query: ({ id }) => ({
        url: `/daily/${id}/rewards/reroll`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const {
  useGetAllDailyQuery,
  useReRollDailyByIdMutation,
  useReRollDailyRewardsByIdMutation,
} = api;

export default api;
