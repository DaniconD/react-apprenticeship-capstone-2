import { useEffect, useState } from 'react';
import { KEY } from '../api/KEY';
import axios from 'axios';

function useFetch(date) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&thumbs=true&api_key=${KEY}`
      )
      .then((result) => {
        setIsLoaded(true);
        setError(null);
        setData(result.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [date]);
  return [data, isLoaded, error];
}

export default useFetch;
