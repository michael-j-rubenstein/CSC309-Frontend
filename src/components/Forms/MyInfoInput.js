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
    };
  };

  return (
    <form onSubmit={submitHandler} ref={form}>
      <label className={styles.label} htmlFor="fname">
        First Name
      </label>
      <input
        id="fname"
        className={styles.input}
        type="text"
        placeholder={props.data.fname}
      />

      <label className={styles.label} htmlFor="lname">
        Last Name
      </label>
      <input
        id="lname"
        className={styles.input}
        type="text"
        placeholder={props.data.lname}
      />

      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        className={styles.input}
        type="email"
        placeholder={props.data.email}
      />

      <label className={styles.label} htmlFor="phone">
        Phone Number
      </label>
      <input
        id="phone"
        className={styles.input}
        type="number"
        placeholder={props.data.phone}
        min="0"
      />

      <label className={styles.label} htmlFor="phone">
        Avatar
      </label>
      <div>
        <img
          alt=""
          className={`${selectedImage ? styles.img : styles["hide-img"]}`}
          src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
        ></img>
        <input
          id="phone"
          className={`${styles.input} ${styles["file-input"]}`}
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>

      {/* <label className={styles.label} htmlFor="password">
        Password
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
      /> */}

      <div className={styles["btn-wrapper"]}>
        <Button btnColor="plain" className={styles["submit-btn"]}>
          Update Information
        </Button>
      </div>
    </form>
  );
};

export default MyInfoInput;
