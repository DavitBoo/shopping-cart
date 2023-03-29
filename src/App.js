import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from './components/Cart';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleCart={toggleCart}/>
        {isOpen ? <Cart /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
