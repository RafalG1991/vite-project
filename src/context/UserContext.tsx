import {createContext} from "react";
import {UserContextType} from "../types/user.ts";

export const UserContext = createContext<UserContextType>({user: null});