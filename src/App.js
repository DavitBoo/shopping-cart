import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from './components/Cart';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([])

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleCart={toggleCart}/>
        {isOpen ? <Cart /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products}/>} />
          <Route path="/product/:id" element={<Product products={products}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
