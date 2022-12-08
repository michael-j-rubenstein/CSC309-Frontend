import Button from "../UI/Button";
import styles from "./ClassItem.module.css";

// name, start_time, end_time, date

const ClassItem = (props) => {
  const { data } = props;

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
          onClick={(event) => props.skipHandler(data)}
        >
          Skip Class
        </Button>
        <Button
          className={styles.btn}
          btnColor="plain"
          onClick={(event) => props.quitHandler(data)}
        >
          Quit Class
        </Button>
      </div>
    </div>
  );
};

export default ClassItem;
