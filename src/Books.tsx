import {useGetBooks} from "./hooks/useGetBooks.ts";

export const Books = () => {
  const {data: books} = useGetBooks();

  if (!books) return null;

  return <ul>
    {books.map(book => <li>{book.title}</li>)}
  </ul>
}