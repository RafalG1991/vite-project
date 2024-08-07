import React from "react";

type RefInputProps = {
  passedRef: React.MutableRefObject<HTMLInputElement | null>;
}

export const RefInput = ({passedRef}: RefInputProps) => {
  return <input ref={passedRef} type="text"/>
}