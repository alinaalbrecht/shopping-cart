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
            <p className="donut-name">{donut.name}</p>
            <p className="donut-price">{donut.price}</p>
            <button className="small-button">Add to Basket</button>
          </div>
        );
      })}
    </>
  );
};

export default DonutCard;
