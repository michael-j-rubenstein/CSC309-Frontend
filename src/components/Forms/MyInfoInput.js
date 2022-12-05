import Button from "../UI/Button";
import styles from "./MyInfoInput.module.css";

const MyInfoInput = (props) => {
  return (
    <form>
      <label className={styles.label} htmlFor="fname">
        First Name
      </label>
      <input
        id="fname"
        className={styles.input}
        type="text"
        placeholder={props.data.fname}
      />

      <label className={styles.label} htmlFor="lname">
        Last Name
      </label>
      <input
        id="lname"
        className={styles.input}
        type="text"
        placeholder={props.data.lname}
      />

      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={styles.input}
        type="email"
        placeholder={props.data.email}
      />

      <label className={styles.label} htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        className={styles.input}
        type="number"
        placeholder={props.data.phone}
        min="0"
      />
      <div className={styles["btn-wrapper"]}>
        <Button btnColor="plain" className={styles["submit-btn"]}>
          Update Information
        </Button>
      </div>
    </form>
  );
};

export default MyInfoInput;
