import {useEffect, useState} from "react";

type Entity = {
  id: string;
  title: string;
  views: number;
}

export const FetchComponent = () => {
  const [entities, setEntities] = useState<Entity[] | null>([]);
  const [loading, setLoading] = useState(false);

  if(loading) return <p>Loading...</p>

  return <ul>
    {entities?.map((el) => <li key={el.id}>{el.title} views: {el.views}</li>)}
  </ul>
}