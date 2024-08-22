import {useQuery} from "@tanstack/react-query";

export type Subpost = {
  id: string;
  title: string;
  views: number;
}

type PostWithSubposts = {
  id: string;
  title: string;
  views: number;
  subposts: Subpost[];
}

export const useGetPostsQuery = (postId: string) => {
  const {data} = useQuery({
    queryKey: ['subposts', postId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/posts/${postId}?_embed=subposts`);
      return response.json() as Promise<PostWithSubposts>;
    }
  });

  return {
    data,
  }

}