import figmaIcon from "../screenshots/figma.png";
import styles from "../login.module.css";

export const LoginFooter = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.socialLink}>
        <img src={figmaIcon} alt="Figma icon" className={styles.figmaIcon} />
        @uiunicorn
      </a>
      <span className={styles.copyright}>© Perfect Login 2021</span>
    </footer>
  );
};
