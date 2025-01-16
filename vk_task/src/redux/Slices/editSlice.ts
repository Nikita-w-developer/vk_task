import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data, GitHubRepo } from "../Api/githubApi";

const initialState: Data = {
  items: [],
};

const editSlice = createSlice({
  name: "editItem",
  initialState,
  reducers: {
    setItems: (state, actions: PayloadAction<GitHubRepo[]>) => {
      state.items = actions.payload;
    },
  },
});

export const { setItems } = editSlice.actions;

export default editSlice.reducer;
