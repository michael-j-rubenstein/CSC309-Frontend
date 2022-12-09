import React from "react";
import ClassesItem from "./ClassesItem";
import Card from "../Layout/Card";
import styles from "./ClassesList.module.css";
import Wrapper from "../Layout/Wrapper";

const ClassesList = (ClassesData) => {
  const classes = ClassesData.ClassesData;
  const id = ClassesData.id;

  if (classes === undefined) {
    return (
      <h2 className={styles.alert}>Currently no classes in this studio!</h2>
    );
  }
  const ClassItems = classes.map((class_obj, index) => (
    <Card key={class_obj.classname}>
      <ClassesItem ClassData={class_obj} c_id={id} />
    </Card>
  ));
  return <Wrapper className={styles.list}>{ClassItems} </Wrapper>;
};

export default ClassesList;
