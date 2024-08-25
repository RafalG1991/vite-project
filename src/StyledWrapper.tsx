import {ReactNode} from "react";

type PropsWitchChildrenType = {
  children: ReactNode;
};

export const StyledWrapper = ({children}: PropsWitchChildrenType) => {
  return (
    <div>
      {children}
    </div>
  )
}