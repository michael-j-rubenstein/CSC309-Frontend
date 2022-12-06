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
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMjI0OTI4LCJpYXQiOjE2NzAyMjEzMjgsImp0aSI6IjAwMzQzZWYwOGRkNDRiNDg5MmY2ZTAyNmVlMWY4MmUyIiwidXNlcl9pZCI6M30.Hvm0CQPAbPb7nbDHtF9tjayue1q5pOtMMfn34coPdR8";
    console.log(latInputRef.current.value);

    const config = {
      headers: {
        // Authorization: `${bearer}`,
        Authorization:localStorage.getItem('SavedToken'),
      },
    };

    const user_latitude = latInputRef.current.value * 1;
    const user_longitude = longInputRef.current.value * 1;

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}studios/`,
        {
          latitude: user_latitude,
          longitude: user_longitude,
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
