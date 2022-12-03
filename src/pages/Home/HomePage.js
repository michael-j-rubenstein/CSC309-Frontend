import Hero from "../../components/Hero/Hero";
import { useRef, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";
import Card from "../../components/Layout/Card";

import styles from "./HomePage.module.css";
import StudioItem from "../../components/Studio/StudioItem";

const HomePage = () => {
  const latInputRef = useRef();
  const longInputRef = useRef();
  const [studios, setStudios] = useState([]);

  const locationSubmitHandler = (event) => {
    event.preventDefault();
    console.log(latInputRef.current.value, longInputRef.current.value);
    setStudios({
      "GoodLife Fitness Toronto Richmond and John": {
        id: 1,
        name: "GoodLife Fitness Toronto Richmond and John",
        address: "267 Richmond St W, Toronto, ON",
        distance: 12,
        directions:
          "https://www.google.com/maps/dir/633+Bay+St.,+Toronto,+ON+M5G+2G4,+Canada/GoodLife+Fitness+Toronto+Richmond+and+John,+267+Richmond+St+W,+Toronto,+ON+M5V+3M6/@43.648754,-79.4094495,15z/data=!4m14!4m13!1m5!1m1!1s0x882b34ca53f5a36b:0x9c6da32c964a3a2!2m2!1d-79.3832236!2d43.6567671!1m5!1m1!1s0x882b34da9f48e43b:0x17f1fdd1a8210e42!2m2!1d-79.39194!2d43.648754!3e3",
      },
      "second studio": {
        id: 1,
        name: "9Round Fitness",
        address: "777 Bay St. M219, Toronto, ON",
        distance: 2,
        directions:
          "https://www.google.com/maps/dir/633+Bay+St.,+Toronto,+ON+M5G+2G4,+Canada/9Round+Fitness,+777+Bay+St.+M219,+Toronto,+ON+M7A+2J3/@43.6587967,-79.3853891,17z/data=!3m2!4b1!5s0x882b34cb7491effd:0xadf4bc377f6e1d05!4m14!4m13!1m5!1m1!1s0x882b34ca53f5a36b:0x9c6da32c964a3a2!2m2!1d-79.3832236!2d43.6567671!1m5!1m1!1s0x882b357a658f9ed5:0x3a21ed7558a2816!2m2!1d-79.3841909!2d43.6606226!3e3",
      },
    });
  };

  var studio_list = Object.keys(studios);
  studio_list = studio_list.map((studio_name) => {
    const data = studios[`${studio_name}`];
    return <StudioItem id={data.id} data={{ ...data }}></StudioItem>;
  });

  // console.log(studio_list);

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
