import {useQuery} from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
  views: number;
}[]

export const TanstackQueryEx = () => {


  if (!data) return null;

  return <ul>
    {data.map(el => <li key={el.id}>{el.title} - {el.views}</li>)}
  </ul>
}