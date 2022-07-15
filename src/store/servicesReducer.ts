import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";
import { Service } from "../types";

export interface AppServices {
  services: Service[];
}

export const loadAllServices = createAsyncThunk("services/loadAll", () => {
  return getRequest<Service[]>("service/all");
});

const servicesSlice = createSlice<AppServices, any, "services">({
  name: "services",
  initialState: {
    services: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllServices.fulfilled, (state, action) => {
      state.services = action.payload;
    });
  },
});

export default servicesSlice.reducer;
