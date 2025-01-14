import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data, GitHubRepo } from "../Api/githubApi";

const initialState: Data = {
  items: []
};

const editSlice = createSlice({
  name: "editItem",
  initialState,
  reducers: {
    setItems: (state:Data, actions:PayloadAction<{value: GitHubRepo}>) => {
        state.items = actions.payload
    },
    delete: (state:Data, actions:PayloadAction) => {
        
    },
    editItem: (state:Data, actions:PayloadAction) => {

    }
  },
});

export const { delete, setItems } = editSlice.actions;

export default editSlice.reducer;