import styles from "./AdminFormStyles.module.css";
import Button from "../../UI/Button";
import axios from "axios";

import Card from "../../Layout/Card";
import { useState } from "react";

const RemoveOneClass = () => {
  const [classname, setClassname] = useState();

  const deleteClasses = (e) => {

    e.preventDefault()

    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMzE2NDYxLCJpYXQiOjE2NzAzMTI4NjEsImp0aSI6IjQ2OTAxMzhjMjkzMDQzOWNiODRlNTU1MjJlMGZhZGUxIiwidXNlcl9pZCI6MX0.lHdxi5vif081U_dujJATbkDembz7tPnQBAkcUPA9JBg"
    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };
  
    const class_data = {
    'name': classname,
    }

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}classes/removeclasses/`,
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
      <form className={styles.form} onSubmit={deleteClasses}>
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
