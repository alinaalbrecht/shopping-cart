import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
