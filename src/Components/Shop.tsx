import "../Styles/Shop.css";
import DonutCard from "./DonutCard";

interface Donut {
  name: string;
  price: string;
  image: string;
}

const Donuts: Donut[] = [
  {
    name: "Strawberry",
    price: "2€",
    image: "images/donut-red.png",
  },
  {
    name: "Chocolate",
    price: "2€",
    image: "images/brown-covered.png",
  },
  {
    name: "Peanut Butter Fudge",
    price: "2€",
    image: "images/brown-streaks.png",
  },
  {
    name: "Lemon",
    price: "2€",
    image: "images/sprinkles-white.png",
  },
  {
    name: "Cookies & Cream",
    price: "2€",
    image: "images/black-white.png",
  },
  {
    name: "Tangerine Swirl",
    price: "2€",
    image: "images/yellow-white-streaks.png",
  },
  {
    name: "Pink Frosting",
    price: "2€",
    image: "images/pink.png",
  },
];

const Shop: React.FC = () => {
  return (
    <div className="container">
      <h1>Our Menu</h1>
      <p className="subtitle">
        Either place an order online or visit us in person to try our tasty
        treats
      </p>
      <div className="product-grid">
        <DonutCard donuts={Donuts} />
      </div>
    </div>
  );
};

export default Shop;
