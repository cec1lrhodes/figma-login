import boatImage from "./screenshots/boat.png";
import figmaIcon from "./screenshots/figma.png";
import avatarImage from "./screenshots/avatar.png";
import styles from "./login.module.css";

export const App = () => {
  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div className={styles.imagePanel}>
          <img
            src={boatImage}
            alt="Boat near a lighthouse at sunset"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
          <p className={styles.photoCredit}>
            Photo by{" "}
            <span className={styles.photoCreditName}>Alexandr Popadin</span>
          </p>
        </div>

        <aside className={styles.aside}>
          <div className={styles.desktopBrand}>
            <img src={avatarImage} className={styles.avatar} />

            <span className={styles.brandText}>UI Unicorn</span>
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>
              Nice to see you again
            </h1>

            <form className={styles.form}>
              <label className={styles.field}>
                <span className={styles.fieldName}>
                  Login
                </span>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className={styles.textInput}
                />
              </label>

              <label className={styles.passwordField}>
                <span className={styles.fieldName}>
                  Password
                </span>
                <div className={styles.passwordInputWrap}>
                  {/* stop here */}
                  <input
                    type="password"
                    placeholder="Enter password"
                    className={styles.passwordInput}
                  />
                  <button
                    type="button"
                    aria-label="Show password"
                    className={styles.iconButton}
                  >
                    <svg
                      width="16"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.eyeIcon}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C4.453 0 1.427 2.212.202 5.326a.47.47 0 0 0 0 .348C1.427 8.788 4.453 11 8 11s6.573-2.212 7.798-5.326a.47.47 0 0 0 0-.348C14.573 2.212 11.547 0 8 0Zm0 8.25A2.75 2.75 0 1 0 8 2.75a2.75 2.75 0 0 0 0 5.5Zm0-1.1a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </label>

              <div className={styles.optionsRow}>
                <label className={styles.rememberLabel}>
                  <input type="checkbox" className={styles.rememberInput} />
                  <span className={styles.rememberToggle} />
                  Remember me
                </label>

                <a
                  href="#"
                  className={styles.forgotLink}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={styles.signInButton}
              >
                Sign in
              </button>
            </form>

            <div className={styles.divider} />

            <button className={styles.googleButton}>
              <span className={styles.googleIcon}>
                <span className={styles.googleIconLetter}>G</span>
              </span>
              Or sign in with Google
            </button>

            <p className={styles.signupText}>
              Dont have an account?
              <a href="#" className={styles.signupLink}>
                Sign up now
              </a>
            </p>

            <div className={styles.mobileBrand}>
              <img src={avatarImage} className={styles.avatar} />

              <span className={styles.brandText}>UI Unicorn</span>
            </div>
          </div>

          <footer className={styles.footer}>
            <a
              href="#"
              className={styles.socialLink}
            >
              <img src={figmaIcon} alt="Figma icon" className={styles.figmaIcon} />
              @uiunicorn
            </a>
            <span className={styles.copyright}>
              © Perfect Login 2021
            </span>
          </footer>
        </aside>
      </section>
    </main>
  );
};

export default App;
