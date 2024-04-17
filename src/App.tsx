import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img src="https://images.tovisit.eu/tovisit/logo/png/logo-no-background.png" alt="Logo" />
        <div className="logo-text">
          <h1>Europe</h1>
          <p>Travel · Tours · Tips</p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          <div className="card" onClick={() => { window.open('http://museums.tovisit.eu', '_blank') }}>
            <img src="https://images.tovisit.eu/tovisit/cards/museums-low.jpeg" alt="Museums" />
            <div className="card-content">
              <h2>Museums <h6>museums.tovisit.eu</h6></h2>
              <p>A curated list of Museums and Galleries to visit in Europe</p>
            </div>
          </div>
          <div className="card" onClick={() => { window.open('http://bars.tovisit.eu', '_blank') }}>
            <img src="https://images.tovisit.eu/tovisit/cards/bars-low.jpeg" alt="Bars & Pubs" />
            <div className="card-content">
              <h2>Bars <h6>bars.tovisit.eu</h6></h2>
              <p>A curated list of Bars and Pubs to visit in Europe</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.tovisit.eu/tovisit/cards/restaurants-low.jpeg" alt="Restaurants" />
            <div className="card-content">
              <h2>Restaurants <h6>food.tovisit.eu</h6></h2>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
          <div className="card">
            <img src="https://t3.ftcdn.net/jpg/06/26/10/98/360_F_626109811_h85C075PLVfX4cc3FEMyYvBiKFfLRyY9.jpg" alt="Cafés" />
            <div className="card-content">
              <h2>Cafés <h6>cafes.tovisit.eu</h6></h2>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
          <div className="card">
            <img src="https://www.emeoutlookmag.com/media/ebds-top-10-places-to-visit-in-europe-1580454260.backgroundImage.2x-1536x884.webp" alt="Places" />
            <div className="card-content">
              <h2>Places <h6>places.tovisit.eu</h6></h2>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <footer>
        &copy; 2023 - {new Date().getFullYear()} tovisit.eu · <span onClick={() => { window.location.href = "https://github.com/ToVisit/tovisit.github.io/blob/main/LICENSE" }}>AGPL-3.0 License</span>
      </footer>
    </div>
  );
}

export default App;
