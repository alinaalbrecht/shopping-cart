import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Nav from "./Components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
