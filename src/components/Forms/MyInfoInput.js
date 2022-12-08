import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./MyInfoInput.module.css";

const MyInfoInput = (props) => {
  const form = useRef();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();

    if (form.current[0].value !== "")
      formData.append("first_name", form.current[0].value);

    if (form.current[1].value !== "")
      formData.append("last_name", form.current[1].value);

    if (form.current[2].value !== "")
      formData.append("email", form.current[2].value);

    if (form.current[3].value !== "")
      formData.append("phone_number", form.current[3].value);

    const password1 = form.current[4].value;
    const password2 = form.current[5].value;

    if (password1 !== "" && password1 === password2 && password1.length >= 8)
      formData.append("password", password1);

    if (selectedImage) formData.append("avatar", selectedImage);

    axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_URL}accounts/edit/`,
      data: formData,
      mode: "no-cors",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("SavedToken"),
      },
    }).then((res) => {
      alert("information updated successfully!");
    });
  };

  return (
    <form onSubmit={submitHandler} ref={form}>
      <label className={styles.label} htmlFor="fname">
        First Name
      </label>
      <input
        id="fname"
        className={`${styles.input} ${props.disabled ? styles.disabled : ""}`}
        type="text"
        placeholder={props.data.fname}
        disabled={props.disabled}
      />

      <label className={styles.label} htmlFor="lname">
        Last Name
      </label>
      <input
        id="lname"
        className={`${styles.input} ${props.disabled ? styles.disabled : ""}`}
        type="text"
        placeholder={props.data.lname}
        disabled={props.disabled}
      />

      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={`${styles.input} ${props.disabled ? styles.disabled : ""}`}
        type="email"
        placeholder={props.data.email}
        disabled={props.disabled}
      />

      <label className={styles.label} htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        className={`${styles.input} ${props.disabled ? styles.disabled : ""}`}
        type="number"
        placeholder={props.data.phone}
        min="0"
        disabled={props.disabled}
      />

      {!props.disabled ? (
        <>
          <label className={styles.label} htmlFor="password">
            Password (does not change if left blank)
          </label>
          <input
            id="password"
            className={styles.input}
            type="password"
            placeholder={"********"}
            autoComplete="on"
          />

          <label className={styles.label} htmlFor="password2">
            Confirm Password
          </label>
          <input
            id="password2"
            className={styles.input}
            type="password"
            placeholder={"********"}
            autoComplete="on"
          />
        </>
      ) : (
        <></>
      )}

      <label className={styles.label} htmlFor="avatar">
        Avatar
      </label>
      <div>
        <img
          alt=""
          className={`${
            selectedImage || props.data.avatar !== ""
              ? styles.img
              : styles["hide-img"]
          }`}
          srcSet={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : props.data.avatar
          }
        ></img>
        <input
          id="avatar"
          className={`${styles.input} ${styles["file-input"]} ${
            props.disabled ? styles["file-input-disabled"] : ""
          }`}
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
          disabled={props.disabled}
        />
      </div>

      {props.disabled ? (
        ""
      ) : (
        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Update Information
          </Button>
        </div>
      )}
    </form>
  );
};

export default MyInfoInput;
