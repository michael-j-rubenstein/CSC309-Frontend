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
        onChange={(event) =>
          props.setFilterData({ ...props.filterData, name: event.target.value })
        }
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Amenities (e.g. Personal Training, Pool)"
        onChange={(event) => {
          props.setFilterData({
            ...props.filterData,
            amenities: event.target.value,
          });
        }}
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Classes (e.g. Yoga, Karate)"
        onChange={(event) => {
          props.setFilterData({
            ...props.filterData,
            classes: event.target.value,
          });
        }}
      />
      <input
        className={styles["input-long"]}
        type="text"
        placeholder="Coaches (e.g. Kevin Hart, Kex Zhang)"
        onChange={(event) => {
          props.setFilterData({
            ...props.filterData,
            coaches: event.target.value,
          });
        }}
      />
      <div className={styles["options-wrapper"]}>
        <Button
          className={styles["btn-hide-options"]}
          btnColor="plain"
          type="button"
          onClick={() => {
            setShowOptions(false);
            props.setFilterData({
              name: "",
              amenities: "",
              classes: "",
              coaches: "",
            });
          }}
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
          step="0.00001"
          ref={props.latRef}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Longitude"
          min="-180"
          max="180"
          step="0.00001"
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
            onClick={() => {
              setShowOptions(true);
            }}
          >
            Show More Filter Options
          </Button>
        </div>
      )}
    </form>
  );
};

export default LocationInput;
