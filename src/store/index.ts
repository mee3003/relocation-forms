import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catReducer";
import optionsReducer from "./optionsReducer";
import servicesReducer from "./servicesReducer";

export const store = configureStore({
  reducer: {
    appOptions: optionsReducer,
    appCategories: catReducer,
    appServices: servicesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
