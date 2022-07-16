import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../api/fetch";

export interface AppOptions {
  options: Options;
}

export interface Options {
  [name: string]: string;
}

export const loadAllOptions = createAsyncThunk("options/setAllOptions", () => {
  return getRequest<Options>("options");
});

const optionsSlice = createSlice<AppOptions, any, "options">({
  name: "options",
  initialState: {
    options: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllOptions.fulfilled, (state, action) => {
      state.options = action.payload;
    });
  },
});

export default optionsSlice.reducer;
