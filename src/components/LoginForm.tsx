import { useState } from "react";
import styles from "../login.module.css";
import { validateLoginCredentials } from "../utils/authValidation";

export type LoginCredentials = {
  email: string;
  password: string;
};

type LoginFormProps = {
  error: string;
  isLoading: boolean;
  onLogin: (credentials: LoginCredentials) => Promise<void>;
};

const PasswordVisibilityIcon = () => {
  return (
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
  );
};

export const LoginForm = ({ error, isLoading, onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const errorMessage = validateLoginCredentials({ email, password });

    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    }

    setValidationError("");
    await onLogin({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.fieldName}>Login</span>
        <input
          type="text"
          placeholder="Email or phone number"
          className={styles.textInput}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label className={styles.passwordField}>
        <span className={styles.fieldName}>Password</span>
        <div className={styles.passwordInputWrap}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className={styles.passwordInput}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className={styles.iconButton}
            onClick={() => setShowPassword((value) => !value)}
          >
            <PasswordVisibilityIcon />
          </button>
        </div>
      </label>

      <div className={styles.optionsRow}>
        <label className={styles.rememberLabel}>
          <input
            type="checkbox"
            className={styles.rememberInput}
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <span className={styles.rememberToggle} />
          Remember me
        </label>

        <a href="#" className={styles.forgotLink}>
          Forgot password?
        </a>
      </div>

      {validationError || error ? (
        <p className={styles.errorMessage}>{validationError || error}</p>
      ) : null}

      <button
        type="submit"
        className={styles.signInButton}
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};
