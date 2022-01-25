import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  Container,
  Image,
  ImageContainer,
} from '../StyledComponents/StyledComponentsList';

import '../StyledComponents/StyledComponentsList';
import NoImage from '../../resources/img/image-not-available.png';

function Content() {
  const [date, setDate] = useState('');
  const [data, isLoaded, error] = useFetch(date);
  if (date === '') {
    return (
      <Container>
        <h2>Pic a Date</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        <ImageContainer>
          <Image
            src={
              data.thumbnail_url
                ? data.thumbnail_url
                : data.url
                ? data.url
                : NoImage
            }
            alt="image"
          />
          <p>{data.msg}</p>
        </ImageContainer>
        <p>{data.explanation}</p>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <h2>Pic a Date</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        <h3>There was an error, please try again.</h3>
        Error: {error.message}
        <p>{data.msg}</p>
        <ImageContainer>
          <Image src={NoImage} alt="image" />
        </ImageContainer>
      </Container>
    );
  } else if (!isLoaded) {
    return <Container>Loading...</Container>;
  } else {
    return (
      <Container>
        <h2>Pic a Date</h2>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
        <p>{data.msg}</p>
        <ImageContainer>
          <Image
            src={
              data.thumbnail_url
                ? data.thumbnail_url
                : data.url
                ? data.url
                : NoImage
            }
            alt="image"
          />
        </ImageContainer>
        <p>{data.explanation}</p>
      </Container>
    );
  }
}

export default Content;
