import styles from "./ClassList.module.css";

import axios from "axios";

import Card from "../Layout/Card";
import ClassItem from "./ClassItem";
import { useEffect, useState } from "react";

const ClassList = (props) => {
  const [classes, setClasses] = useState([]);
  const [toggler, setToggler] = useState(true);

  var bearer =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMjk1OTYxLCJpYXQiOjE2NzAyOTIzNjEsImp0aSI6IjJjYzllOGFiMjVhNzQxZmJhMjY4MDYwZDk5NjBjZmRjIiwidXNlcl9pZCI6Nn0.71-wssNRtpuTU6hd-tiI-JuoCE77970xVbHXQKa4ZNE";

  const config = {
    headers: {
      Authorization: `${bearer}`,
    },
  };

  useEffect(() => {
    // get classes data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}classes/schedule/`, config)
      .then((res) => {
        // console.log(res.data);
        setClasses(res.data);
      });
  }, []);

  // skip one class
  const skipHandler = (data) => {
    const date = data.date.split("-");
    const req = {
      classname: data.name,
      date: { year: date[0] * 1, month: date[1] * 1, day: date[2] * 1 },
    };

    console.log("req", req);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/deleteclass/`,
        req,
        config
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  // quit entire class
  const quitHandler = (data) => {
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
        console.log(res.data);
      });
  };

  const classItems =
    classes.length === 0 ? (
      <h2 className={styles.alert}>You are not enrolled in any classes!</h2>
    ) : (
      classes.map((class_obj) => {
        return (
          <ClassItem
            key={class_obj.name + class_obj.date}
            data={class_obj}
            skipHandler={skipHandler}
            quitHandler={quitHandler}
          />
        );
      })
    );
  return (
    <>
      <div className={styles["header"]}>
        <h2 className={styles["header-title"]}>Class Name</h2>
        <h2 className={styles["header-title"]}>Time</h2>
        <h2 className={styles["header-title"]}>Date</h2>
      </div>
      <Card>{classItems}</Card>
    </>
  );
};

export default ClassList;