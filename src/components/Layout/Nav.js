import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();
  const paths = ["/", "/subscription/", "/me/"];
  const [page, setPage] = useState(paths.indexOf(location.pathname));

  const token = localStorage.getItem("SavedToken");

  const user = token ? (
    <div className={styles["logout-wrapper"]}>
      <Link
        to="/"
        onClick={() => {
          setPage(3);
          localStorage.removeItem("SavedToken");
        }}
        className={`${styles.link} ${styles.logout}`}
      >
        Logout
      </Link>
    </div>
  ) : (
    <div className={styles.profile}>
      <Link
        to="/signup/"
        onClick={() => setPage(3)}
        className={`${styles.link} ${page === 3 ? styles.selected : ""}`}
      >
        Signup
      </Link>
      <Link
        to="/login/"
        onClick={() => setPage(4)}
        className={`${styles.link} ${page === 4 ? styles.selected : ""}`}
      >
        Signin
      </Link>
    </div>
  );

  return (
    <>
      <nav className={styles.nav}>
        <p className={styles.logo}>Toronto Fitness Club</p>

        <div className={styles.main}>
          <Link
            to="/"
            onClick={() => setPage(0)}
            className={`${styles.link} ${page === 0 ? styles.selected : ""}`}
          >
            Home
          </Link>
          <Link
            to="/subscription/"
            onClick={() => setPage(1)}
            className={`${styles.link} ${page === 1 ? styles.selected : ""}`}
          >
            Subscriptions
          </Link>
          <Link
            to="/me/"
            onClick={() => setPage(2)}
            className={`${styles.link} ${page === 2 ? styles.selected : ""}`}
          >
            Me
          </Link>
        </div>

        {user}
        {/* <Link
          to="/admin/"
          onClick={() => setPage(5)}
          className={`${styles.link} ${page === 5 ? styles.selected : ""}`}
        >
          Admin
        </Link> */}
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
