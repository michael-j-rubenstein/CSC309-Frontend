import TagList from "../../components/UI/TagList";
import Hero from "../../components/Hero/Hero";
import Input from "../../components/Forms/Input";
import { useRef } from "react";

const HomePage = () => {
  const locationInputRef = useRef();
  return (
    <>
      <Hero></Hero>
      <p>lorea jsdajsdl aksjdaljsd </p>
      <Input
        ref={locationInputRef}
        label="Latitude"
        input={{ type: "number", id: "aaaa", min: -180, max: 180 }}
      ></Input>
    </>
  );
};

export default HomePage;
