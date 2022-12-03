import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";

import Card from "../../Layout/Card";

const AddClass = () => {
  return (
    <Card>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="id">
          Id
        </label>
        <input
          id="id"
          className={styles.input}
          type="number"
          placeholder="studio id"
          min="0"
        />

        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          placeholder="class name"
        />

        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className={`${styles.input} ${styles["text-box"]}`}
          type="text"
          rows="4"
          columns="2"
          placeholder="class description"
        />

        <label className={styles.label} htmlFor="coach">
          Coach
        </label>
        <input
          id="coach"
          className={styles.input}
          type="text"
          placeholder="coach name"
        />

        <label className={styles.label} htmlFor="capacity">
          Capacity
        </label>
        <input
          id="capacity"
          className={styles.input}
          type="number"
          min="0.00"
          placeholder="maximum capacity"
        />

        <label className={styles.label} htmlFor="keywords">
          Keywords
        </label>
        <input
          id="keywords"
          className={styles.input}
          type="text"
          placeholder="keywords (e.g. squats, barbell, leg)"
        />

        <label className={styles.label} htmlFor="day">
          Weekday
        </label>
        <input
          id="day"
          className={styles.input}
          type="text"
          placeholder="weekday (e.g. monday or sunday)"
        />

        <label className={styles.label} htmlFor="time">
          Time
        </label>
        <input id="time" className={styles.input} type="time" />

        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Add Class to Studio
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddClass;
