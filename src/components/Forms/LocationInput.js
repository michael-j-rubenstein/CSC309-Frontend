import { useRef } from "react";
import Button from "../UI/Button";

import Input from "./Input";
import styles from "./LocationInput.module.css";

const LocationInput = (props) => {
  return (
    <form onSubmit={props.submitHandler} className={styles.form}>
      <input
        className={styles.input}
        type="number"
        placeholder="Latitude"
        min="-90"
        max="90"
        ref={props.latRef}
      />
      <input
        className={styles.input}
        type="number"
        placeholder="Longitude"
        min="-180"
        max="180"
        ref={props.longRef}
      />

      <Button className={styles["btn-bigger"]} btnColor="primary">
        Search
      </Button>
    </form>
  );
};

export default LocationInput;
