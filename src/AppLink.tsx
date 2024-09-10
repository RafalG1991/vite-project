import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

type AppLinkProps = {
  to: string;
  children: ReactNode;
}

export const AppLink = ({to, children}: AppLinkProps) => {
  return (
    <NavLink to={to}>{children}</NavLink>
  )
}