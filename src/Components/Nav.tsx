import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

interface NavProps {
  handleToggleBasket: () => void;
  basketContents: {
    name: string;
    price: number;
    image: string;
    index: number;
    quantity: number;
  }[];
}

const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav>
      <Link to="/">
        <img className="donut-logo" src="images/donut-logo.png" alt=""></img>
      </Link>
      <div className="nav-tabs">
        <div className="tab"></div>
        <div className="tab">
          <Link to="/">Home</Link>
        </div>
        <div className="tab">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="basket-nav" onClick={props.handleToggleBasket}>
          {props.basketContents.length > 0 && (
            <div className="basket-quantity">
              {
                /* props.basketContents.length */
                props.basketContents.reduce((amount, donut) => {
                  console.log(amount);
                  return (amount += donut.quantity);
                }, 0)
              }
            </div>
          )}
          <FaShoppingBasket className="shopping-basket" />
        </div>
      </div>
      <div className="hamburger-icon">
        <FaBars />
      </div>
    </nav>
  );
};

export default Nav;
