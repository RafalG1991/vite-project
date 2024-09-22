import {useLoaderData, useSubmit} from "react-router-dom";
import {SingleTask} from "../types/tasks.ts";

export const SingleTaskView = () => {
  const {id, title, description} = useLoaderData() as SingleTask;
  const submit = useSubmit();

  const handleDelete = () => {
    submit({
      id,
    }, {
      method: "DELETE",
      action: "/",
    });
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete task</button>
    </div>
  )
}