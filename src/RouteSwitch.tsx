import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Basket from "./Components/Basket";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";

interface basketContents {
  name: string;
  price: number;
  image: string;
}

interface Donut {
  name: string;
  price: number;
  image: string;
  index: number;
}

const Donuts: Donut[] = [
  {
    name: "Strawberry",
    price: 2,
    image: "images/donut-red.png",
    index: 0,
  },
  {
    name: "Chocolate",
    price: 2,
    image: "images/brown-covered.png",
    index: 1,
  },
  {
    name: "Peanut Butter Fudge",
    price: 2,
    image: "images/brown-streaks.png",
    index: 2,
  },
  {
    name: "Lemon",
    price: 2,
    image: "images/sprinkles-white.png",
    index: 3,
  },
  {
    name: "Cookies & Cream",
    price: 2,
    image: "images/black-white.png",
    index: 4,
  },
  {
    name: "Tangerine Swirl",
    price: 2,
    image: "images/yellow-white-streaks.png",
    index: 5,
  },
  {
    name: "Pink Frosting",
    price: 2,
    image: "images/pink.png",
    index: 6,
  },
];

const RouteSwitch = () => {
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  const [basketContents, setBasketContents] = useState<basketContents[] | []>(
    []
  );

  const handleToggleBasket = () => {
    basketIsOpen ? setBasketIsOpen(false) : setBasketIsOpen(true);
  };

  const addToBasket = (index: number) => (event: React.MouseEvent) => {
    setBasketContents((prevbasketContents) => [
      ...prevbasketContents,
      Donuts[index],
    ]);
  };

  return (
    <BrowserRouter>
      {basketIsOpen && <Basket handleToggleBasket={handleToggleBasket} />}
      <Nav
        handleToggleBasket={handleToggleBasket}
        basketContents={basketContents}
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop donuts={Donuts} addToBasket={addToBasket} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
