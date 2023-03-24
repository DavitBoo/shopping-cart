import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
