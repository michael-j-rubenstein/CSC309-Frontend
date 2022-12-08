import { useState, useRef } from "react";
import Button from "../UI/Button";
import styles from "./MyInfoInput.module.css";

const MyInfoInput = (props) => {
  const form = useRef();

  const [selectedImage, setSelectedImage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      fname: form.current[0].value,
      lname: form.current[1].value,
      email: form.current[2].value,
      phone: form.current[3].value,
      password1: form.current[4].value,
      password2: form.current[5].value,
      avatar: form.current[6].files[0],
    };

    console.log(data);

    // axios
    //   .put(
    //     `${process.env.REACT_APP_BACKEND_URL}classes/deleteclass/`,
    //     req,
    //     config
    //   )
    //   .then((res) => {
    //     // console.log(res.data);
    //     setToggler(!toggler);
    //     // console.log(toggler);
    //   });
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
