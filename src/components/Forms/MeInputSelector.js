import styles from "./MeInputSelector.module.css";

const MeInputSelector = (props) => {
  return (
    <div className={styles.selector}>
      <label className={styles["selector-label"]} htmlFor="form-selector">
        Pick an Option:
      </label>
      <select
        className={styles["selector-select"]}
        id="form-selector"
        onChange={props.selectHandler}
      >
        <option value="profile">My Profile</option>
        <option value="edit">Update Profile</option>
        <option value="subscriptions">My Subscription</option>
      </select>
    </div>
  );
};

export default MeInputSelector;
