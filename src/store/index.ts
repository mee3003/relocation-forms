import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catReducer";
import itemsReducer from "./itemsReducer";
import optionsReducer from "./optionsReducer";
import servicesReducer from "./servicesReducer";
import orderReducer from "./orderReducer";
import preferencesReducer from "./preferencesReducer";

export const store = configureStore({
  reducer: {
    appOptions: optionsReducer,
    appCategories: catReducer,
    appServices: servicesReducer,
    appItems: itemsReducer,
    order: orderReducer,
    preferences: preferencesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
