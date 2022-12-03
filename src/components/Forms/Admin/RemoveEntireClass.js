import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";

import Card from "../../Layout/Card";

const RemoveEntireClass = () => {
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

        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Remove Class
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default RemoveEntireClass;
