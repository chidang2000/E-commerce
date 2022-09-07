import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    open: (state, action) => {
      state.value = action.payload;
    },

    close: (state) => {
      state.value = null;
    },
  },
});

export const { open, close } = productModalSlice.actions;
export default productModalSlice.reducer;
