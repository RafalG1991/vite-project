import {createContext} from "react";
import {ConfigContextType} from "../types/config.ts";

export const ConfigContext = createContext<ConfigContextType>({
  colors: {
    primary: '#fff',
    secondary: '#000',
  }
});