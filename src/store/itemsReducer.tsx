import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Item } from "../types";
import { convertCategoryData } from "./catReducer";

export interface AppItems {
  items: Item[];
}

export const loadAllItems = createAsyncThunk(
  "services/getitems",
  (payload: { tenant: string; backendUrl: string }) => {
    return getRequest<any>(
      `${payload.backendUrl}/api/items`,
      payload.tenant,
      "populate[0]=categories"
    );
  }
);

const itemsSlice = createSlice<AppItems, any, "services">({
  name: "services",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllItems.fulfilled, (state, action) => {
      const converted = convertData(action.payload.data);
      state.items = converted;
    });
  },
});

const convertData = (data: any[]) => {
  return data.map((e) => {
    const categoryRefs = convertCategoryData(e.attributes.categories.data);

    const curItem: Item = {
      id: e.id,
      name: e.attributes.name,
      sortorder: e.attributes.sortorder,
      volume: e.attributes.sortorder,
      step: e.attributes.step,
      categoryRefs,
    } as Item;
    return curItem;
  });
};

export default itemsSlice.reducer;
