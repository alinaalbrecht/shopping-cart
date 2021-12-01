import "../Styles/Shop.css";

interface DonutCardProps {
  donuts: {
    name: string;
    price: string;
    image: string;
  }[];
}

const DonutCard: React.FC<DonutCardProps> = (props) => {
  return (
    <>
      {props.donuts.map((donut) => {
        return (
          <div className="donut-item container">
            <div className="donut-image">
              <img src={donut.image} alt="" />
            </div>
            <div className="donuts-added inactive" data-quantity="0"></div>
            <p className="donut-name">{`${donut.name} ${donut.price}`}</p>
            <div className="quantity-selector" data-quantity="0">
              <div className="subtract">-</div>
              <div className="quantity inactive">0</div>
              <div className="add">+</div>
            </div>
            <button className="small-button" data-type="add-to-basket">
              Add to Basket
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DonutCard;
