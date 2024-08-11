import {useQuery} from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
  views: number;
}[]

export const TanstackQueryEx = () => {
  const {data} = useQuery<Post>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts');
      return response.json();
    }
  });

  if (!data) return null;

  return <ul>
    {data.map(el => <li key={el.id}>{el.title} - {el.views}</li>)}
  </ul>
}