import React from "react";

interface DonutCardProps {
  donuts: {
    name: string;
    price: number;
    image: string;
    index: number;
  }[];
  updateBasket: (index: number, increment: string) => React.MouseEventHandler;
}
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    index?: number;
  }
}

const DonutCard: React.FC<DonutCardProps> = (props) => {
  return (
    <>
      {props.donuts.map((donut) => {
        return (
          <div className="donut-item container" key={donut.index}>
            <div className="donut-image">
              <img src={donut.image} alt="" />
            </div>
            <p className="donut-name">{donut.name}</p>
            <p className="donut-price">{donut.price}€</p>
            <button
              className="small-button"
              index={donut.index}
              onClick={props.updateBasket(donut.index, "add")}
            >
              Add to Basket
            </button>
          </div>
        );
      })}
    </>
  );
};

export default DonutCard;
