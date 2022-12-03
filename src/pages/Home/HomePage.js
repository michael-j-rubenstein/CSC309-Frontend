import Hero from "../../components/Hero/Hero";
import { useRef, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";
import Card from "../../components/Layout/Card";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const latInputRef = useRef();
  const longInputRef = useRef();
  const [studios, setStudios] = useState([]);

  const locationSubmitHandler = (event) => {
    event.preventDefault();
    console.log(latInputRef.current.value, longInputRef.current.value);
  };

  const studio_list = studios.map((studio) => {
    console.log(studio);
  });

  console.log(studio_list);

  return (
    <>
      <Hero></Hero>
      <Wrapper>
        <Title>Find a studio!</Title>
        <LocationInput
          latRef={latInputRef}
          longRef={longInputRef}
          submitHandler={locationSubmitHandler}
        ></LocationInput>
        {/* <Title>Studios</Title> */}
        <Card>
          {studio_list.length === 0 ? (
            <p className={styles.error}>
              No Studios Found. Please Search Again
            </p>
          ) : (
            studio_list
          )}
        </Card>
      </Wrapper>
    </>
  );
};

export default HomePage;
