import React from 'react'
import Button from "../UI/Button";
import styles from "./ClassesItem.module.css";

import axios from "axios";
import { json } from 'react-router-dom';

const ClassesItem = (ClassData) => {
    const data = ClassData.ClassData;
    const name = data["classname"];
    const description = data["description"];
    const coach = data["coach"];
    const weekday = data["weekday"];
    const keywords = data["keywords"];
    const start = data["start"];
    const end = data["end"];
    const id = ClassData.id;
    const enrollHandler = (e) =>{
        var token = localStorage.getItem("SavedToken");
        axios.post(`${process.env.REACT_APP_BACKEND_URL}classes/${id}/enrollclass/`, { headers:
            {
                Authorization: `${token}}`
            },

            data: {"classname": name}

            })
        .then(response => {
            alert("Enrolled Successfully!")
        }
        )
        .catch(err =>{
            alert("Enrollment failed! Login as a subscribed user first!")
        })
    }

    const keywordItems = keywords.map((key) => 
        <li>{key}</li>
    )

    return (
        <div>
            <div className={styles["item"]}>
                <h3 className={styles["title"]}>{name}</h3>
                <div className={styles["time-wrapper"]}>
                    <p className={styles["time"]}>{start}</p>
                    <p className={styles["time"]}>{end}</p>
                    <p className={styles["text"]}>{weekday}</p>
                </div>
            </div>
            <div>
                <p className={styles.text}>About the class: {description}</p>
                <p className={styles.text}>Coach: {coach}</p>
                <ul className={styles.text}>Keywords: {keywordItems}</ul> 
                <Button
                className={styles.btn}
                btnColor="plain"
                onClick={enrollHandler}
                >
                    Enroll
                </Button>
            </div>
        </div>
  );
};


export default ClassesItem