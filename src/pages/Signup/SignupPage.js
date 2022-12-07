import { Link, useNavigate } from "react-router-dom";
import styles from "./SignupPage.module.css";
import React, { useState, useRef } from "react";
import axios from "axios";

const SignupPage = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const errRef = useRef();
  const navigate = useNavigate();

  const SignupPage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", selectedImage);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password2);
    formData.append("password2", password2);
    formData.append("phone_number", phone_number);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
      axios({
          method:"post",
          url:  `${process.env.REACT_APP_BACKEND_URL}accounts/signup/`,
          data: formData,
          mode: "no-cors",
          headers: { "Content-Type": "multipart/form-data" },
        },
        {}
      )
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch(function (err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        }
        else if (err.response?.status === 400) {
          setErrMsg('Please fill out all the fields');
        }  
        errRef.current.focus();
      });      
}
const handleFileSelect = (event) => {
  setSelectedImage(event.target.files[0])
}
  return (
    <form className={styles.form} onSubmit={SignupPage}>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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

        <label className={styles["form-label"]} htmlFor="avatar">
          Avatar
        </label>
        <div>
        <img
            alt=""
            className={`${selectedImage ? styles.img : styles["hide-img"]}`}
            src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
          ></img>
          <input
            className={styles["file-input"]}
            type="file" onChange={handleFileSelect}
          />
        </div>
        <Link to="/login/" className={styles["form-redirect"]}>
          Already have an account?
        </Link>
        <button 
        className={styles["form-btn"]}>Sign up</button>
        <p className={styles["copyright-tag"]}>
          Copyright Toronto Fitness Club &copy; 2022
        </p>
      </div>
    </form>
  );
};

export default SignupPage;
