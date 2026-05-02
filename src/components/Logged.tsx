import styles from "../login.module.css";

export const Logged = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <main className={styles.page}>
      <section className={styles.loggedInCard}>
        <h1 className={styles.title}>You are loggined</h1>
        <p className={styles.successText}>
          Access token saved in localStorage, refresh token saved in cookie.
        </p>
        <button
          type="button"
          className={styles.signInButton}
          onClick={handleLogout}
        >
          Log out
        </button>
      </section>
    </main>
  );
};
