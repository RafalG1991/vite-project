import {Todo} from "./types/todo.ts";
import {useDeleteTodoMutation} from "./slices/todosApiSlice.ts";

export type SingleTodoProps = {
  todo: Todo;
}

export const SingleTodo = ({todo}: SingleTodoProps) => {
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = () => {
    deleteTodo(todo.id);
  }

  return (
    <li>
      <strong>{todo.title}</strong>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}