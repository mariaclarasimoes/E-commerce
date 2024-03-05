import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './modules/Home/home';
import Footer from './components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product/product';
import AllProducts from './components/AllProducts/allproducts';
import AboutUs from './components/AboutUs/aboutus';
import Contact from './components/Contact/contact';
import Cart from './modules/Cart/cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
