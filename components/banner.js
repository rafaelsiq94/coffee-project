import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Zé</span>
        <span className={styles.title2}>Café</span>
      </h1>
      <p className={styles.subTitle}>Descubra caferias da sua região!</p>
      <button className={styles.button}>{props.buttonText}</button>
    </div>
  )
}

export default Banner;