import {FormEvent, useState} from "react";
import {useAddTodoMutation} from "./slices/todosApiSlice.ts";

export const TodoForm = () => {
  const [value, setValue] = useState('');
  const [create, { isLoading }] = useAddTodoMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    create(value);

    setValue('');
  }

  return (
    <>
      {isLoading ? <p>Adding...</p> : null}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} name="title" placeholder="title"/>
        <button type="submit">Add todo</button>
      </form>
    </>
  )
}