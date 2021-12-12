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
  quantity: 1;
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
    let donutExists: boolean = false;

    for (let i = 0; i < basketContents.length; i++) {
      if (basketContents[i].name === Donuts[index].name) {
        donutExists = true;
      }
    }

    if (!donutExists) {
      setBasketContents((prevbasketContents) => [
        ...prevbasketContents,
        { ...Donuts[index], quantity: 1 },
      ]);
      console.log(basketContents);
    } else {
      const updatedBasket = [];
      console.log("triggered");
      for (let i = 0; i < basketContents.length; i++) {
        if (basketContents[i].index === index) {
          basketContents[i].quantity += 1;
          updatedBasket.push(basketContents[i]);
        } else {
          updatedBasket.push(basketContents[i]);
        }
      }

      /*  basketContents.map((donut) => {
        if (basketContents[i].index === index) {
          donut.quantity += 1;
        }
        return
      }); */
      console.log(updatedBasket);
      setBasketContents(updatedBasket);
    }
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
          element={<Shop donuts={Donuts} addToBasket={addToBasket} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
