import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import {
  Container,
  DisplayContainer,
  Image,
  ImageContainer,
} from '../StyledComponents/StyledComponentsList';

// import '../StyledComponents/StyledComponentsList';
import NoImage from '../../resources/img/image-not-available.png';

function Content() {
  const [date, setDate] = useState('');
  const [data, isLoaded, error] = useAxios(date);

  const DisplayError = () => {
    return (
      <DisplayContainer>
        <br />
        Error: {error.message}
        <ImageContainer>
          <Image src={NoImage} alt="image" />
        </ImageContainer>
      </DisplayContainer>
    );
  };

  const DisplayImage = () => {
    return (
      <DisplayContainer>
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
      </DisplayContainer>
    );
  };

  return (
    <Container>
      <h2>Pick a Date</h2>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      {error ? <DisplayError /> : !isLoaded ? 'Loading...' : <DisplayImage />}
    </Container>
  );
}

export default Content;
