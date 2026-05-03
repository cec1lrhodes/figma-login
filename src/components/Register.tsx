import { useState } from "react";
import styles from "../login.module.css";
import { validateRegisterCredentials } from "../utils/authValidation";

type RegisterProps = {
  error: string;
  isLoading: boolean;
  onClose: () => void;
  onRegister: (credentials: {
    email: string;
    password: string;
  }) => Promise<void>;
};

export const Register = ({
  error,
  isLoading,
  onClose,
  onRegister,
}: RegisterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const errorMessage = validateRegisterCredentials({
      email,
      password,
      confirmPassword,
    });

    if (errorMessage) {
      setValidationError(errorMessage);
      return;
    }

    setValidationError("");
    await onRegister({ email, password });
  };

  return (
    <div className={styles.registerOverlay}>
      <form className={styles.registerCard} onSubmit={handleSubmit}>
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className={styles.passwordField}>
          <span className={styles.fieldName}>Password</span>
          <input
            type="password"
            placeholder="Create password"
            className={styles.passwordInput}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <label className={styles.passwordField}>
          <span className={styles.fieldName}>Confirm password</span>
          <input
            type="password"
            placeholder="Confirm password"
            className={styles.passwordInput}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>

        {validationError || error ? (
          <p className={styles.errorMessage}>{validationError || error}</p>
        ) : null}

        <button
          type="submit"
          className={styles.signInButton}
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Register"}
        </button>
      </form>
    </div>
  );
};
