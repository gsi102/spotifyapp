import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../const/const";

export const spotifyAppAPI = createApi({
  reducerPath: "spotifyAppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSpotifyData: builder.query<any, any>({
      query: () => `url/endpoint`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSpotifyDataQuery, useLazyGetSpotifyDataQuery } =
  spotifyAppAPI;
export const { getSpotifyData } = spotifyAppAPI.endpoints;
