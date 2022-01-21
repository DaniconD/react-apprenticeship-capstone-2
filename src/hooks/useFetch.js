import { useEffect, useState } from 'react';
import { KEY } from '../api/KEY';

function useFetch(text) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [text]);
  return [data, isLoaded, error];
}

export default useFetch;
