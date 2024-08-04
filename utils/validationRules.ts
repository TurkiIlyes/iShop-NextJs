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

export const verifyBasicDetailsValidationRules = {
  name: { required: true },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  image: {
    customValidator: (value: string) =>
      !["image/jpeg", "image/png", "image/gif"].includes(value)
        ? "Please select a valid image file (JPEG, PNG, or GIF)."
        : null,
  },
};

export const verifyAddressValidationRules = {
  details: { required: true },
  governorate: { required: true },
  city: { required: true },
  postalCode: { required: true },
};

export const verifyDeleteAccountValidationRules = {
  password: { required: true },
};

export const verifyChangePasswordValidationRules = {
  currentPassword: { required: true },
  password: {
    required: true,
    customValidator: (value: string, formData: Record<string, string>) =>
      value !== formData?.currentPassword ? "Passwords do not match" : null,
  },
};

export const verifyEditOrderValidationRules = {
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  phone: { required: true },
  status: { required: true },
  paymentStatus: { required: true },
  details: { required: true },
  governorate: { required: true },
  city: { required: true },
  postalCode: { required: true },
};

export const verifyCustomerValidationRules = {
  name: { required: true },
  email: {
    required: true,
    pattern: /\S+@\S+\.\S+/,
  },
  phone: { required: false },
  status: { required: false },
  details: { required: false },
  governorate: { required: false },
  city: { required: false },
  postalCode: { required: false },
  password: {
    required: true,
    minLength: 8,
  },
  image: {
    required: false,
    customValidator: (value: string) =>
      !["image/jpeg", "image/png", "image/gif"].includes(value)
        ? "Please select a valid image file (JPEG, PNG, or GIF)."
        : null,
  },
};

export const verifyCategoryValidationRules = {
  name: { required: true },
  status: { required: true },
  image: {
    customValidator: (value: string) =>
      !["image/jpeg", "image/png", "image/gif"].includes(value)
        ? "Please select a valid image file (JPEG, PNG, or GIF)."
        : null,
  },
};

export const verifyProductValidationRules = {
  title: { required: true },
  description: { required: true },
  category: { required: true },
  price: { required: true },
  discount: { required: false },
  sku: { required: false },
  quantity: { required: true },
  status: { required: true },
  colors: { required: false },
  sizes: { required: false },
  imageCover: {
    customValidator: (value: string) =>
      !["image/jpeg", "image/png", "image/gif"].includes(value)
        ? "Please select a valid image file (JPEG, PNG, or GIF)."
        : null,
  },
  images: {
    customValidator: (value: string) => {
      if (!value) {
        const imagesFiles = value.split(",");
        for (let i = 0; i < imagesFiles.length; i++) {
          if (
            !["image/jpeg", "image/png", "image/gif"].includes(imagesFiles[i])
          ) {
            return "Please select a valid image file (JPEG, PNG, or GIF).";
          }
        }
      }
      return null;
    },
  },
};
