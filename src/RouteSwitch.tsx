import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/App";
import Basket from "./Components/Basket";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";

interface Donut {
  name: string;
  price: number;
  image: string;
  index: number;
}

interface basketContents {
  name: string;
  price: number;
  image: string;
  index: number;
  quantity: number;
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
    name: "Peanut Butter",
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

  const updateBasket =
    (index: number, increment: string) => (event: React.MouseEvent) => {
      let donutExists: boolean = false;
      let increase = 0;
      if (increment === "add") {
        increase++;
      } else {
        increase--;
      }

      // checks if donut flavor already exists in basket
      for (let i = 0; i < basketContents.length; i++) {
        if (basketContents[i].name === Donuts[index].name) {
          donutExists = true;
        }
      }

      // if donut does not already exist in basket it is added to the basket
      if (!donutExists) {
        setBasketContents((prevbasketContents) => [
          ...prevbasketContents,
          { ...Donuts[index], quantity: 1 },
        ]);
      }
      // if donut does already exist in basket its quantity is increased by one
      else {
        const updatedBasket = [];

        for (let i = 0; i < basketContents.length; i++) {
          if (basketContents[i].index === index) {
            basketContents[i].quantity += increase;
            updatedBasket.push(basketContents[i]);
          } else {
            updatedBasket.push(basketContents[i]);
          }
        }

        setBasketContents(updatedBasket);
      }
    };

  const handleInputQuantityChange =
    (index: number) =>
    (event: React.ChangeEvent): any => {
      let newValue: number | string = parseInt(
        (event.target as HTMLInputElement).value
      );
      if (!newValue) {
        newValue = 0;
      }
      const updatedBasket = [];
      for (let i = 0; i < basketContents.length; i++) {
        if (basketContents[i].index === index) {
          basketContents[i].quantity = newValue;
          updatedBasket.push(basketContents[i]);
        } else {
          updatedBasket.push(basketContents[i]);
        }
      }
      setBasketContents(updatedBasket);
    };

  const removeFromBasket =
    (index: number) =>
    (event: React.MouseEvent): any => {
      const updatedBasket = [];
      for (let i = 0; i < basketContents.length; i++) {
        if (basketContents[i].index !== index) {
          updatedBasket.push(basketContents[i]);
        }
      }
      setBasketContents(updatedBasket);
    };

  useEffect(() => {
    basketIsOpen
      ? document.body.classList.add("basket-open")
      : document.body.classList.remove("basket-open");
  }, [basketIsOpen]);

  return (
    <BrowserRouter>
      {basketIsOpen && (
        <Basket
          handleToggleBasket={handleToggleBasket}
          basketContents={basketContents}
          handleInputQuantityChange={handleInputQuantityChange}
          updateBasket={updateBasket}
          removeFromBasket={removeFromBasket}
        />
      )}
      <Nav
        handleToggleBasket={handleToggleBasket}
        basketContents={basketContents}
      />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop donuts={Donuts} updateBasket={updateBasket} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
