import { useState } from "react";
import Button from "../UI/Button";

import styles from "./LocationInput.module.css";

const LocationInput = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const options = (
    <div>
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Studio name (e.g. Athletic Center, 9Round)"
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Amenities (e.g. Personal Training, Pool)"
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Classes (e.g. Yoga, Karate)"
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Coaches (e.g. Kevin Hart, Kex Zhang)"
      />
      <div className={styles["options-wrapper"]}>
        <Button
          className={styles["btn-hide-options"]}
          btnColor="plain"
          type="button"
          onClick={() => setShowOptions(false)}
        >
          Hide Filter Options
        </Button>
      </div>
    </div>
  );

  return (
    <form onSubmit={props.submitHandler} className={styles.form}>
      <div className={styles.search}>
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
      </div>
      {showOptions ? (
        options
      ) : (
        <div className={styles["options-wrapper"]}>
          <Button
            className={styles["btn-show-options"]}
            btnColor="plain"
            type="button"
            onClick={() => setShowOptions(true)}
          >
            Show More Filter Options
          </Button>
        </div>
      )}
    </form>
  );
};

export default LocationInput;