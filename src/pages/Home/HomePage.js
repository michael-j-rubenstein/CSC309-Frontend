import Hero from "../../components/Hero/Hero";
import React, { useRef, useState } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import LocationInput from "../../components/Forms/LocationInput";
import Title from "../../components/Text/Title";
import Card from "../../components/Layout/Card";

import axios from "axios";

import styles from "./HomePage.module.css";
import StudioItem from "../../components/Studio/StudioItem";
import CustomMap from "../../components/Map/CustomMap";


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
    localStorage.getItem('SavedToken');
    console.log(latInputRef.current.value);


    const config = {
      headers: {
        Authorization: `${bearer}`,
        //Authorization:localStorage.getItem('SavedToken'),
      },
    };

    const user_latitude =
      latInputRef.current.value !== ""
        ? latInputRef.current.value * 1
        : 43.6532;
    const user_longitude =
      longInputRef.current.value !== ""
        ? longInputRef.current.value * 1
        : -79.3832;
    const amenityArray =
      filterData.amenities.length === 0 ? [] : filterData.amenities.split(",");
    const classArray =
      filterData.classes.length === 0 ? [] : filterData.classes.split(",");
    const coachArray =
      filterData.coaches.length === 0 ? [] : filterData.coaches.split(",");

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
        setStudios(res.data);
        console.log(res.data);
      });
    setSearched(true);
  };

  var studio_list = Object.keys(studios);

  const studio_latlng = studio_list.map((studio_name) => {
    const latlng = {
      lat: studios[`${studio_name}`].latitude,
      lng: studios[`${studio_name}`].longitude,
    };
    return latlng;
  });

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

  var user_location = { lat: 43.6532, lng: -79.3832 };

  if (
    latInputRef.current !== undefined &&
    longInputRef.current !== undefined &&
    latInputRef.current.value !== "" &&
    longInputRef.current.value !== ""
  )
    user_location = {
      lat: latInputRef.current.value * 1,
      lng: longInputRef.current.value * 1,
    };

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
        <Card className={styles.map}>
          <CustomMap
            userLocation={user_location}
            locations={studio_latlng ? studio_latlng : []}
          ></CustomMap>
        </Card>
        <Card>{studio_list.length === 0 ? error_message : studio_list}</Card>
      </Wrapper>
    </>
  );
};

export default HomePage;
