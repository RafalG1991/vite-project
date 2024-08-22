import {useQuery} from "@tanstack/react-query";

type PostWithSubposts = {
  id: string;
  title: string;
  views: number;
  subposts: {
    id: string;
    title: string;
    views: number;
  };
}

export const useGetPostsQuery = (postId: string) => {
  useQuery({
    queryKey: ['subposts', postId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}?_embed=subposts`);
      return response.json() as Promise<PostWithSubposts>;
    }
  });

}