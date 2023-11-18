import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (build) => ({
    searchPeople: build.query({
      query: (
        str = `?search=${localStorage.getItem('lastSearch')!}&page=1`
      ) => ({
        url: `${str}`,
      }),
    }),
  }),
});

export const { useLazySearchPeopleQuery, useSearchPeopleQuery } = dataApi;
