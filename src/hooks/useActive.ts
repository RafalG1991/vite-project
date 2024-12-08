import {useEffect, useState} from "react";

export const useActive = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(prev => !prev);
    }, 5000)
  }, []);

  return active;
}