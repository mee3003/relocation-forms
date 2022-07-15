import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Category } from "../types";

export const loadAllCategories = createAsyncThunk("categories/loadAll", () => {
  return getRequest<Category[]>("item-category/all");
});

export interface AppCategories {
  categories: Category[];
}

const categoriesSlice = createSlice<AppCategories, any, "categories">({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
