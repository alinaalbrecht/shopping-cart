import { Link } from "react-router-dom";
import "../Styles/App.css";
import LocationCard from "./LocationCard";

const App: React.FC = () => {
  const locations = [
    {
      image: "images/location-1.png",
      location: "South-West",
      address: "Akazienstr. 2410823 Berlin-Schöneberg",
      phone: "Tel.: 030-54309-207",
      openingHours: "Opening hours: 9:00-18:00 Mon-Sun",
    },
    {
      image: "images/location-2.png",
      location: "North East",
      address: "Knaackstr. 41, 10435 Berlin–Prenzlauer Berg",
      phone: "Tel.: 030-32608-406",
      openingHours: "Opening hours: 9:00-18:00 Mon-Sun",
    },
  ];
  return (
    <div className="App container">
      <img className="donut-hero" src="images/donut-hero.png" alt="" />
      <h1>The Donut Hole</h1>
      <p className="subtitle">visit us for a coffee and a donut</p>
      <Link to="/shop">
        <button className="cta">Order Now</button>
      </Link>
      <div className="beige-area container">
        <h2>Our Locations</h2>
        <div className="locations">
          <LocationCard locations={locations} />
        </div>
      </div>
    </div>
  );
};

export default App;
