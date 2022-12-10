import Button from "../UI/Button";
import styles from "./SubscriptionItem.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
//import styles from "../../components/Class/ClassItem.module.css";

// name, start_time, end_time, date

const SubscriptionItem = (props) => {
  const { data, hasSub } = props;

  const SubscribeHandler = () => {
    if (localStorage.getItem("SavedToken")) {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}subscriptions/subscribe/${data.id}/`,
          {
            mode: "no-cors",
          },
          {
            headers: {
              Authorization: localStorage.getItem("SavedToken"),
            },
          }
        )
        .then((res) => {
          if (Object.keys(res.data).includes("sessionUrl"))
            window.open(res.data["sessionUrl"]);
          else
            alert(
              "Something went wrong! Please contact customer service if issue persists!"
            );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please sign in to subscribe to subscriptions!");
    }
  };

  return (
    <div className={styles.item}>
      <h5 className={styles["title1"]}>{data.name}</h5>
      <div>
        <h3 className={styles["title2"]}>
          ${data.amount} {`/ ${data.type}`}
        </h3>
      </div>
      <h3 className={styles["title2"]}>
        {data.type === "M" ? "Monthly" : "Annual"}
      </h3>

      <div className={styles.btns}>
        <Button
          className={`${styles.btn} ${hasSub ? styles.disabled : ""}`}
          btnColor="plain"
          onClick={() => SubscribeHandler()}
          disabled={hasSub}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionItem;
