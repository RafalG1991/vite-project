import {FormEvent} from "react";

export const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit!");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"/>
    </form>
  )
}