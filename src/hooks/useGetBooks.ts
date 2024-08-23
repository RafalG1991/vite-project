import {useQuery} from "@tanstack/react-query";

type Book = {
  id: string,
  title: string,
};

export const useGetBooks = () => {
  const {data} = useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/books');
      return response.json();
    },
  });

  return {
    data,
  }
}