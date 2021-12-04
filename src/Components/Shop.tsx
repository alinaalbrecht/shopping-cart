import "../Styles/Shop.css";
import DonutCard from "./DonutCard";

interface ShopProps {
  donuts: {
    name: string;
    price: string;
    image: string;
    index: number;
  }[];
  addToBasket: (index: number) => React.MouseEventHandler;
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
        <DonutCard donuts={props.donuts} addToBasket={props.addToBasket} />
      </div>
    </div>
  );
};

export default Shop;
