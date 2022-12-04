import Hero from "../../components/Hero/Hero";
import React, { useRef, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";
import Card from "../../components/Layout/Card";

import axios, { Axios } from "axios";

import styles from "./HomePage.module.css";
import StudioItem from "../../components/Studio/StudioItem";

const HomePage = () => {
  const latInputRef = useRef();
  const longInputRef = useRef();
  const [studios, setStudios] = useState([]);
  const [searched, setSearched] = useState(false);

  const locationSubmitHandler = async (event) => {
    event.preventDefault();

    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMTI3OTgxLCJpYXQiOjE2NzAxMjQzODEsImp0aSI6IjAzNGJmODc3NzdmYzRiODQ4NDExMTNhMzc3ZWI1ZDU0IiwidXNlcl9pZCI6Nn0.uyjPV3bJ3g5jB2LY7Ele6qw0e3-fkI5ZcuGNabsjTnQ";
    console.log(bearer);

    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}studios/`,
        {
          latitude: 1,
          longitude: 2,
          mode: "no-cors",
        },
        config
      )
      .then((res) => {
        setStudios(res.data);
      });

    // const data = await fetch(process.env.REACT_APP_BACKEND_URL + "studios/", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: new Headers({ Authorization: bearer }),
    // });

    setSearched(true);
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
        id: 2,
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
    return <StudioItem key={data.id} data={{ ...data }}></StudioItem>;
  });

  const error_message = searched ? (
    <p className={styles.error}> No studios found, please try again! </p>
  ) : (
    <p className={styles.error}>
      Please enter your information above and search!
    </p>
  );

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
        <Card>{studio_list.length === 0 ? error_message : studio_list}</Card>
      </Wrapper>
    </>
  );
};

export default HomePage;
