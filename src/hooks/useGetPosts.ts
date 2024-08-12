import {useQuery} from "@tanstack/react-query";

export const useGetPosts = () => {
  const {data} = useQuery<Post>({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/posts');
      return response.json();
    }
  });
}