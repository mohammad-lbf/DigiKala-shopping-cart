import React from 'react';
import HambergurMenu from './components/HambergurMenu';
import Header from './components/Header';
import LoginFormModal from './components/LoginFormModal';
import MobileNavbar2 from './components/MobileNavbar2';
import SecondNabvar from './components/SecondNabvar';

const App = () => {
  return (
    <div>
      <Header />
      <MobileNavbar2 />
      <SecondNabvar />
      <LoginFormModal />
      <HambergurMenu />
    </div>
  );
};

export default App;