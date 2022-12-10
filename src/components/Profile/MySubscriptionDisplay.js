import { useEffect, useState } from "react";
import styles from "./MySubscriptionDisplay.module.css";

import axios from "axios";
import Card from "../Layout/Card";
import Button from "../UI/Button";

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const MySubscriptionDisplay = () => {
  const [subData, setSubData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
      },
    };
    if (config.headers.Authorization) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions/me/`, config)
        .then((res) => {
          var start_date = new Date(res.data.period_start * 1000);
          var start_date_str =
            months[start_date.getMonth()] +
            " " +
            start_date.getDate() +
            " " +
            start_date.getFullYear();

          var end_date = new Date(res.data.period_end * 1000);
          var end_date_str =
            months[end_date.getMonth()] +
            " " +
            end_date.getDate() +
            " " +
            end_date.getFullYear();

          // console.log(res.data);
          setSubData({
            ...res.data,
            period_start: start_date_str,
            period_end: end_date_str,
          });
        });
    }
  }, []);

  const config = {
    headers: {
      Authorization: localStorage.getItem("SavedToken"),
    },
  };

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
        setSubData({ ...subData, active: false });
        console.log(res.data);
      });
  };

  const updateCardHandler = (event) => {
    event.preventDefault();
    const data = {
      number: event.target[0].value,
      exp_month: event.target[1].value,
      exp_year: event.target[2].value,
      cvc: event.target[3].value,
    };

    if (!data.number) {
      setUpdateError("Card number cannot be left blank");
      return;
    }
    if (!data.exp_month) {
      setUpdateError("Card expiration month cannot be empty");
      return;
    }
    if (!data.exp_year) {
      setUpdateError("Card expiration year cannot be empty");
      return;
    }
    if (!data.cvc) {
      setUpdateError("Card cvc cannot be empty");
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}subscriptions/update/payment/`,
        data,
        config
      )
      .then((res) => {
        if (Object.keys(res.data).includes("error")) {
          if (res.data.error.includes(":")) {
            const msg = res.data.error.split(":")[1];
            setUpdateError(msg);
          }
        } else {
          setShowForm(false);
          setUpdateError("");
          alert("Card was successfully updated!");
        }
      });
  };

  const showFormBtn = subData.active ? (
    <div className={styles["btn-wrapper"]}>
      <Button
        btnColor="plain"
        className={styles["btn-show"]}
        onClick={() => setShowForm(true)}
      >
        Show Form
      </Button>
    </div>
  ) : (
    <></>
  );

  const cardUpdate = (
    <Card>
      <h2 className={styles.title}>Update Payment Information</h2>

      <form onSubmit={updateCardHandler}>
        <label className={styles.label} htmlFor="cnum">
          Card Number
        </label>
        <input id="cnum" className={`${styles.input}`} type="number" />

        <label className={styles.label} htmlFor="exp_month">
          Expiration Month
        </label>
        <input
          id="exp_month"
          className={`${styles.input}`}
          type="number"
          min={1}
          max={12}
        />

        <label className={styles.label} htmlFor="exp_year">
          Expiration Year
        </label>
        <input id="exp_year" className={`${styles.input}`} type="number" />

        <label className={styles.label} htmlFor="cvc">
          Security Code (CVC)
        </label>
        <input id="cvc" className={`${styles.input}`} type="number" />

        {updateError ? (
          <p className={styles["update-error"]}>Error: {updateError}</p>
        ) : (
          ""
        )}

        <div className={styles["btn-wrapper"]}>
          <Button
            btnColor="plain"
            className={styles["submit-btn"]}
            onClick={(event) => {
              event.preventDefault();
              setShowForm(false);
            }}
          >
            Cancel
          </Button>

          <Button btnColor="plain" className={styles["submit-btn"]}>
            Update
          </Button>
        </div>
      </form>
    </Card>
  );

  const subscription =
    Object.keys(subData).length === 2 ? (
      <Card className={styles.wrapper}>
        <h2 className={styles.error}>
          You do not have an active subscription!
        </h2>
      </Card>
    ) : (
      <>
        <Card className={styles.wrapper}>
          <div className={styles["content-wrapper"]}>
            <h2 className={styles.title}>{subData.name}</h2>
            <div className={styles["time-wrapper"]}>
              <p className={styles.time}>{subData.period_start}</p>
              <p className={styles.time}>{subData.period_end}</p>
            </div>
          </div>
          <div className={styles["content-wrapper"]}>
            <div>
              <p className={styles.text}>
                <span className={styles.highlight}>Price:</span> $
                {subData.amount / 100}
              </p>
              <p className={styles.text}>
                <span className={styles.highlight}>Type: </span>
                {subData.type === "M" ? "Montly" : "Yearly"}
              </p>
            </div>
            {subData.active ? (
              <Button
                btnColor="plain"
                className={styles.btn}
                onClick={unsubscribeHandler}
              >
                Unsubscribe
              </Button>
            ) : (
              <p className={styles.notice}>Active till subscription end date</p>
            )}
          </div>
        </Card>
        {showForm ? cardUpdate : showFormBtn}
      </>
    );

  return <>{subscription}</>;
};

export default MySubscriptionDisplay;
