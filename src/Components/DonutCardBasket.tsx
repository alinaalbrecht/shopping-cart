import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

interface DonutCardBasketProps {
  name: string;
  price: number;
  image: string;
  index: number;
  quantity: number;
  updateBasket: (index: number, increment: string) => React.MouseEventHandler;
  removeFromBasket: (index: number) => React.MouseEventHandler;

  handleInputQuantityChange: (index: number) => React.ChangeEventHandler;
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
            <FaMinus
              className="fa-minus"
              onClick={props.updateBasket(props.index, "subtract")}
            />
          </div>
          <input
            className="quantity-input"
            value={props.quantity !== 0 ? props.quantity : ""}
            onChange={props.handleInputQuantityChange(props.index)}
          />
          <div className="add" onClick={props.updateBasket(props.index, "add")}>
            <FaPlus className="fa-plus" />
          </div>
          <div className="trash" onClick={props.removeFromBasket(props.index)}>
            <FaTrash />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonutCardBasket;
