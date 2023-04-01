import React, { useEffect, useState } from "react"
import { HashRouter , Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from './components/Cart';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);


  const addCartItems = (product) => {
    setCartItems([...cartItems, product]);
  }

  const deleteCartItems = (key) => {
    setCartItems(items => items.filter(item => item.uuid !== key));
  }

  return (
    <HashRouter >
      <div className="App">
        <Header toggleCart={toggleCart} numberOfItems={cartItems.length}/>
        {isOpen ? <Cart 
                    cartItems={cartItems} 
                    deleteCartItems={deleteCartItems}
                    toggleCart={toggleCart}
                  /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products}/>} />
          <Route 
              path="/product/:id" 
              element={<Product products={products} 
              cartItems={cartItems} 
              addCartItems={addCartItems}/>} 
          /></Routes>
      </div>
    </HashRouter >
  );
}

export default App;
