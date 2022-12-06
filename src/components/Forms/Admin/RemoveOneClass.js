import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";
import axios from "axios";

import Card from "../../Layout/Card";
import { useState } from "react";

const RemoveOneClass = () => {
  const [classname, setClassname] = useState();
  const [date, setDate] = useState(); 

  const deleteClass = (e) => {

    e.preventDefault()

    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzEyNzAyLCJpYXQiOjE2NzAzMDkxMDIsImp0aSI6ImNmNzQxMzUwZmQ5MjQxMDNiMDlmZGFiM2Y4MTIwZTlhIiwidXNlcl9pZCI6MX0._6tuWa8gg26r6dzypSoQDhM37Y9h2FfkH5fNqeQuXUg"
    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    const date_raw = date.split("-");
    const date_dict = {"year": parseInt(date_raw[0]), "month": parseInt(date_raw[1]), "day": parseInt(date_raw[2])}
  
    const class_data = {
    'classname': classname,
    'date': date_dict
    }

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/removeclass/`,
        {
          body: class_data,
          mode: "no-cors",
        },
        config
      )
      .then((res) => {
        alert(res.data)
      });

  };

  return (
    <Card>
      <form className={styles.form} onSubmit={deleteClass}>
        <label className={styles.label} htmlFor="classname">
          Classname
        </label>
        <input
          id="classname"
          className={styles.input}
          type="text"
          placeholder="class name"
          onChange={(e) => setClassname(e.target.value)}
        />

        <label className={styles.label} htmlFor="date">
          Date
        </label>
        <input 
          id="date" 
          className={styles.input} 
          type="date" 
          onChange={(e) => setDate(e.target.value)}
        />


        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Remove Class Instance
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default RemoveOneClass;
