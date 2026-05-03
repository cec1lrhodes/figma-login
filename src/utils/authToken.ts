const ACCESS_TOKEN_KEY = "accessToken";

export const hasAccessToken = () =>
  Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));

export const saveAccessToken = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

export const clearAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
