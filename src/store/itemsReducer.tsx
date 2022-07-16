import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Item } from "../types";

export interface AppItems {
  items: Item[];
}

export const loadAllItems = createAsyncThunk("services/getitems", () => {
  return getRequest<Item[]>("item/all");
});

const itemsSlice = createSlice<AppItems, any, "services">({
  name: "services",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default itemsSlice.reducer;
