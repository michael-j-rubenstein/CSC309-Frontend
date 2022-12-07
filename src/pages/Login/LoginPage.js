import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import axios from "axios";
import React, { useState, useRef } from "react";


const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();

  const navigate = useNavigate();

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
        localStorage.setItem("SavedToken", "Bearer " + token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        navigate("/");
      })
      .catch(function (err, values) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        }
        else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } 
        else if (err.response?.status === 401) {
          setErrMsg('Unauthorized: Username and/or Password is Incorrect');
        } 
        else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      });
  };
  return (
    <>
      <div className={styles["nav"]}>
        <p className={styles["nav-title"]}>Toronto Fitness Club</p>
        <Link to="/" className={styles["nav-back"]}>
          Back to Home
        </Link>
      </div>
      <form className={styles.form} onSubmit={LoginPage}>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className={styles["form-content"]}>
          <h1 className={styles["form-title"]}>Please sign in</h1>
          <input
            type="username"
            placeholder="Username"
            autoFocus
            className={styles["form-input"]}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className={styles["form-input"]}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Link to="/signup/" className={styles["form-redirect"]}>
            Don't have an account?
          </Link>

          <button 
          className={styles["form-btn"]}>Sign in</button>
          <p className={styles["copyright-tag"]}>
            Copyright Toronto Fitness Club &copy; 2022
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
