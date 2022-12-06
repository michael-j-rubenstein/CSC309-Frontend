import Button from "../UI/Button";
import styles from "./ClassItem.module.css";

import axios from "axios";

// name, start_time, end_time, date

const ClassItem = (props) => {
  const { data } = props;

  console.log(data);
  var bearer = localStorage.getItem("SavedToken");

  const config = {
    headers: {
      Authorization: `${bearer}`,
    },
  };

  return (
    <div className={styles.item}>
      <h3 className={styles["title"]}>{data.name}</h3>
      <div className={styles["time-wrapper"]}>
        <p className={styles.time}>{data.start_time}</p>
        <p className={styles.time}>{data.end_time}</p>
      </div>
      <p className={styles.date}>{data.date}</p>
      <div className={styles.btns}>
        <Button
          className={styles.btn}
          btnColor="plain"
          onClick={props.skipHandler(data)}
        >
          Skip Class
        </Button>
        <Button
          className={styles.btn}
          btnColor="plain"
          onClick={props.quitHandler(data)}
        >
          Quit Class
        </Button>
      </div>
    </div>
  );
};

export default ClassItem;
