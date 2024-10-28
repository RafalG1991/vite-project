import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Todo} from "../types/todo.ts";

export const todosApiSlice = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/todos' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetAllTodosQuery } = todosApiSlice;