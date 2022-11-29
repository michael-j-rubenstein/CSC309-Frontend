import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = () => {
  const [page, setPage] = useState(0);

  const onClickHandler = () => {};

  return (
    <>
      <nav className={styles.nav}>
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
        <Link
          to="/admin/"
          onClick={() => setPage(5)}
          className={`${styles.link} ${page === 5 ? styles.selected : ""}`}
        >
          Admin
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
