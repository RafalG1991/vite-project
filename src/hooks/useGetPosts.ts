import {useQuery} from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
  views: number;
}[]

export const useGetPosts = () => {
  const {data, refetch} = useQuery<Post>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts');
      return response.json();
    }
  });

  return {
    data,
    refetch,
  }
}