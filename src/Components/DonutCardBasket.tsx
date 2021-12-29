import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface DonutCardBasketProps {
  basketContents?: {
    name: string;
    price: number;
    image: string;
    index: number;
  }[];
  name: string;
  price: number;
  image: string;
  index: number;
  quantity: number;
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
      <div className="donut-item basket-card" key={props.index}>
        <div className="donut-image">
          <img src={props.image} alt="" />
        </div>
        <div className="donut-info">
          <p className="donut-name">{props.name}</p>
          <p className="donut-price">{props.price * props.quantity}€</p>
          <p className="donut-quantity">quantity: {props.quantity}</p>
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
    </>
  );
};

export default DonutCardBasket;
