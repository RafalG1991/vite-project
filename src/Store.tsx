import {useSyncExternalStore} from "react";
import {dataStore} from "./data.ts";

export const Store = () => {
  const elements = useSyncExternalStore(dataStore.subscribe, dataStore.getElements);

  return <ul>
    {elements.map((el, index) => <li key={index}>{el}</li>)}
  </ul>
}