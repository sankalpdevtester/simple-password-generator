// src/lib/validation.ts
/**
 * Password validation utility with rules and error messages.
 */

interface ValidationRule {
  regex: RegExp;
  errorMessage: string;
}

const validationRules: ValidationRule[] = [
  {
    regex: /^(?=.*[a-z]).{1,}$/,
    errorMessage: 'Password must contain at least one lowercase letter',
  },
  {
    regex: /^(?=.*[A-Z]).{1,}$/,
    errorMessage: 'Password must contain at least one uppercase letter',
  },
  {
    regex: /^(?=.*\d).{1,}$/,
    errorMessage: 'Password must contain at least one digit',
  },
  {
    regex: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
    errorMessage: 'Password must contain at least one special character',
  },
  {
    regex: /^.{8,}$/,
    errorMessage: 'Password must be at least 8 characters long',
  },
];

const validatePassword = (password: string): string[] => {
  const errorMessages: string[] = [];

  validationRules.forEach((rule) => {
    if (!rule.regex.test(password)) {
      errorMessages.push(rule.errorMessage);
    }
  });

  return errorMessages;
};

const validatePasswordStrength = (password: string): string => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  switch (strength) {
    case 1:
      return 'Very Weak';
    case 2:
      return 'Weak';
    case 3:
      return 'Medium';
    case 4:
      return 'Strong';
    case 5:
      return 'Very Strong';
    default:
      return 'Unknown';
  }
};

export { validatePassword, validatePasswordStrength };