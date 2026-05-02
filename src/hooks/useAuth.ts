import { useEffect, useState } from "react";

const ACCESS_TOKEN_KEY = "accessToken";

type LoginCredentials = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem(ACCESS_TOKEN_KEY)),
  );

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    const restoreSession = async () => {
      try {
        const response = await fetch("/api/auth/refresh", {
          method: "POST",
          credentials: "include",
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
        setIsLoggedIn(true);
      } catch {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      }
    };

    void restoreSession();
  }, [isLoggedIn]);

  const login = async ({ email, password }: LoginCredentials) => {
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      setIsLoggedIn(true);
    } catch (loginError) {
      const message =
        loginError instanceof Error ? loginError.message : "Login failed";

      setError(message);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setIsLoggedIn(false);

    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  };

  return {
    error,
    isLoading,
    isLoggedIn,
    login,
    logout,
  };
};
