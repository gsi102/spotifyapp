import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SPOTIFY_LOGIN_URL,
  REDIRECT_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  SPOTIFY_GET_DATA,
} from "../const/const";
var Buffer = require("buffer/").Buffer;
// var Buffer = require("buffer/");

const getTokenHeader = CLIENT_ID + ":" + CLIENT_SECRET;

export const spotifyAppAPI = createApi({
  reducerPath: "spotifyAppAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: SPOTIFY_LOGIN_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getToken: builder.query<any, any>({
      query: ({ code }) => {
        const payload = {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URL,
        };

        return {
          url: `${SPOTIFY_LOGIN_URL}/api/token`,
          method: "POST",
          // ??? DOCs say it should be body, but body doesnt work ???
          params: payload,
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " + Buffer.from(getTokenHeader).toString("base64"),
          },
        };
      },
    }),
    refreshToken: builder.query<any, any>({
      query: ({ refreshToken }) => {
        const payload = {
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        };

        return {
          url: `${SPOTIFY_LOGIN_URL}/api/token`,
          method: "POST",
          // ??? DOCs say it should be body, but body doesnt work ???
          params: payload,
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " + Buffer.from(getTokenHeader).toString("base64"),
          },
        };
      },
    }),
    getData: builder.query<any, any>({
      query: ({ accessToken, type }) => {
        return {
          url: `${SPOTIFY_GET_DATA}/browse/categories`,
          method: "GET",
          params: {
            country: "US",
            locale: "en_US",
            limit: 20,
            next: `${SPOTIFY_GET_DATA}/me/shows?offset=1&limit=1`,
            offset: 0,
            previous: `${SPOTIFY_GET_DATA}/me/shows?offset=1&limit=1`,
            total: 4,
          },
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTokenQuery,
  useLazyGetTokenQuery,
  useRefreshTokenQuery,
  useLazyRefreshTokenQuery,
  useGetDataQuery,
  useLazyGetDataQuery,
} = spotifyAppAPI;
export const { getToken, refreshToken, getData } = spotifyAppAPI.endpoints;
