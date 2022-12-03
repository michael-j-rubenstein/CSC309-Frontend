import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";

import Card from "../../Layout/Card";

const AddSubscription = () => {
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
          placeholder="subscription name"
        />
        <label className={styles.label} htmlFor="price">
          Price
        </label>
        <input
          id="price"
          className={styles.input}
          type="number"
          min="0.00"
          placeholder="subscription price"
        />
        <label className={styles.label} htmlFor="type">
          Type
        </label>
        <input
          id="type"
          className={styles.input}
          type="text"
          placeholder="type (e.g. M or Y)"
          pattern="[M,Y]{1}"
        />
        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Add Subscription
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddSubscription;
