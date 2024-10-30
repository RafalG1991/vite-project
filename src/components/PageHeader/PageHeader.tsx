import {ReactNode} from "react";

export type PageHeaderProps = {
  children: ReactNode;
}

export const PageHeader = ({children}: PageHeaderProps) => {
  return <h2>{children}</h2>
}