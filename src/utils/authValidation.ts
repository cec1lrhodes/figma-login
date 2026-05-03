type LoginValidationCredentials = {
  email: string;
  password: string;
};

type RegisterValidationCredentials = LoginValidationCredentials & {
  confirmPassword: string;
};

const MIN_PASSWORD_LENGTH = 6;

const validateEmailAndPassword = ({
  email,
  password,
}: LoginValidationCredentials) => {
  const trimmedEmail = email.trim();

  if (!trimmedEmail || !password) {
    return "Email and password are required";
  }

  if (!trimmedEmail.toLowerCase().endsWith("@gmail.com")) {
    return "Email must be a Gmail address";
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }

  return "";
};

export const validateLoginCredentials = (
  credentials: LoginValidationCredentials,
) => validateEmailAndPassword(credentials);

export const validateRegisterCredentials = ({
  confirmPassword,
  ...credentials
}: RegisterValidationCredentials) => {
  if (!confirmPassword) {
    return "Email and password fields are required";
  }

  const credentialsError = validateEmailAndPassword(credentials);

  if (credentialsError) {
    return credentialsError;
  }

  if (credentials.password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "";
};
