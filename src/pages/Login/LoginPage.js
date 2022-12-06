import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import axios from "axios";
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const LoginPage = (event) => {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}accounts/login/`,
        {
          username: username,
          password: password,
          mode: "no-cors",
        },
        {}
      )
      .then((res) => {
        console.log(res.data);
        let token = res.data.access;
        localStorage.setItem("SavedToken", 'Bearer ' + token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      });

  };
  return (
    <form className={styles.form} onSubmit={LoginPage}>
      <div className={styles["form-content"]}>
        <h1 className={styles["form-title"]}>Please sign in</h1>
        <input
          type="username"
          placeholder="Username"
          autoFocus
          className={styles["form-input"]}
          value={username} onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className={styles["form-input"]}
          value={password} onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/signup/" className={styles["form-redirect"]}>
          Don't have an account?
        </Link>
        <button className={styles["form-btn"]}>Sign in</button>
        <p className={styles["copyright-tag"]}>
          Copyright MKA Group &copy; 2022
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
