import { configureStore } from "@reduxjs/toolkit";
import { extensionReducer } from "./extension-store";

export const store = configureStore({
  reducer: {
    extension: extensionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
