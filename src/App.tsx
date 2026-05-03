import styles from "./login.module.css";
import { useState } from "react";
import { Logged } from "./components/Logged";
import { useAuth } from "./hooks/useAuth";
import { Register } from "./components/Register";
import { Google } from "./components/Google";
import { LoginScreen } from "./components/LoginScreen";

export const App = () => {
  const [googleToggle, setGoogleToggle] = useState(false);
  const [signInToggle, setSignInToggle] = useState(false);
  const { error, isLoading, isLoggedIn, login, register, logout } = useAuth();

  if (isLoggedIn) {
    return <Logged handleLogout={logout} />;
  }

  const handleSignInToggle = () => {
    setSignInToggle((value) => !value);
  };

  const handleGoogleToggle = () => {
    setGoogleToggle((value) => !value);
  };

  return (
    <main className={styles.page}>
      <LoginScreen
        error={error}
        isLoading={isLoading}
        onGoogleClick={handleGoogleToggle}
        onLogin={login}
        onRegisterClick={handleSignInToggle}
      />
      {googleToggle ? <Google onClose={handleGoogleToggle} /> : null}
      {signInToggle ? (
        <Register
          error={error}
          isLoading={isLoading}
          onClose={handleSignInToggle}
          onRegister={register}
        />
      ) : null}
    </main>
  );
};

export default App;
