import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExtension } from "types/types";

const initialState: IExtension[] = [
  {
    logo: "",
    name: "",
    description: "",
    isActive: false,
  },
];
const extensionSlice = createSlice({
  name: "extension",
  initialState,
  reducers: {
    setExtensions: (state, action: PayloadAction<IExtension[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setExtensions } = extensionSlice.actions;
export const extensionReducer = extensionSlice.reducer;
