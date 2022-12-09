import SubscriptionList from "../../components/Subscription/SubscriptionList";
import styles from "../../components/Subscription/SubscriptionItem.module.css";
import Wrapper from "../../components/Layout/Wrapper";
import Title from "../../components/Text/Title";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

const SubscriptionPage = () => {
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const success = searchParams.get("successful", "");
  const checkout_id = searchParams.get("session", "");

  useEffect(() => {
    // if we have these parameters
    if (success !== null && checkout_id !== null) {
      if (success === "true") {
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_URL}subscriptions/subscribe/success/${checkout_id}/`,
            {
              headers: {
                Authorization: localStorage.getItem("SavedToken"),
              },
            }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        alert("You have subscribed successfully!");
      } else {
        alert("Payment Cancelled");
      }
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Title className="section">Subscriptions</Title>
        <SubscriptionList />
      </Wrapper>
    </>
  );
};

export default SubscriptionPage;
