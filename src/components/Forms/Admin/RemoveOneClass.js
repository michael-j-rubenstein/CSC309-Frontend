import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";

import Card from "../../Layout/Card";

const RemoveOneClass = () => {
  return (
    <Card>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          placeholder="class name"
        />

        <label className={styles.label} htmlFor="date">
          Date
        </label>
        <input id="date" className={styles.input} type="date" />

        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Remove Class Instance
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default RemoveOneClass;
