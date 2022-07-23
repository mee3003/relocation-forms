import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";

export interface AppOptions {
  options: Options;
}

export interface Options {
  [name: string]: string;
}

export const loadAllOptions = createAsyncThunk(
  "options/setAllOptions",
  (payload: { tenant: string; backendUrl: string }) => {
    return getRequest<any>(`${payload.backendUrl}/api/options`, payload.tenant);
  }
);

const optionsSlice = createSlice<AppOptions, any, "options">({
  name: "options",
  initialState: {
    options: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllOptions.fulfilled, (state, action) => {
      const converted = convertData(action.payload.data);
      state.options = converted;
    });
  },
});

const convertData = (data: any[]) => {
  const options: Options = {};
  data.forEach((e) => {
    options[e.attributes.name] = e.attributes.value;
  });
  return options;
};

export default optionsSlice.reducer;
