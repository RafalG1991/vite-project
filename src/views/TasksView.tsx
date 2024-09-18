import {useLoaderData} from "react-router-dom";
import {SingleTask} from "../types/tasks.ts";

export const TasksView = () => {
  const data = useLoaderData() as SingleTask[];
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {data.map(el => <li key={el.id}>{el.title}</li>)}
      </ul>
    </div>
  )
}