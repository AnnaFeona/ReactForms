import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    // pagination: paginationReducer,
    // search: searchReducer,
    // [beerApi.reducerPath]: beerApi.reducer,
  },
  // middleware: (getDefaltMiddleware) => getDefaltMiddleware().concat(beerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;