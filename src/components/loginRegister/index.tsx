import type { FC } from 'react';

import { motion } from 'framer-motion';

import { initial } from '../../utils/animate';
import LoginRegisterForm from './form';
import LeftSide from './leftSide';

const LoginRegister: FC = () => (
  <motion.main
    initial={initial}
    animate={{
      x: 0,
      y: 0,
    }}
    transition={{
      delay: 0.5,
    }}
    className="relative w-[90%] max-w-3xl grid-cols-2 gap-2 rounded-lg bg-white p-5 shadow md:grid dark:bg-black dark:shadow-primary/20"
  >
    <LeftSide />
    <LoginRegisterForm />
  </motion.main>
);

export default LoginRegister;
