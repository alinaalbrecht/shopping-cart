import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
