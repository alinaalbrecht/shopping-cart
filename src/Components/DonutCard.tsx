import "../Styles/Shop.css";

interface DonutCardProps {
  donuts: object[];
}

const DonutCard: React.FC<DonutCardProps> = () => {
  return <div className="donut-item container"></div>;
};

export default DonutCard;
