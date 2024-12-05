import {useEffect, useLayoutEffect} from "react";

export const Foo = () => {
  useEffect(() => {
    console.log("USE EFFECT");
  }, []);

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT");
  }, []);

  return (
    <h1>Foo Component</h1>
  )
}