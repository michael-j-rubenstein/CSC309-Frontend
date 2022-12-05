import Hero from "../../components/Hero/Hero";
import React, { useRef, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";
import Card from "../../components/Layout/Card";

import axios from "axios";

import styles from "./HomePage.module.css";
import StudioItem from "../../components/Studio/StudioItem";

const HomePage = () => {
  const latInputRef = useRef();
  const longInputRef = useRef();
  const [studios, setStudios] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filterData, setFilterData] = useState({
    name: "",
    amenities: "",
    classes: "",
    coaches: "",
  });

  const locationSubmitHandler = async (event) => {
    event.preventDefault();

    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMjcxNzUzLCJpYXQiOjE2NzAyNjgxNTMsImp0aSI6IjcyNDUxOTMwM2RmODQ1NmE5ODNkODI0NjRlY2I2YWEwIiwidXNlcl9pZCI6Nn0.GwxJn8D-tyJyyBCfFXRiRjerMj5vS5m5j2syvm904GI";

    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    const user_latitude = latInputRef.current.value * 1;
    const user_longitude = longInputRef.current.value * 1;
    const amenityArray =
      filterData.amenities.length === 0 ? [] : filterData.amenities.split(",");
    const classArray =
      filterData.classes.length === 0 ? [] : filterData.classes.split(",");
    const coachArray =
      filterData.coaches.length === 0 ? [] : filterData.coaches.split(",");

    console.log({
      latitude: user_latitude,
      longitude: user_longitude,
      name: filterData.name,
      amenities: amenityArray,
      classes: classArray,
      coaches: coachArray,
    });

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}studios/`,
        {
          latitude: user_latitude,
          longitude: user_longitude,
          name: filterData.name,
          amenities: amenityArray,
          classes: classArray,
          coaches: coachArray,
          // mode: "no-cors",
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        setStudios(res.data);
      });

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
          filterData={filterData}
          setFilterData={setFilterData}
        ></LocationInput>
        {/* <Title>Studios</Title> */}
        <Card>{studio_list.length === 0 ? error_message : studio_list}</Card>
      </Wrapper>
    </>
  );
};

export default HomePage;
