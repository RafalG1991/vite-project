import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

type AppLinkProps = {
  to: string;
  children: ReactNode;
}

export const AppLink = ({to, children}: AppLinkProps) => {
  return (
    <NavLink end to={to} style={({ isActive }) => ({
      fontWeight: isActive ? 700 : 300,
    })}>{children}</NavLink>
  )
}