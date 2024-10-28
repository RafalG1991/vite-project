import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Todo} from "../types/todo.ts";

export const todosApiSlice = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/todos' }),
  tagTypes: ['TODOS'],
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => '',
    }),
    addTodo: builder.mutation<Todo, string>({
      query: (title: string) => ({
        url: '',
        method: 'POST',
        body: {
          title,
        },
      }),
      invalidatesTags: ['TODOS'],
    }),
  }),
});

export const { useGetAllTodosQuery , useAddTodoMutation } = todosApiSlice;