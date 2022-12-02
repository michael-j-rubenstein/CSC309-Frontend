import styles from "./Tag.module.css";

const Tag = (props) => {
  return <div className={styles.tag}>{props.children}</div>;
};

export default Tag;
