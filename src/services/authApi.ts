export type AuthCredentials = {
  email: string;
  password: string;
};

type AuthResponse = {
  accessToken?: string;
  message?: string;
};

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

const parseAuthResponse = async (response: Response): Promise<AuthResponse> => {
  try {
    return (await response.json()) as AuthResponse;
  } catch {
    return {};
  }
};

const requestAuth = async (
  endpoint: string,
  credentials: AuthCredentials,
  fallbackError: string,
) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: JSON_HEADERS,
    credentials: "include",
    body: JSON.stringify({
      email: credentials.email.trim(),
      password: credentials.password,
    }),
  });

  const data = await parseAuthResponse(response);

  if (!response.ok || !data.accessToken) {
    throw new Error(data.message || fallbackError);
  }

  return data.accessToken;
};

export const loginUser = (credentials: AuthCredentials) =>
  requestAuth("/api/auth/login", credentials, "Login failed");

export const registerUser = (credentials: AuthCredentials) =>
  requestAuth("/api/auth/register", credentials, "Registration failed");

export const refreshAccessToken = async () => {
  const response = await fetch("/api/auth/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    return "";
  }

  const data = await parseAuthResponse(response);

  return data.accessToken || "";
};

export const logoutUser = () =>
  fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
