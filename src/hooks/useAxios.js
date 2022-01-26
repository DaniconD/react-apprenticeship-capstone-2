import { useEffect, useState } from 'react';
import { KEY } from '../api/KEY';
import axios from 'axios';

function useAxios(date) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const url = `https://api.nasa.gov/planetary/apod?date=${date}&thumbs=true&api_key=${KEY}`;
  async function getData() {
    try {
      const resp = await axios.get(url);
      setIsLoaded(true);
      setError(null);
      setData(resp.data);
    } catch (e) {
      setIsLoaded(true);
      setError(e);
    }
  }

  useEffect(() => {
    getData();
  }, [date]);
  return [data, isLoaded, error];
}

export default useAxios;
