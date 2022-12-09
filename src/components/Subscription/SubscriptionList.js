import SubscriptionItem from "./SubscriptionItem";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Layout/Card";
import styles from "./SubscriptionList.module.css";
//import styles from ".SubscriptionItem.module.css";

const SubscriptionList = (props) => {
    const [subscription, setSubscription] = useState([]);
  
    useEffect(() => {
      const config = {
        headers: {
          Authorization: localStorage.getItem("SavedToken")
        },
        // mode: 'no-cors',
      };
  
      if (config.headers.Authorization) {
        // get subscription data
        axios      
            .get(`${process.env.REACT_APP_BACKEND_URL}subscriptions/`, config)
            .then((res) => {
            // console.log(res.data);
            setSubscription(res.data);
            });
        }
    });
  
    const config = {
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
      },
    //   mode: 'no-cors',
    };

    const msg = config.headers.Authorization ? (
        <h2 className={styles.alert}>No subscriptions available, check back later!</h2>
      ):
      <h2 className={styles.alert}>You are not logged in</h2>
      ;
    
      const subscriptionItems =
      subscription.length === 0
          ? msg
          : subscription.map((subscription_obj) => {
              return (
                <SubscriptionItem
                  data={subscription_obj}
                />
              );
            });
      return (
        <>
          <div className={styles["header"]}>
            <h2 className={styles["header-title"]}>Subscription Name</h2>
            <h2 className={styles["header-title"]}>Price</h2>
            <h2 className={styles["header-title"]}>Type (M or Y)</h2>
          </div>
          <Card>{subscriptionItems}</Card>
        </>
      );
};
export default SubscriptionList;