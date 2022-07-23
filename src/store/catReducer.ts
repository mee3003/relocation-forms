import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Category } from "../types";

export const loadAllCategories = createAsyncThunk(
  "categories/loadAll",
  (payload: { tenant: string; backendUrl: string }) => {
    return getRequest<any>(`${payload.backendUrl}/api/categories`, payload.tenant);
  }
);

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
      const converted = convertCategoryData(action.payload.data);
      state.categories = converted;
    });
  },
});

export const convertCategoryData = (data: any[]) => {
  return data.map((e) => {
    const curCategory: Category = {
      id: e.id,
      ...e.attributes,
    };
    return curCategory;
  });
};

export default categoriesSlice.reducer;
