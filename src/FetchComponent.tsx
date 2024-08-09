import {useEffect, useState} from "react";

type Entity = {
  id: string;
  title: string;
  views: number;
}

export const FetchComponent = () => {
  const [entities, setEntities] = useState<Entity[] | null>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data: Entity[] = await response.json();
    setEntities(data);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading) return <p>Loading...</p>

  return <ul>
    {entities?.map((el) => <li key={el.id}>{el.title} views: {el.views}</li>)}
  </ul>
}