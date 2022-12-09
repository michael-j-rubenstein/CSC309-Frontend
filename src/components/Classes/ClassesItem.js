import React from "react";
import Button from "../UI/Button";
import styles from "./ClassesItem.module.css";

import axios from "axios";

const ClassesItem = (ClassData) => {
  const data = ClassData.ClassData;
  const name = data["classname"];
  const description = data["description"];
  const coach = data["coach"];
  const weekday = data["weekday"];
  const start = data["start"];
  const end = data["end"];
  const id = ClassData.c_id;
  const enrollHandler = (e) => {
    var token = localStorage.getItem("SavedToken");
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}classes/${id}/enrollclass/`, {
        headers: {
          Authorization: `${token}}`,
        },

        data: { classname: name },
      })
      .then((response) => {
        alert("Enrolled Successfully!");
      })
      .catch((err) => {
        console.log(err);
        console.log(token);
        alert("Enrollment failed! Login as a subscribed user first!");
      });
  };

  //   const keywordItems = keywords.map((key) => (
  //     <li className={styles["list-item"]}>{key}</li>
  //   ));

  return (
    <>
      <div className={styles["item"]}>
        <h3 className={styles["title"]}>{name}</h3>
      </div>
      <div>
        <div className={styles["datetime-wrapper"]}>
          <p className={styles["weekday"]}>{weekday}</p>
          <div className={styles["time-wrapper"]}>
            <p className={styles["time"]}>{start}</p>
            <p className={styles["time"]}>{end}</p>
          </div>
        </div>

        <div>
          <p className={`${styles["text-title"]} ${styles["newline"]}`}>
            Class Description:
          </p>
          <p className={styles.text}>{description}</p>
        </div>
        <p className={styles.text}>
          <span className={styles["text-title"]}>Coach:</span> {coach}
        </p>
        {/* <div>
          <p className={`${styles["text-title"]} ${styles["newline"]}`}>
            Key words:
          </p>
          <ul className={styles.list}>{keywordItems}</ul>
        </div> */}

        <div className={styles["btn-wrapper"]}>
          <Button
            className={styles.btn}
            btnColor="plain"
            onClick={enrollHandler}
          >
            Enroll
          </Button>
        </div>
      </div>
    </>
  );
};

export default ClassesItem;
