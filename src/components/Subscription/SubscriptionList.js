import SubscriptionItem from "./SubscriptionItem";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Layout/Card";
import styles from "./SubscriptionList.module.css";
//import styles from ".SubscriptionItem.module.css";

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

const SubscriptionList = (props) => {
  const [subscription, setSubscription] = useState([]);
  const [userHasSubscription, setUserHasSubscription] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
      },
      // mode: 'no-cors',
    };

    // get subscription data
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions/`, config)
      .then((res) => {
        setSubscription(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (config.headers.Authorization) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions/me/`, config)
        .then((res) => {
          if (Object.keys(res.data).length === 0) setUserHasSubscription(false);
        });
    }
  }, []);

  const config = {
    headers: {
      Authorization: localStorage.getItem("SavedToken"),
    },
    //   mode: 'no-cors',
  };

  const msg = config.headers.Authorization ? (
    <h2 className={styles.alert}>
      No subscriptions available, check back later!
    </h2>
  ) : (
    <h2 className={styles.alert}>You are not logged in</h2>
  );
  const subscriptionItems =
    subscription.length === 0
      ? msg
      : subscription.map((subscription_obj) => {
          return (
            <SubscriptionItem
              key={subscription_obj.id}
              data={subscription_obj}
              hasSub={userHasSubscription}
            />
          );
        });
  return (
    <>
      {!localStorage.getItem("SavedToken") ? (
        <h2 className={styles.msg}>
          Please login to subscribe to subscriptions
        </h2>
      ) : userHasSubscription ? (
        <h2 className={styles.msg}>
          You already have an ongoing subscription, please come back when the
          subscription ends
        </h2>
      ) : (
        ""
      )}
      <div className={styles["header"]}>
        <h2 className={styles["header-title"]}>Subscription Name</h2>
        <h2 className={styles["header-title"]}>Price</h2>
        <h2 className={styles["header-title"]}>Type</h2>
      </div>
      <Card>{subscriptionItems}</Card>
    </>
  );
};
export default SubscriptionList;
