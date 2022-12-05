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
    </div>
  );
};

export default ClassItem;
