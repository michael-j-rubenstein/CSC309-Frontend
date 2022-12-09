import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Wrapper from "../../components/Layout/Wrapper";
import Title from "../../components/Text/Title";
import axios from "axios";
import ImageSlider from "../../components/Images/ImageSlider";
import ClassesList from "../../components/Classes/ClassesList";
import "./StudioPage.module.css";
import Button from "../../components/UI/Button";

import styles from "./StudioPage.module.css";
import AmenityGrid from "../../components/Amenities/AmenityGrid";
import StudioDetails from "../../components/Studio/StudioDetails";

const StudioPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const user_lat = searchParams.get("user_lat", "");
  const user_long = searchParams.get("user_long", "");
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [postal, setPostal] = useState();
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState();
  const [classes, setClasses] = useState();
  const [search_name, setSearchname] = useState();
  const [search_coach, setCoach] = useState();
  const [search_start, setStart] = useState();
  const [search_end, setEnd] = useState();
  const [search_date, setDate] = useState();
  const [showFilter, setShowFilter] = useState(false);
  const [urlDest, setUrlDest] = useState();

  var token = localStorage.getItem("SavedToken");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}studios/${id}/`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        setName(data["name"]);
        setAddress(data["address"]);
        setPhone(data["phone_num"]);
        setAmenities(data["amenities"]);
        setImages(data["images"]);
        setClasses(data["classes"]);
        setUrlDest(data["url_dest"]);
        setPostal(data["postal"]);
        // classes_copy = [...classes];
      });
  }, [id, token]);

  const ImageData = [];
  if (images != null) {
    for (const value of images) {
      var image_url = `${process.env.REACT_APP_BACKEND_URL}`.concat(
        value.substring(1)
      );
      ImageData.push({ image: image_url });
    }
  }

  const searchHandler = (e) => {
    e.preventDefault();
    var request_body = {};
    if (search_date !== undefined) {
      const date_lst = search_date.split("/");
      const date_dict = {
        year: parseInt(date_lst[0]),
        month: parseInt(date_lst[1]),
        day: parseInt(date_lst[2]),
      };
      request_body["date"] = date_dict;
    }
    if (search_start !== undefined) {
      const start_lst = search_start.split(":");
      const start_dict = {
        hour: parseInt(start_lst[0]),
        minute: parseInt(start_lst[1]),
      };
      request_body["start_time"] = start_dict;
    }
    if (search_end !== undefined) {
      const end_lst = search_end.split(":");
      const end_dict = {
        hour: parseInt(end_lst[0]),
        minute: parseInt(end_lst[1]),
      };
      request_body["end_time"] = end_dict;
    }
    if (search_coach !== undefined) {
      request_body["coach"] = search_coach;
    }
    if (search_name !== undefined) {
      request_body["classname"] = search_name;
    }
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/${id}/searchclasses/`,
        { headers: { Authorization: `${token}` }, body: request_body }
      )
      .then((res) => {
        setClasses(res.data);
      });
  };

  // if (search_start !== undefined) {
  //   const start_lst = search_start.split(":");
  //   const start_dict = {
  //     hour: parseInt(start_lst[0]),
  //     minute: parseInt(start_lst[1]),
  //   };
  //   request_body["start_time"] = start_dict;
  // }
  // if (search_end !== undefined) {
  //   const end_lst = search_end.split(":");
  //   const end_dict = {
  //     hour: parseInt(end_lst[0]),
  //     minute: parseInt(end_lst[1]),
  //   };
  //   request_body["end_time"] = end_dict;
  // }
  // if (search_coach !== undefined) {
  //   request_body["coach"] = search_coach;
  // }
  // if (search_name !== undefined) {
  //   request_body["classname"] = search_name;
  // }
  // console.log(request_body);
  // axios
  //   .post(`${process.env.REACT_APP_BACKEND_URL}classes/${id}/searchclasses/`, {
  //     headers: { Authorization: `${token}` },
  //     body: request_body,
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //     setClasses(res.data);
  //   });

  // const restoreHandler = () => {
  //     setClasses(classes_copy)
  // }

  const filterForm = showFilter ? (
    <form onSubmit={searchHandler}>
      <label htmlFor="searchName" className={styles.label}>
        Class Name
      </label>
      <input
        id="searchName"
        type="text"
        placeholder="yoga"
        onChange={(e) => setSearchname(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="searchDate" className={styles.label}>
        Date
      </label>
      <input
        id="searchDate"
        type="text"
        placeholder="2023/1/15"
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="searchCoach" className={styles.label}>
        Coach
      </label>
      <input
        id="searchCoach"
        type="text"
        placeholder="kex"
        onChange={(e) => setCoach(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="searchStart" className={styles.label}>
        Start Time
      </label>
      <input
        id="searchStart"
        type="text"
        placeholder="14:00"
        onChange={(e) => setStart(e.target.value)}
        className={styles.input}
      />

      <label htmlFor="searchEnd" className={styles.label}>
        End Time
      </label>
      <input
        id="searchEnd"
        type="text"
        placeholder="16:30"
        onChange={(e) => setEnd(e.target.value)}
        className={styles.input}
      />

      <div className={styles["btn-wrapper"]}>
        <Button
          btnColor="plain"
          className={styles["submit-btn"]}
          onClick={(event) => {
            event.preventDefault();
            setShowFilter(false);
          }}
        >
          Cancel
        </Button>

        <Button btnColor="plain" className={styles["submit-btn"]}>
          Filter
        </Button>
      </div>
    </form>
  ) : (
    <div className={styles["btn-wrapper"]}>
      <Button
        btnColor="plain"
        className={styles["submit-btn"]}
        onClick={(event) => {
          event.preventDefault();
          setShowFilter(true);
        }}
      >
        Show Filter Options
      </Button>
    </div>
  );

  return (
    <>
      <Wrapper className={styles.header}>
        <Title className="studio-title">{name}</Title>
        <Link to={"/"} className={styles.home}>
          Home
        </Link>
      </Wrapper>
      <ImageSlider ImageData={ImageData} />
      <Wrapper>
        <Title className="section">Details</Title>
        <StudioDetails
          data={{ user_lat, user_long, phone, address, urlDest, postal }}
        ></StudioDetails>
        <Title className="section">Ammenities</Title>
        <AmenityGrid amenities={amenities}></AmenityGrid>
        <Title className="section">Classes</Title>
        {filterForm}
        {/* <button onClick={restoreHandler}>reset search</button> */}
        <ClassesList ClassesData={classes} id={id} />
      </Wrapper>
    </>
  );
};

export default StudioPage;
