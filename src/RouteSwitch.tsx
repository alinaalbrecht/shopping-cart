import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Basket from "./Components/Basket";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";

const RouteSwitch = () => {
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  const handleToggleBasket = () => {
    if (basketIsOpen) {
      setBasketIsOpen(false);
    } else {
      setBasketIsOpen(true);
    }
  };
  return (
    <BrowserRouter>
      {basketIsOpen && <Basket handleToggleBasket={handleToggleBasket} />}
      <Nav handleToggleBasket={handleToggleBasket} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
