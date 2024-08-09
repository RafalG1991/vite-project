import {useState} from "react";

const API_BASE = 'http://localhost:3000/';

export const useApi = <T>() => {
  const [entities, setEntities] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('');

  const getData = async (url: string) => {
    try {
      const response = await fetch(`${API_BASE
      }${url}`);
      if(response.ok) {
        const data: T = await response.json();
        setEntities(data);
      } else {
        const apiError: string = await response.text();
        setError(apiError);
      }
    } catch (e) {
      setError('Error loading data!');
    } finally {
      setLoading(false);
    }
  }

  return {
    getData, entities, error, loading,
  }
}