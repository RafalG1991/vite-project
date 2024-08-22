import {useGetPostsQuery} from "./hooks/useGetPostsQuery.ts";

export const TanstackQueryEx = () => {
  const {data} = useGetPostsQuery('1');

  if (!data) return null;

  return <ul>
    <li key={data.id}>{data.title} - {data.views}</li>
  </ul>
}