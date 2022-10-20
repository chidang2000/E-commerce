import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    searchItem: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;
