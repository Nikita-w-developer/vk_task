import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface OwnerType {
  id: number;
  login: string;
  avatar_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  owner: OwnerType;
}

export interface Data {
  items: GitHubRepo[];
}

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com",
  }),
  endpoints: (builder) => ({
    getRepositories: builder.query<Data, void>({
      query: () =>
        `search/repositories?q=javascript&sort=stars&order=desc&per_page=40`,
    }),
  }),
});

export const { useGetRepositoriesQuery } = githubApi;
