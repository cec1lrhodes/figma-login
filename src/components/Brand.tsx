import avatarImage from "../screenshots/avatar.png";
import styles from "../login.module.css";

type BrandProps = {
  className: string;
};

export const Brand = ({ className }: BrandProps) => {
  return (
    <div className={className}>
      <img src={avatarImage} alt="UI Unicorn avatar" className={styles.avatar} />
      <span className={styles.brandText}>UI Unicorn</span>
    </div>
  );
};
