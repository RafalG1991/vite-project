import {configureStore} from "@reduxjs/toolkit";

export const todosStore = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type AppDispatch = typeof todosStore.dispatch;