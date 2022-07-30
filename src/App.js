import React from 'react';
import './App.css'
import HambergurMenu from './components/HambergurMenu';
import Header from './components/Header';
import LoginFormModal from './components/LoginFormModal';
import MobileNavbar2 from './components/MobileNavbar2';
import SecondNabvar from './components/SecondNabvar';
import { Routes , Route } from 'react-router';
import DetailesPage from './components/DetailesPage';
import Products from './components/Products';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutProject from './components/AboutProject';
import Footer from './components/Footer';
import MensClothing from './components/MensClothing';
import WomenClothing from './components/WomenClothing';
import Jwelry from './components/Jwelry';
import Electronics from './components/Electronics';
import FilterModal from './components/FilterModal';

const App = () => {
  return (
    <Provider store={store}>
        <div>
      <Header />
      <MobileNavbar2 />
      <SecondNabvar />
      <FilterModal />
      <LoginFormModal />
      <HambergurMenu />
      <div style={{minHeight:"60vh"}}>
        <Routes>
          <Route path="/products/:id" element={<DetailesPage />} />
          <Route path="/products"     element={<Products />} />
          <Route path="/"            element={<Products />} />
          <Route path="/*"           element={<NotFound />}  />
          <Route path="/cart"        element={<Cart />} />
          <Route path="/aboutproject" element={<AboutProject />} />
          <Route path="/menclothes"   element={<MensClothing />} />
          <Route path="/womenclothes"   element={<WomenClothing />} />
          <Route path="/jewelery"   element={<Jwelry />} />
          <Route path="/electronics"   element={<Electronics />} />
        </Routes>
      </div>
      <Footer />
       </div>
    </Provider>
    
  );
};

export default App;