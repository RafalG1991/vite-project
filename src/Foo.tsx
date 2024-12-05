import {useEffect, useLayoutEffect, useRef, useState} from "react";

export const Foo = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [config, setConfig] = useState<{width: number, height: number, x: number, y: number}>({
    x: 0,
    y: 0,
    width: 200,
    height: 100,
  });

  useEffect(() => {
    console.log("USE EFFECT", ref.current);
    if(!ref.current) return;
    const { width, height, x, y} = ref.current?.getBoundingClientRect();
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