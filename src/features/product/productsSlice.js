import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "product",
  initialState: { selectedCategory: "vegetable" },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const getSelectedCategory = state => state.products.selectedCategory;
export const { filterCategory } = slice.actions;
export default slice.reducer;
