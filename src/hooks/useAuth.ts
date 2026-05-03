import { useEffect, useState } from "react";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  type AuthCredentials,
} from "../services/authApi";
import {
  clearAccessToken,
  hasAccessToken,
  saveAccessToken,
} from "../utils/authToken";

export const useAuth = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(hasAccessToken);

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    const restoreSession = async () => {
      try {
        const accessToken = await refreshAccessToken();

        if (!accessToken) {
          return;
        }

        saveAccessToken(accessToken);
        setIsLoggedIn(true);
      } catch {
        clearAccessToken();
      }
    };

    void restoreSession();
  }, [isLoggedIn]);

  const authenticate = async (
    credentials: AuthCredentials,
    requestAccessToken: (credentials: AuthCredentials) => Promise<string>,
    fallbackError: string,
  ) => {
    setError("");
    setIsLoading(true);

    try {
      const accessToken = await requestAccessToken(credentials);
      saveAccessToken(accessToken);
      setIsLoggedIn(true);
    } catch (authError) {
      const message =
        authError instanceof Error ? authError.message : fallbackError;

      setError(message);
      clearAccessToken();
    } finally {
      setIsLoading(false);
    }
  };

  const login = (credentials: AuthCredentials) =>
    authenticate(credentials, loginUser, "Login failed");

  const register = (credentials: AuthCredentials) =>
    authenticate(credentials, registerUser, "Registration failed");

  const logout = async () => {
    clearAccessToken();
    setIsLoggedIn(false);

    await logoutUser();
  };

  return {
    error,
    isLoading,
    isLoggedIn,
    login,
    register,
    logout,
  };
};
