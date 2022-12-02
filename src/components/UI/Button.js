import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${styles[props.btnColor]} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
