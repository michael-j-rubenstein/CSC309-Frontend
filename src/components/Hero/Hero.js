import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <div className={styles.hero}>
        <h1 className={styles["hero__content"]}>
          <span className={styles["hero__small-content"]}>EVERYBODY CAN</span>{" "}
          <br /> BE THEIR PERFECT SELF
        </h1>
        <img
          src={require("../../images/boxing.jpg")}
          alt={"Image of boxing woman"}
          className={styles["hero__img"]}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
