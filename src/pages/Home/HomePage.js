import Hero from "../../components/Hero/Hero";
import { useRef } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";

const HomePage = () => {
  const latInputRef = useRef();
  const longInputRef = useRef();

  const locationSubmitHandler = (event) => {
    event.preventDefault();
    console.log(latInputRef.current.value, longInputRef.current.value);
  };

  return (
    <>
      <Hero></Hero>
      <Wrapper>
        <Title>Find a club!</Title>
        <LocationInput
          latRef={latInputRef}
          longRef={longInputRef}
          submitHandler={locationSubmitHandler}
        ></LocationInput>
      </Wrapper>
    </>
  );
};

export default HomePage;
