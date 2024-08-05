import {FormEventHandler} from "react";

export const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit!");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"/>
    </form>
  )
}