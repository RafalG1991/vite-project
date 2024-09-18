export const fakeLoader = () => {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve('Success!'), 5000);
  });
  return promise;
}
