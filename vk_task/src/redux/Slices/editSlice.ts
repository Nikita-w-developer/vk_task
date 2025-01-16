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
    deleteItem: (state: Data, actions: PayloadAction<GitHubRepo>) => {
      state.items = state.items.filter(
        (item) => item.id !== actions.payload.id
      );
    },
    updateItem: (
      state,
      action: PayloadAction<Partial<GitHubRepo> & { id: number }>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
  },
});

export const { setItems, deleteItem, updateItem } = editSlice.actions;

export default editSlice.reducer;
