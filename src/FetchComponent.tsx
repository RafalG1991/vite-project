import {useEffect, useState} from "react";

type Entity = {
  id: string;
  title: string;
  views: number;
}

export const FetchComponent = () => {
  const [entities, setEntities] = useState<Entity[] | null>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      const data: Entity[] = await response.json();
      setEntities(data);
    } catch (e) {
      setError('Error loading data!');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return <ul>
    {entities?.map((el) => <li key={el.id}>{el.title} views: {el.views}</li>)}
  </ul>
}