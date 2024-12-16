import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/home/cart/Cart";
import Order from "./components/pages/home/placeOrder/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./components/contacts/Contact";
import { useState } from "react";
import LoginPopUp from "./components/login-pop-up/LoginPopUp";
import "./index.css";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/*"
            element={<h1>Page not found</h1>}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
