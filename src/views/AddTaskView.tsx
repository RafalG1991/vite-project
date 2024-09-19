import {Form} from "react-router-dom";

export const AddTaskView = () => {
  return (
    <div>
      <h1>Create new task</h1>
      <Form method="post">
        <input type="text" name="title"/>
        <textarea name="description" />
        <button type="submit">Add task</button>
      </Form>
    </div>
  )
}