import {useRef} from "react";
import {RefInput} from "./RefInput.tsx";

// export const RefParent = () => {
//   const refInput = useRef<HTMLInputElement | null>(null);
//
//   const handleClick = () => {
//     refInput.current?.focus();
//   }
//
//   return <>
//     <RefInput passedRef={refInput} />
//     <button onClick={handleClick}>Focus!</button>
//   </>
// }

export const RefParent = () => {
  const refInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    refInput.current?.focus();
  }

  return <>
    <RefInput ref={refInput} />
    <button onClick={handleClick}>Focus!</button>
  </>
}