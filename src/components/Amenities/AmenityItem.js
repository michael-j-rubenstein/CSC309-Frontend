import styles from "./AmenityItem.module.css";

const AmenityItem = (props) => {
  return (
    <div>
      <p className={styles.item}>
        {props.data.name}
        {props.data.quantity > 1 ? ` (x${props.data.quantity})` : ""}
      </p>
    </div>
  );
};

export default AmenityItem;
