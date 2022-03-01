import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export const getValidationErrors = (err: ValidationError): Errors => {
  const validationErrors: Errors = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err.inner.forEach((error: any) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};
