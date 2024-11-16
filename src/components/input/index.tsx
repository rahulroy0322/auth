import {
  type InputHTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from 'react';

import { type AnimationProps, motion } from 'framer-motion';

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> &
  PropsWithChildren & {
    label: string;
    initial?: AnimationProps['initial'];
    animate?: AnimationProps['animate'];
    transition?: AnimationProps['transition'];
  };

const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ children, label, initial, animate, transition, ...props }, ref) => (
    <motion.label
      initial={initial}
      animate={animate}
      transition={transition}
      className={`block space-y-2 overflow-hidden p-1 text-sm text-gray-900 focus-within:text-primary dark:text-white ${props.disabled && 'select-none'}`}
    >
      <b className="block font-medium capitalize">{label}</b>
      <input
        {...props}
        ref={ref}
        className="w-full rounded-lg border border-gray-600 bg-transparent p-2.5 text-gray-900 outline-none focus:border-transparent focus:ring-1 focus:ring-primary dark:text-white"
      />
      {children ? (
        <p className="text-red-600 dark:text-red-500">{children}</p>
      ) : null}
    </motion.label>
  )
);

export default Input;
