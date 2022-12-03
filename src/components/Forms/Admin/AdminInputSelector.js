import { useState } from "react";
import styles from "./AdminInputSelector.module.css";

const AdminInputSelector = (props) => {
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
        <option value="subscription-add">Add a subscription</option>
        <option value="subscription-update">Update subscription</option>
        <option value="subscription-remove">Remove subscription</option>
        <option value="class-create">Create new class</option>
        <option value="class-remove-one">Remove one class</option>
        <option value="class-remove-all">Remove entire class</option>
      </select>
    </div>
  );
};

export default AdminInputSelector;
