import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./Api/githubApi";
import editSlice from "./Slices/editSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    editSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
