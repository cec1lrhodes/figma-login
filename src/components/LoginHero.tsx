import boatImage from "../screenshots/boat.png";
import styles from "../login.module.css";

export const LoginHero = () => {
  return (
    <div className={styles.imagePanel}>
      <img
        src={boatImage}
        alt="Boat near a lighthouse at sunset"
        className={styles.heroImage}
      />
      <div className={styles.imageOverlay} />
      <p className={styles.photoCredit}>
        Photo by
        <span className={styles.photoCreditName}> Alexandr Popadin</span>
      </p>
    </div>
  );
};
