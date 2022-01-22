import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';

function Content() {
  const [date, setDate] = useState('');
  const [data, isLoaded, error] = useFetch(date);
  if (date === '') {
    return (
      <ul>
        <div>Pic a date</div>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      </ul>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        <p>{date}</p>
        <img src={data.url} alt="image" />
        <p>{data.explanation}</p>
      </ul>
    );
  }
}

export default Content;
