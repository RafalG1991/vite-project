import {ReactNode} from "react";
import styled from "styled-components";

type PropsWitchChildrenType = {
  children: ReactNode;
};

const StyledBox = styled.div<{ color: string }>`
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.primary};
    padding: 25px 0;
`

export const StyledWrapper = ({children}: PropsWitchChildrenType) => {
  return (
    <StyledBox color='green'>
      {children}
    </StyledBox>
  )
}