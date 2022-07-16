import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catReducer";
import itemsReducer from "./itemsReducer";
import optionsReducer from "./optionsReducer";
import servicesReducer from "./servicesReducer";

export const store = configureStore({
  reducer: {
    appOptions: optionsReducer,
    appCategories: catReducer,
    appServices: servicesReducer,
    appItems: itemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
