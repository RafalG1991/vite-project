import {useQuery} from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
  views: number;
}[]

export const useGetPostsQuery = () => {
  const {data} = useQuery<Post>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts');
      return response.json();
    }
  });
}