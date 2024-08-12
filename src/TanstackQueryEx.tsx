import {useGetPosts} from "./hooks/useGetPosts.ts";

export const TanstackQueryEx = () => {
  const {data} = useGetPosts();

  if (!data) return null;

  return <ul>
    {data.map(el => <li key={el.id}>{el.title} - {el.views}</li>)}
  </ul>
}