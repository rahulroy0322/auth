import type { FC } from 'react';

import { Toaster } from 'sonner';

import LoginRegister from './components/loginRegister';

const App: FC = () => {
  return (
    <>
      <LoginRegister />
      <Toaster />
    </>
  );
};

export default App;
