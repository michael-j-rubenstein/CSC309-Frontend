import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <div className={styles.hero}>
        <h1 className={styles["hero__content"]}>
          <span className={styles["hero__small-content"]}>EVERYBODY CAN</span>{" "}
          <br /> BE THEIR PERFECT SELF
        </h1>
        {/* All credit of the photo goes to Heloisa Freitas, 
        source: https://www.pexels.com/photo/photo-of-woman-in-boxing-gloves-1608099/ */}
        <img
          src={require("../../images/boxing.jpg")}
          alt={"boxing woman"}
          className={styles["hero__img"]}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
