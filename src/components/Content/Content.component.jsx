import React from 'react';
import useFetch from '../../hooks/useFetch';

function Content() {
  const [data, isLoaded, error] = useFetch('');
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <p>{data.explanation}</p>
        <img src={data.url} alt="image" />
      </ul>
    );
  }
}

export default Content;
