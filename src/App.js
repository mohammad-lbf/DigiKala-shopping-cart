import React from 'react';
import HambergurMenu from './components/HambergurMenu';
import Header from './components/Header';
import LoginFormModal from './components/LoginFormModal';
import MobileNavbar2 from './components/MobileNavbar2';
import SecondNabvar from './components/SecondNabvar';
import Product from './components/shared/Product';
import { Routes , Route } from 'react-router';
import DetailesPage from './components/DetailesPage';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <MobileNavbar2 />
      <SecondNabvar />
      <LoginFormModal />
      <HambergurMenu />
      <div>
        <Routes>
          <Route path="/products/:id" element={<DetailesPage />} />
          <Route path="/products"     element={<Products />} />
          <Route path="/"            element={<Products />} />
          <Route path="/*"           element={<NotFound />}  />
          <Route path="/cart"        element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;