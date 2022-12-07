import { useEffect, useState } from "react";
import styles from "./MySubscriptionDisplay.module.css";

import axios from "axios";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const MySubscriptionDisplay = () => {
  const [subData, setSubData] = useState({});

  const token = localStorage.getItem("SavedToken");

  const config = {
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions/me/`, config)
        .then((res) => {
          console.log(res.data);
          setSubData(res.data);
        });
    }
  }, []);

  const unsubscribeHandler = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}subscriptions/unsubscribe/`,
        {
          // mode: "no-cors",
        },
        config
      )
      .then((res) => {
        setSubData({});
        console.log(res.data);
      });
  };

  const subscription =
    Object.keys(subData).length === 0 ? (
      <h2 className={styles.error}>You do not have an active subscription!</h2>
    ) : (
      <>
        <h2 className={styles.title}>{subData.name}</h2>
        <div className={styles["content-wrapper"]}>
          <div>
            <p className={styles.text}>
              <span className={styles.highlight}>Price:</span> ${subData.amount}
            </p>
            <p className={styles.text}>
              <span className={styles.highlight}>Type: </span>
              {subData.type == "M" ? "Montly" : "Yearly"}
            </p>
          </div>
          <Button
            btnColor="plain"
            className={styles.btn}
            onClick={unsubscribeHandler}
          >
            Unsubscribe
          </Button>
        </div>
      </>
    );

  return <Card className={styles.wrapper}>{subscription}</Card>;
};

export default MySubscriptionDisplay;
