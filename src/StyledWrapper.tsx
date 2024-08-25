import {ReactNode} from "react";
import styled from "styled-components";

type PropsWitchChildrenType = {
  children: ReactNode;
};

const StyledBox = styled.div`
    background-color: blue;
    padding: 25px 0;
`

export const StyledWrapper = ({children}: PropsWitchChildrenType) => {
  return (
    <StyledBox>
      {children}
    </StyledBox>
  )
}