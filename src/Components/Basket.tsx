import "../Styles/Basket.css";
import { FaTimes } from "react-icons/fa";
import DonutCardBasket from "./DonutCardBasket";
import { ReactComponentElement, ReactElement } from "react";

interface BasketProps {
  handleToggleBasket: () => void;
  basketContents: {
    name: string;
    price: number;
    image: string;
    index: number;
    quantity: number;
  }[];
}

const Basket: React.FC<BasketProps> = (props) => {
  return (
    <div className="basket">
      {console.log(props.basketContents)}
      <div className="overlay"></div>
      <div className="basket-overview">
        <button className="close-button" onClick={props.handleToggleBasket}>
          <FaTimes className="fa-times" />
        </button>
        <h1>Basket</h1>
        {props.basketContents.map((donut) => {
          return (
            <DonutCardBasket
              index={donut.index}
              image={donut.image}
              name={donut.name}
              price={donut.price}
              quantity={donut.quantity}
            />
          );
        })}
        <h3>
          Subtotal:&nbsp;
          {props.basketContents.reduce((amount, item): number => {
            return amount + item.price * item.quantity;
          }, 0)}
          €
        </h3>
        <button className="cta">Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
