import styles from "./Title.module.css";

const Title = (props) => {
  return (
    <h2 className={`${styles.title} ${styles[props.className]}`}>
      {props.children}
    </h2>
  );
};

export default Title;
