import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface DonutCardBasketProps {
  basketContents: {
    name: string;
    price: number;
    image: string;
    index: number;
  }[];
  /* addToBasket: (index: number) => React.MouseEventHandler; */
}
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    index?: number;
  }
}

const DonutCardBasket: React.FC<DonutCardBasketProps> = (props) => {
  return (
    <>
      {props.basketContents.map((donut) => {
        return (
          <div className="donut-item basket-card" key={donut.index}>
            <div className="donut-image">
              <img src={donut.image} alt="" />
            </div>
            <div className="donut-info">
              <p className="donut-name">{donut.name}</p>
              <p className="donut-price">{donut.price}€</p>
            </div>
            <div className="donut-quantity-controls">
              <div className="subtract">
                <FaMinus className="fa-minus" />
              </div>
              <input className="quantity-input" />
              <div className="add">
                <FaPlus className="fa-plus" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DonutCardBasket;
