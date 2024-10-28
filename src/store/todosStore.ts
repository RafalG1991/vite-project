import {configureStore} from "@reduxjs/toolkit";
import {todosApiSlice} from "../slices/todosApiSlice.ts";

export const todosStore = configureStore({
  reducer: {
    [todosApiSlice.reducerPath]: todosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type AppDispatch = typeof todosStore.dispatch;