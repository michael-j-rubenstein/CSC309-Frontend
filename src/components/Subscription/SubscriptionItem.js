import Button from "../UI/Button";
import styles from "./SubscriptionItem.module.css";
import {useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
//import styles from "../../components/Class/ClassItem.module.css";

// name, start_time, end_time, date

const SubscriptionItem = (props) => {
  const { data } = props;
  const [url, setURL] = useState('');
  const navigate = useNavigate();
//   console.log({data})
  const SubscribeHandler = (e) => {
    // e.preventDefault();
    // console.log(data.id);
    axios
    .post(
      `${process.env.REACT_APP_BACKEND_URL}subscriptions/subscribe/${data.id}/`,
      {
      headers: {
        Authorization: localStorage.getItem("SavedToken"),
      },
    }
    )
    .then((res) =>{
        setURL(res.data["sessionUrl"]);
        console.log(url);
        window.open(url);
    });
  }
  return (
    <div className={styles.item}>
      <h5 className={styles["title2"]}>{data.name}</h5>
      <div>
      <h3 className={styles["title2"]}>{data.amount}</h3>
      </div>
      <h3 className={styles["title2"]}>{data.type}</h3>
    
      <div className={styles.btns}>
        <Button
          className={styles.btn}
          btnColor="plain"
        onClick={SubscribeHandler}
        >
          Enroll
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionItem;
