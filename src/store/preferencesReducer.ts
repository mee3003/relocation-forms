import { ValidationMode } from "@jsonforms/core";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModuleProps } from "../Module";

interface Preferences {
  validationMode: ValidationMode;
  errors: any;
  moduleProperties?: ModuleProps;
  showVerpackung: boolean;
}

const initialState: Preferences = {
  validationMode: "ValidateAndHide",
  errors: undefined,
  showVerpackung: true,
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setValidationMode(state, action: PayloadAction<{ mode: ValidationMode }>) {
      state.validationMode = action.payload.mode;
    },

    setShowVerpackung(state, action: PayloadAction<{ show: boolean }>) {
      state.showVerpackung = action.payload.show;
    },

    setModuleProps(state, action: PayloadAction<{ props: ModuleProps }>) {
      state.moduleProperties = action.payload.props;
    },

    setErrors(state, action: PayloadAction<{ errors: any }>) {
      state.errors = action.payload.errors;
    },
  },
});

export default preferencesSlice.reducer;

export const { setErrors, setModuleProps, setShowVerpackung, setValidationMode } =
  preferencesSlice.actions;
