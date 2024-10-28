import {useGetAllTodosQuery} from "./slices/todosApiSlice.ts";
import {SingleTodo} from "./SingleTodo.tsx";

export const TodoList = () => {
  const { data, isLoading} = useGetAllTodosQuery();

  if(isLoading) return <h1>Loading todos...</h1>

  if(!data) return <h1>Todos are not available!</h1>

  return (
    <ul>
      {data.map(todo => <SingleTodo todo={todo} key={todo.id}/>)}
    </ul>
  )
}