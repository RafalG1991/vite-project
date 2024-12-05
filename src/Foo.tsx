import {useEffect, useLayoutEffect} from "react";
import zIndex from "@mui/material/styles/zIndex";

export const Foo = () => {
  useEffect(() => {
    console.log("USE EFFECT");
  }, []);

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT");
  }, []);

  return (
    <div>
      <h1>Foo Component</h1>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: 200,
        width: 400,
        zIndex: -1,
        background: 'blue'
      }}/>
    </div>

  )
}