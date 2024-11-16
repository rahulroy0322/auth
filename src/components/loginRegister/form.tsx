import { type FC, type FormEvent, useRef, useState } from 'react';

import { toast } from 'sonner';

import { loginSchema, registerSchema } from '../../schemas/loginRegister';
import Input from '../input';

type KeysType = 'uname' | 'email' | 'password' | 'confirmPassword';

type ErrorType = Partial<Record<KeysType, string>>;

const START_INDEX = 0;

const LoginRegisterForm: FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [errors, setErrors] = useState<ErrorType>({});

  const unameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const cPasswordRef = useRef<HTMLInputElement>(null);

  const toggleLogin = () => {
    setIsRegister((isRegister) => !isRegister);
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const schema = isRegister ? registerSchema : loginSchema;

    const data = schema.safeParse({
      uname: unameRef.current!.value,
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
      confirmPassword: cPasswordRef.current!.value,
    });

    if (!data.success) {
      setErrors(
        data.error.errors.reduce((acc, { message, path }) => {
          if (!acc[path[START_INDEX]! as KeysType]) {
            acc[path[START_INDEX]! as KeysType] = message;
          }

          return acc;
        }, {} as ErrorType)
      );
      return;
    }

    toast.success(isRegister ? 'Register Success' : 'Login Success', {
      closeButton: true,
    });

    setErrors({});
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="relative z-10 flex flex-shrink-0 flex-grow flex-col gap-4"
    >
      <h1 className="text-center text-2xl font-bold">
        {isRegister ? 'Register' : 'Login'}
      </h1>
      <Input
        initial={{
          height: 0,
        }}
        animate={
          isRegister
            ? {
                height: 'auto',
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
        disabled={!isRegister}
        required={isRegister}
        ref={unameRef}
        name="uname"
        placeholder="yourusername"
        label="User Name"
      >
        {errors.uname ? errors.uname : null}
      </Input>

      <Input
        ref={emailRef}
        required
        name="email"
        placeholder="test@example.com"
        type="email"
        label="Email"
      >
        {errors.email ? errors.email : null}
      </Input>

      <Input
        ref={passwordRef}
        name="password"
        required
        placeholder="your super secret password"
        label="Password"
        type="password"
      >
        {errors.password ? errors.password : null}
      </Input>

      <Input
        initial={{
          height: 0,
        }}
        animate={
          isRegister
            ? {
                height: 'auto',
              }
            : {}
        }
        transition={{
          duration: 0.5,
        }}
        disabled={!isRegister}
        required={isRegister}
        ref={cPasswordRef}
        name="confirmPassword"
        placeholder="your super secret password"
        label="Confirm Password"
        type="password"
      >
        {errors.confirmPassword ? errors.confirmPassword : null}
      </Input>

      <button className="rounded-lg bg-primary p-2.5 text-lg font-medium capitalize text-white">
        {isRegister ? 'register' : 'login'}
      </button>

      {isRegister ? (
        <p className="capitalize">
          already have account{' '}
          <span
            className="cursor-pointer text-primary/90"
            onClick={toggleLogin}
            role="button"
          >
            login here?
          </span>
        </p>
      ) : (
        <p className="capitalize">
          don't have account{' '}
          <span
            className="cursor-pointer text-primary/90"
            onClick={toggleLogin}
            role="button"
          >
            register here?
          </span>
        </p>
      )}
    </form>
  );
};

export default LoginRegisterForm;
