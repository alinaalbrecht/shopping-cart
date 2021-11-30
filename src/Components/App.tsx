import "../Styles/App.css";

function App() {
  return (
    <div className="App container">
      <img className="donut-hero" src="images/donut-hero.png" alt="" />
      <h1>The Donut Hole</h1>
      <p className="subtitle">visit us for a coffee and a donut</p>
      <button className="cta" data-name="menu" data-type="tab">
        Order Now
      </button>
      <div className="beige-area container">
        <h2>Our Locations</h2>
        <div className="locations">
          <div className="product-card">
            <img src="images/location-1.png" alt="" />
            <div className="location-info">
              <p className="large-black-text">South-West</p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Akazienstr. 2410823 Berlin-Schöneberg
              </p>
              <p>Tel.: 030-54309-207</p>
              <p>Opening hours: 9:00-18:00 Mon-Sun</p>
            </div>
          </div>
          <div className="product-card">
            <img src="images/location-2.png" alt="" />
            <div className="location-info">
              <p className="large-black-text">North East</p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Knaackstr. 41, 10435 Berlin–Prenzlauer Berg
              </p>
              <p>Tel.: 030-32608-406</p>
              <p>Opening hours: 9:00-18:00 Mon-Sun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
