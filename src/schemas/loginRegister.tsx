import { z } from 'zod';

const MIN_PASSWORD = 8;

const uname = z.custom<string>(
  (val: unknown) =>
    typeof val === 'string' ? /^[a-z0-9]+$/i.test(val) : false,
  '"User Name" must be consists of "a-z" and "0-9"'
);
const email = z.string().email('Enter a valid "Email"');
const password = z
  .string()
  .min(
    MIN_PASSWORD,
    `"Password" must contain at least ${MIN_PASSWORD} character(s)`
  );
const confirmPassword = z
  .string()
  .min(
    MIN_PASSWORD,
    `"Confirm Password" must contain at least ${MIN_PASSWORD} character(s)`
  );

const loginSchema = z.object({
  email,
  password,
});

const registerSchema = loginSchema
  .extend({
    uname,
    confirmPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  });

export { loginSchema, registerSchema };
