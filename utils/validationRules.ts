export const credentialsSignInValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/, // Basic email pattern
  },
  password: {
    required: true,
  },
};

export const signUpValidationRules = {
  name: { required: true },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/, // Basic email pattern
  },
  phone: { required: true },
  password: {
    required: true,
    minLength: 8, // Example: Enforce a minimum password length
  },
  passwordConfirm: {
    required: true,
    customValidator: (value: string, formData: Record<string, string>) =>
      value !== formData?.password ? "Passwords do not match" : null,
  },
};

export const verifySignUpValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  signUpCode: { required: true, minLength: 6, maxLength: 6 },
};

export const forgetPasswordValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
};

export const resetPasswordValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  password: {
    required: true,
    minLength: 8,
  },
  passwordConfirm: {
    required: true,
    customValidator: (value: string, formData: Record<string, string>) =>
      value !== formData?.password ? "Passwords do not match" : null,
  },
};

export const verifyResetCodeValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  resetCode: { required: true, minLength: 6, maxLength: 6 },
};
