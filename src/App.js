import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardItem from "./components/CardItem";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<CardItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
