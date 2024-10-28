import {Todo} from "./types/todo.ts";

export type SingleTodoProps = {
  todo: Todo;
}

export const SingleTodo = ({todo}: SingleTodoProps) => {
  return (
    <li>{todo.title}</li>
  )
}