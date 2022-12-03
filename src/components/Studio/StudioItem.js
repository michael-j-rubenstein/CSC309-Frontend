import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

import styles from "./StudioItem.module.css";

const StudioItem = (props) => {
  const { name, address, distance, directions } = props.data;

  const navigate = useNavigate();

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
          <Link>
            <Button className={styles["studio-btn"]} btnColor="plain">
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudioItem;
