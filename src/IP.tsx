import {getRouteApi} from "@tanstack/react-router";
import {Provider} from "react-redux";
import {todosStore} from "./store/todosStore.ts";
import {TodoList} from "./TodoList.tsx";
import {TodoForm} from "./TodoForm.tsx";
import {FooZustand} from "./FooZustand.tsx";
import {MyIp} from "./MyIp.tsx";

const IpRoute = getRouteApi('/ip');

export function IP () {
  const { ip } = IpRoute.useLoaderData();
  const { value } = IpRoute.useRouteContext();

  return (
    <>
      <MyIp />
      <FooZustand />
      <Provider store={todosStore}>
        <TodoForm />
        <TodoList />
      </Provider>
      <div>
        <h1>Your IP:</h1>
        <h2>{ip}</h2>
        <h3>Context value: {value}</h3>
      </div>
    </>
  )
}