import {defer} from "react-router-dom";

export const fakeLoader = () => {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve('Success!'), 5000);
  });
  return defer({ dataPromise: promise });
}
