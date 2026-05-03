import { Brand } from "./Brand";
import { LoginFooter } from "./LoginFooter";
import { LoginForm, type LoginCredentials } from "./LoginForm";
import { LoginHero } from "./LoginHero";
import styles from "../login.module.css";

type LoginScreenProps = {
  error: string;
  isLoading: boolean;
  onGoogleClick: () => void;
  onLogin: (credentials: LoginCredentials) => Promise<void>;
  onRegisterClick: () => void;
};

export const LoginScreen = ({
  error,
  isLoading,
  onGoogleClick,
  onLogin,
  onRegisterClick,
}: LoginScreenProps) => {
  const handleRegisterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onRegisterClick();
  };

  return (
    <section className={styles.shell}>
      <LoginHero />

      <aside className={styles.aside}>
        <Brand className={styles.desktopBrand} />

        <div className={styles.content}>
          <h1 className={styles.title}>Nice to see you again</h1>

          <LoginForm error={error} isLoading={isLoading} onLogin={onLogin} />

          <div className={styles.divider} />

          <button
            type="button"
            className={styles.googleButton}
            onClick={onGoogleClick}
          >
            <span className={styles.googleIcon}>
              <span className={styles.googleIconLetter}>G</span>
            </span>
            Or sign in with Google
          </button>

          <p className={styles.signupText}>
            Dont have an account?
            <a
              href="#"
              className={styles.signupLink}
              onClick={handleRegisterClick}
            >
              Sign up now
            </a>
          </p>

          <Brand className={styles.mobileBrand} />
        </div>

        <LoginFooter />
      </aside>
    </section>
  );
};
