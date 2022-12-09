import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./StudioDetails.module.css";

const StudioDetails = (props) => {
  console.log(props.data);

  const url =
    "http://maps.google.com/maps/dir/" +
    props.data.user_lat +
    ",+" +
    props.data.user_long +
    "/" +
    props.data.urlDest;

  console.log(url);

  return (
    <div>
      <p className={styles.address}>
        {props.data.address} {props.data.postal}
      </p>
      <p className={styles.phone}>{props.data.phone}</p>
      <div className={styles["btn-wrapper"]}>
        <Link to="/subscription/">
          <Button btnColor="primary">Join now</Button>
        </Link>
        <a href={url} target="_blank" rel="noreferrer">
          <Button btnColor="primary" className={styles.inverted}>
            Get directions
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StudioDetails;
