import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";
import axios from "axios";

import Card from "../../Layout/Card";
import { useState } from "react";

const AddClass = () => {

  const [studio_id, setStudio_id] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [coach, setCoach] = useState();
  const [capacity, setCapacity] = useState();
  const [keywords, setKeywords] = useState();
  const [weekday, setWeekday] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [end_date, setEnddate] = useState();
    
  const submitClass = (e) => {

    e.preventDefault();

    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzEyNzAyLCJpYXQiOjE2NzAzMDkxMDIsImp0aSI6ImNmNzQxMzUwZmQ5MjQxMDNiMDlmZGFiM2Y4MTIwZTlhIiwidXNlcl9pZCI6MX0._6tuWa8gg26r6dzypSoQDhM37Y9h2FfkH5fNqeQuXUg"
    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    const start_raw = start.split(":");
    const start_dict = {"hour": parseInt(start_raw[0]), "minute": parseInt(start_raw[1])};

    const end_raw = end.split(":");
    const end_dict = {"hour": parseInt(end_raw[0]), "minute": parseInt(end_raw[1])};

    const end_date_raw = end_date.split("/");
    const end_date_dict = {"year": parseInt(end_date_raw[0]), "month": parseInt(end_date_raw[1]), "day": parseInt(end_date_raw[2])}

    const class_data = {
    'name': name,
    'description': description,
    'coach': coach,
    'capacity': capacity*1,
    'keywords': keywords.split(","),
    'weekday': weekday, 
    "start_time": start_dict, 
    "end_time": end_dict,
    "end_date": end_date_dict
  }

    // console.log(class_data)
    // console.log(class_data)

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/${studio_id}/createclass/`,
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
      <form className={styles.form} onSubmit={submitClass}>
        <label className={styles.label} htmlFor="id">
          Id
        </label>
        <input
          id="id"
          className={styles.input}
          type="number"
          placeholder="studio id"
          min="0"
          onChange={(e) => setStudio_id(e.target.value)}
        />

        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          placeholder="class name"
          onChange={(e) => setName(e.target.value)}
        />

        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className={`${styles.input} ${styles["text-box"]}`}
          type="text"
          rows="4"
          columns="2"
          placeholder="class description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className={styles.label} htmlFor="coach">
          Coach
        </label>
        <input
          id="coach"
          className={styles.input}
          type="text"
          placeholder="coach name"
          onChange={(e) => setCoach(e.target.value)}
        />

        <label className={styles.label} htmlFor="capacity">
          Capacity
        </label>
        <input
          id="capacity"
          className={styles.input}
          type="number"
          min="0.00"
          placeholder="maximum capacity"
          onChange={(e) => setCapacity(e.target.value)}
        />

        <label className={styles.label} htmlFor="keywords">
          Keywords
        </label>
        <input
          id="keywords"
          className={styles.input}
          type="text"
          placeholder="keywords (e.g. squats, barbell, leg)"
          onChange={(e) => setKeywords(e.target.value)}
        />

        <label className={styles.label} htmlFor="day">
          Weekday
        </label>
        <input
          id="day"
          className={styles.input}
          type="text"
          placeholder="weekday (e.g. monday or sunday)"
          onChange={(e) => setWeekday(e.target.value)}
        />

        <label className={styles.label} htmlFor="start_time">
          Start Time
        </label>
        <input
          id="start_time"
          className={styles.input}
          type="time"
          onChange={(e) => setStart(e.target.value)}
        />

        <label className={styles.label} htmlFor="end_time">
          End Time
        </label>
        <input
         id="end_time"
         className={styles.input}
         type="time"
         onChange={(e) => setEnd(e.target.value)} 
        />
        
        <label className={styles.label} htmlFor="end_date">
          End Date
        </label>
        <input
         id="end_time"
         className={styles.input}
         placeholder="2000/1/15"
         type="text"
         onChange={(e) => setEnddate(e.target.value)} 
        />

        <div className={styles["btn-wrapper"]}>
          <Button btnColor="plain" className={styles["submit-btn"]}>
            Add Class to Studio
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddClass;
