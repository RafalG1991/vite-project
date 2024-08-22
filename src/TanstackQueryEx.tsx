import {useGetPostsQuery} from "./hooks/useGetPostsQuery.ts";

export const TanstackQueryEx = () => {
  const {data} = useGetPostsQuery();

  if (!data) return null;

  return <ul>
    {data.map(el => <li key={el.id}>{el.title} - {el.views}</li>)}
  </ul>
}