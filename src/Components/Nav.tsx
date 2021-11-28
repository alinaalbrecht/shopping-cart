import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { FaShoppingBasket } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Nav = () => {
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
        <div className="basket-quantity">
          <FaShoppingBasket />
        </div>
      </div>
      <div className="hamburger-icon">
        <FaBars />
      </div>
    </nav>
  );
};

export default Nav;
