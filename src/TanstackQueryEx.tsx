import {useGetPostsQuery} from "./hooks/useGetPostsQuery.ts";
import {useGetPosts} from "./hooks/useGetPosts.ts";

export const TanstackQueryEx = () => {
  const {data} = useGetPosts();
  const firstPostId = data ? data[0].id : undefined;

  const {data: subposts} = useGetPostsQuery(firstPostId);
  console.log(data, subposts);

  if (!data || !subposts) return null;

  return <div>
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