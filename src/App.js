// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ProductList from "./pages/productList/ProductList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Search from "./pages/search/Search";

import "./css/grid.css";
import "./css/base.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/search/:id" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
