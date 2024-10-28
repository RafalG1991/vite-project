import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/todosStore.ts";

export const useTodosDispatch = () => {
  return useDispatch<AppDispatch>();
}