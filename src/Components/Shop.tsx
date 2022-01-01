import "../Styles/Shop.css";
import DonutCard from "./DonutCard";

interface ShopProps {
  donuts: {
    name: string;
    price: number;
    image: string;
    index: number;
  }[];
  updateBasket: (index: number, increment: string) => React.MouseEventHandler;
}
const Shop: React.FC<ShopProps> = (props) => {
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <p className="subtitle">
        Either place an order online or visit us in person to try our tasty
        treats
      </p>
      <div className="product-grid">
        <DonutCard donuts={props.donuts} updateBasket={props.updateBasket} />
      </div>
    </div>
  );
};

export default Shop;
