import { createSearchParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import styles from "./StudioItem.module.css";

const StudioItem = (props) => {
  const { name, address, distance, directions, id } = props.data;

  const navigate = useNavigate();

  const toStudio = () => {
    // navigate(`/studio/${id}/`, {
    //   id: id,
    // });
    navigate({
      pathname: `/studio/${id}/`,
      search: createSearchParams({
        user_lat: props.data.user_lat,
        user_long: props.data.user_long,
      }).toString(),
    });
  };

  return (
    <div className={styles["studio-wrapper"]}>
      <h2 className={styles["studio-name"]}>{name}</h2>
      <p className={styles["studio-address"]}>{address}</p>
      <div className={styles["studio-other"]}>
        <p className={styles["studio-distance"]}>{distance} kilometers away</p>
        <div className={styles["studio-btn-wrapper"]}>
          <a
            href={directions}
            className={styles["btn-link"]}
            target="_blank"
            rel="noreferrer"
          >
            <Button className={styles["studio-btn"]} btnColor="plain">
              Directions
            </Button>
          </a>
          <Button
            className={styles["studio-btn"]}
            btnColor="plain"
            onClick={toStudio}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudioItem;
