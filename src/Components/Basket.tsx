import "../Styles/Basket.css";
import { FaTimes } from "react-icons/fa";
import DonutCardBasket from "./DonutCardBasket";

interface BasketProps {
  handleToggleBasket: () => void;
  basketContents: {
    name: string;
    price: number;
    image: string;
    index: number;
  }[];
}

const Basket: React.FC<BasketProps> = (props) => {
  return (
    <div className="basket">
      <div className="overlay"></div>
      <div className="basket-overview">
        <button className="close-button" onClick={props.handleToggleBasket}>
          <FaTimes className="fa-times" />
        </button>
        <h1>Basket</h1>

        <DonutCardBasket basketContents={props.basketContents} />
        <h2>
          Subtotal:
          {props.basketContents.reduce((amount, item): number => {
            return amount + item.price;
          }, 0)}
        </h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
