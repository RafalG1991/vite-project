import {useEffect, useInsertionEffect, useLayoutEffect} from "react";

export const Effects = () => {
  useInsertionEffect(() => {
    console.log('Insertion');
  }, []);

  useLayoutEffect(() => {
    console.log('Layout');
  }, []);

  useEffect(() => {
    console.log('Effect');
  }, []);

  return null;
}