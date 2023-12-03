import { configureStore } from '@reduxjs/toolkit';
import { submitsReducer } from './slices/submits.slice';
import { countriesReducer } from './slices/countries.slice';


export const store = configureStore({
  reducer: {
    submits: submitsReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;