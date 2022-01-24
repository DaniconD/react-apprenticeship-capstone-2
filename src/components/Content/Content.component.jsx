import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import NoImage from '../../resources/img/image-not-available.png';

function Content() {
  const [date, setDate] = useState('');
  const [data, isLoaded, error] = useFetch(date);
  if (date === '') {
    return (
      <ul>
        <h2>Pic a date</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      </ul>
    );
  }
  if (error) {
    return (
      <div>
        <h3>There was an error, please try again.</h3>
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <h2>Pic a date</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        <p>{date}</p>
        <div className="image-container">
          <img
            src={
              data.thumbnail_url
                ? data.thumbnail_url
                : data.url
                ? data.url
                : NoImage
            }
            alt="image"
          />
        </div>
        <p>{data.explanation}</p>
        <p>{data.msg}</p>
      </ul>
    );
  }
}

export default Content;
