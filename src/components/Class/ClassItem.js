import Button from "../UI/Button";
import styles from "./ClassItem.module.css";

import axios from "axios";

// name, start_time, end_time, date

const ClassItem = (props) => {
  const { data } = props;

  console.log(data);
  var bearer =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMjk1OTYxLCJpYXQiOjE2NzAyOTIzNjEsImp0aSI6IjJjYzllOGFiMjVhNzQxZmJhMjY4MDYwZDk5NjBjZmRjIiwidXNlcl9pZCI6Nn0.71-wssNRtpuTU6hd-tiI-JuoCE77970xVbHXQKa4ZNE";

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
