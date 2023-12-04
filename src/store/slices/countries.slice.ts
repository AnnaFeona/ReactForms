import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { countries } from '../../model/constants';

const initialState: string[] = countries;

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addCountry } = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;