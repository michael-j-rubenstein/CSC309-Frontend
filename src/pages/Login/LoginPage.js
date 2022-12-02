import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <form className={styles.form}>
      <div className={styles["form-content"]}>
        <h1 className={styles["form-title"]}>Please sign in</h1>
        <input
          type="email"
          placeholder="Email address"
          autoFocus
          className={styles["form-input"]}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className={styles["form-input"]}
        ></input>
        <Link to="/signup/">Don't have an account?</Link>
        <button className={styles["form-btn"]}>Sign in</button>
        <p className={styles["copyright-tag"]}>Copyright &copy; 2022</p>
      </div>
    </form>
  );
};

export default LoginPage;
