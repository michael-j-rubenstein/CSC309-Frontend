import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";

import Card from "../../Layout/Card";

const DeleteSubscription = () => {
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
          placeholder="subscription id"
          min="0"
        />

        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Delete Subscription
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default DeleteSubscription;
