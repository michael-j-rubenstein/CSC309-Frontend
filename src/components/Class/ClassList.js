import styles from "./ClassList.module.css";

import Card from "../Layout/Card";
import ClassItem from "./ClassItem";

const ClassList = (props) => {
  return (
    <>
      <div className={styles["header"]}>
        <h2 className={styles["header-title"]}>Class Name</h2>
        <h2 className={styles["header-title"]}>Time</h2>
        <h2 className={styles["header-title"]}>Date</h2>
      </div>
      <Card>
        <ClassItem
          data={{
            name: "intro to gym stuff",
            start_time: "10:30:00",
            end_time: "11:30:00",
            date: "2022-12-08",
          }}
        ></ClassItem>
        <ClassItem
          data={{
            name: "class 1",
            start_time: "10:30:00",
            end_time: "11:30:00",
            date: "2022-12-08",
          }}
        ></ClassItem>
      </Card>
    </>
  );
};

export default ClassList;
