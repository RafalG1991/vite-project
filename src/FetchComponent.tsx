import {useEffect, useState} from "react";

type Entity = {
  id: string;
  title: string;
  views: number;
}

export const FetchComponent = () => {
  const [entities, setEntities] = useState<Entity[] | null>([]);



  return <ul>
    {entities?.map((el) => <li key={el.id}>{el.title} views: {el.views}</li>)}
  </ul>
}