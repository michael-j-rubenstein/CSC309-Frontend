import styles from "./ClassList.module.css";

import axios from "axios";

import Card from "../Layout/Card";
import ClassItem from "./ClassItem";
import { useEffect, useState } from "react";

const ClassList = (props) => {
  const [classes, setClasses] = useState([]);
  const [toggler, setToggler] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
      },
    };

    if (config.headers.Authorization) {
      // get classes data
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}classes/schedule/`, config)
        .then((res) => {
          // console.log(res.data);
          setClasses(res.data);
        });
    }
  }, [toggler]);

  const config = {
    headers: {
      Authorization: localStorage.getItem("SavedToken"),
    },
  };

  // skip one class
  const skipHandler = (data) => {
    const date = data.date.split("-");
    const req = {
      classname: data.name,
      date: { year: date[0] * 1, month: date[1] * 1, day: date[2] * 1 },
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/deleteclass/`,
        req,
        config
      )
      .then((res) => {
        // console.log(res.data);
        setToggler(!toggler);
        // console.log(toggler);
      });
  };

  // quit entire class
  const quitHandler = (data) => {
    // console.log("removing classes");
    const req = {
      classname: data.name,
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/deleteclasses/`,
        req,
        config
      )
      .then((res) => {
        // console.log(res.data);
        setToggler(!toggler);
        // console.log(toggler);
      });
  };

  const msg = config.headers.Authorization ? (
    <h2 className={styles.alert}>You are not enrolled in any classes!</h2>
  ) : (
    <h2 className={styles.alert}>Please sign in to see your classes!</h2>
  );

  const classItems =
    classes.length === 0
      ? msg
      : classes.map((class_obj) => {
          return (
            <ClassItem
              key={class_obj.name + class_obj.date}
              data={class_obj}
              skipHandler={skipHandler}
              quitHandler={quitHandler}
            />
          );
        });
  return (
    <>
      <div className={styles["header"]}>
        <h2 className={styles["header-title"]}>Class Name</h2>
        <h2 className={styles["header-title"]}>Time</h2>
        <h2 className={styles["header-title"]}>Date</h2>
        <h2 className={styles["header-title"]}>Options</h2>
      </div>
      <Card>{classItems}</Card>
    </>
  );
};

export default ClassList;
