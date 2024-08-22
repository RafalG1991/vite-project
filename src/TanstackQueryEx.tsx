import {useGetPostsQuery} from "./hooks/useGetPostsQuery.ts";
import {useGetPosts} from "./hooks/useGetPosts.ts";

export const TanstackQueryEx = () => {
  const {data, refetch} = useGetPosts();
  const firstPostId = data ? data[0].id : undefined;

  const {data: subposts} = useGetPostsQuery(firstPostId);

  if (!data || !subposts) return null;

  return <div>
    <button onClick={() => refetch()}>Refetch posts</button>
    <ul>
      {data.map((el) => (
        <li key={el.id}>{el.title} - {el.views}</li>
      ))}
    </ul>
    <hr/>
    <ul>
      {subposts.map((el) => (
        <li key={el.id}>{el.title} - {el.views}</li>
      ))}
    </ul>
  </div>
}