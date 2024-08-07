// import React from "react";
//
// type RefInputProps = {
//   passedRef: React.MutableRefObject<HTMLInputElement | null>;
// }
//
// export const RefInput = ({passedRef}: RefInputProps) => {
//   return <input ref={passedRef} type="text"/>
// }

import {ForwardedRef, forwardRef} from "react";

export const RefInput = forwardRef((_,ref: ForwardedRef<HTMLInputElement | null>) => {
  return <input ref={ref} type="text"/>
})