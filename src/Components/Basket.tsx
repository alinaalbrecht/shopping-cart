import "../Styles/Basket.css";

interface BasketProps {
  handleToggleBasket: () => void;
}

const Basket: React.FC<BasketProps> = (props) => {
  return (
    <div className="basket">
      <div className="overlay"></div>
      <div className="basket-overview">
        <button onClick={props.handleToggleBasket}>close</button>
        <h1>Basket</h1>
      </div>
    </div>
  );
};

export default Basket;
