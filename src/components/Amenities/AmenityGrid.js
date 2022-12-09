import AmenityItem from "./AmenityItem";

import styles from "./AmenityGrid.module.css";

const AmenityGrid = (props) => {
  const amenities =
    props.amenities.length !== 0 ? (
      props.amenities
        .sort((amenity1, amenity2) =>
          amenity1.name.length < amenity2.name.length ? 1 : -1
        )
        .map((amenityData) => (
          <AmenityItem key={amenityData.name} data={amenityData}></AmenityItem>
        ))
    ) : (
      <h2 className={styles.msg}>This studio does not have any amenities</h2>
    );

  return (
    <div
      className={
        props.amenities.length !== 0 ? styles["three-col"] : styles["one-col"]
      }
    >
      {amenities}
    </div>
  );
};

export default AmenityGrid;
