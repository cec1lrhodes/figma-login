import styles from "../login.module.css";

type RegisterProps = {
  onClose: () => void;
};

export const Register = ({ onClose }: RegisterProps) => {
  return (
    <div className={styles.registerOverlay}>
      <form
        className={styles.registerCard}
        onSubmit={(event) => event.preventDefault()}
      >
        <button
          type="button"
          className={styles.registerCloseButton}
          aria-label="Close registration form"
          onClick={onClose}
        >
          X
        </button>

        <h2 className={styles.registerTitle}>Create account</h2>
        <p className={styles.registerSubtitle}>
          Enter your details to join UI Unicorn.
        </p>

        <label className={styles.field}>
          <span className={styles.fieldName}>Login</span>
          <input
            type="text"
            placeholder="Email or phone number"
            className={styles.textInput}
          />
        </label>

        <label className={styles.passwordField}>
          <span className={styles.fieldName}>Password</span>
          <input
            type="password"
            placeholder="Create password"
            className={styles.passwordInput}
          />
        </label>

        <label className={styles.passwordField}>
          <span className={styles.fieldName}>Confirm password</span>
          <input
            type="password"
            placeholder="Confirm password"
            className={styles.passwordInput}
          />
        </label>

        <button type="submit" className={styles.signInButton}>
          Register
        </button>
      </form>
    </div>
  );
};
