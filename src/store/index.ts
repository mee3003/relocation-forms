import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catReducer";
import itemsReducer from "./itemsReducer";
import optionsReducer from "./optionsReducer";
import packingsReducer from "./packingsReducer";
import orderReducer from "./orderReducer";
import preferencesReducer from "./preferencesReducer";

export const store = configureStore({
  reducer: {
    appOptions: optionsReducer,
    appCategories: catReducer,
    appPackings: packingsReducer,
    appItems: itemsReducer,
    order: orderReducer,
    preferences: preferencesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
