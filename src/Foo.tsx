import {useEffect, useLayoutEffect, useRef} from "react";

export const Foo = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log("USE EFFECT");
  }, []);

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT");
  }, []);

  return (
    <div>
      <h1 ref={ref}>Foo Component</h1>
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