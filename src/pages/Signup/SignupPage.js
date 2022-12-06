import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";
import React, { useState } from "react";
import axios from "axios";
// TO DO: Adding avatar image to sign up page

const SignupPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const SignupPage = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}accounts/signup/`,
        {
          username: username,
          password: password,
          password2: password2,
          email: email,
          first_name: first_name,
          last_name: last_name,
          phone_number: phone_number,
          mode: "no-cors",
        },
        {}
      )
      .then((res) => console.log(res.data));
  };
  return (
    <form className={styles.form} onSubmit={SignupPage}>
      <div className={styles["form-content"]}>
        <h1 className={styles["form-title"]}>Please sign up</h1>

        <div className={styles["form-input-group"]}>
          <div className={styles["input-group"]}>
            <label className={styles["form-label"]} htmlFor="fname">
              First Name
            </label>
            <input
              type="text"
              autoFocus
              className={styles["form-input"]}
              id="fname"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>

          <div className={styles["input-group"]}>
            <label className={styles["form-label"]} htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              className={styles["form-input"]}
              id="lastname"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>

        <label className={styles["form-label"]} htmlFor="username">
          Username
        </label>
        <input
          type="username"
          className={styles["form-input"]}
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>

        <label className={styles["form-label"]} htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          className={styles["form-input"]}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label className={styles["form-label"]} htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          className={styles["form-input"]}
          id="phone"
          pattern="[0-9]{10}"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>

        <label className={styles["form-label"]} htmlFor="password1">
          Password
        </label>
        <input
          type="password"
          className={styles["form-input"]}
          id="password1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <label className={styles["form-label"]} htmlFor="password2">
          Confirm Password
        </label>
        <input
          type="password"
          className={styles["form-input"]}
          id="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        ></input>

        <label className={styles["file-label"]} htmlFor="avatar">
          Avatar
        </label>
        <input
          type="file"
          className={styles["file-input"]}
          id="avatar"
          // value={avatar} onChange={(e) => setAvatar(e.target.value)}
        ></input>

        <Link to="/login/" className={styles["form-redirect"]}>
          Already have an account?
        </Link>
        <button className={styles["form-btn"]}>Sign up</button>
        <p className={styles["copyright-tag"]}>
          Copyright Toronto Fitness Club &copy; 2022
        </p>
      </div>
    </form>
  );
};

export default SignupPage;
