import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

export const AwaitedData = () => {
  const { dataPromise } = useLoaderData() as { dataPromise: Promise<string> };

  console.log("Awaited data", dataPromise);

  return (
    <div>
      <h1>Awaited data</h1>
      <Suspense fallback="Loading awaited data...">
        <Await resolve={dataPromise}>
          {data => <p>{data}</p>}
        </Await>
      </Suspense>
    </div>
  )
}