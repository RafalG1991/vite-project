import {useEffect, useLayoutEffect, useRef, useState, useDeferredValue} from "react";
import {Bar} from "./Bar.tsx";

export const Foo = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [config, setConfig] = useState<{width: number, height: number, x: number, y: number, active: boolean}>({
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    active: false,
  });
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  // useEffect(() => {
  //   console.log("USE EFFECT", ref.current);
  //   if(!ref.current) return;
  //   const { width, height, x, y} = ref.current?.getBoundingClientRect();
  //   setConfig({width, height, x, y, active: true});
  // }, []);

  useLayoutEffect(() => {
    console.log("USE LAYOUT EFFECT");
    if(!ref.current) return;
    const { width, height, x, y} = ref.current?.getBoundingClientRect();
    setConfig({width, height, x, y, active: true});
  }, []);

  return (
    <div>
      <h1 ref={ref}>Foo Component</h1>
      <div style={{
        position: 'absolute',
        left: config.x,
        top: config.y,
        height: config.height,
        width: config.width,
        zIndex: -1,
        background: config.active ? 'red' : 'blue'
      }}/>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <Bar value={deferredValue} />
    </div>
  )
}