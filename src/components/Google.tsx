import styles from "../login.module.css";

export const Google = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.registerOverlay}>
      <div className={styles.registerCard}>
        <button
          type="button"
          className={styles.registerCloseButton}
          aria-label="Close registration form"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="mt-5 font-[Roboto] text-[20px] font-semibold tracking-[-0.01em] text-[#1A1A1A]">
          WE HAVENT GOOGLE AUTH FUNCTIONALITY YET
        </h2>
        <p>But you can sign in with your email and password</p>
      </div>
    </div>
  );
};
