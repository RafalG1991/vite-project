import {Form, useActionData} from "react-router-dom";
import {SingleTask} from "../types/tasks.ts";

export const AddTaskView = () => {
  const data = useActionData() as SingleTask | null;

  return (
    <div>
      <h1>Create new task</h1>
      <Form method="post">
        <input type="text" name="title"/>
        <textarea name="description" />
        <button type="submit">Add task</button>
      </Form>
      {data ? <p>Task {data.title} was successfully created</p> : null}
    </div>
  )
}