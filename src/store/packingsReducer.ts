import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Packing } from "../types";

export interface AppServices {
  packings: Packing[];
}

export const loadAllPackings = createAsyncThunk(
  "packings/loadAll",
  (payload: { tenant: string; backendUrl: string }) => {
    return getRequest<any>(`${payload.backendUrl}/api/packings`, payload.tenant);
  }
);

const packingsSlice = createSlice<AppServices, any, "packings">({
  name: "packings",
  initialState: {
    packings: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllPackings.fulfilled, (state, action) => {
      state.packings = convertData(action.payload.data);
    });
  },
});

const convertData = (data: any[]) => {
  return data.map((e) => {
    const curPacking: Packing = {
      id: e.id,
      ...e.attributes,
    };
    return curPacking;
  });
};

export default packingsSlice.reducer;
