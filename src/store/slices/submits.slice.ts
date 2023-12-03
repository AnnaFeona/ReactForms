import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormSubmits, User } from "../../model";

const initialState: FormSubmits = {
  uncontrolled: [],
  controlled: [],
  isControlledChanged: false,
  isUnControlledChanged: false,
};

export const submitsSlice = createSlice({
  name: "submits",
  initialState,
  reducers: {
    setControlled: (state, action: PayloadAction<User>) => {
      state.controlled.push(action.payload);
    },
    setUnControlled: (state, action: PayloadAction<User>) => {
      state.uncontrolled.push(action.payload);
    },
    setControlledChanged: (state) => {
      state.isControlledChanged = true;
      state.isUnControlledChanged = false;
    },
    setUnControlledChanged: (state) => {
      state.isControlledChanged = false;
      state.isUnControlledChanged = true;
    },
  },
});

export const { setControlled, setUnControlled } = submitsSlice.actions;

export const submitsReducer = submitsSlice.reducer;
