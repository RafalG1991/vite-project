import {useEffect} from "react";
import {useApi} from "./hooks/useApi.ts";

type Entity = {
  id: string;
  title: string;
  views: number;
}[]

export const FetchComponent = () => {
const {error, entities, getData, loading} = useApi<Entity>();

  useEffect(() => {
    getData('posts');
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return <ul>
    {entities?.map((el) => <li key={el.id}>{el.title} views: {el.views}</li>)}
  </ul>
}