import {useContext} from "react";
import {ConfigContext} from "./ConfigContext.tsx";

export const useConfigContext = () => {
  const context = useContext(ConfigContext);

  if(!context) throw new Error("Use this hook inside ConfigContext only!");

  return context;
}