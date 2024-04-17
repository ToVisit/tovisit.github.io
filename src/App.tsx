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
              <h2>Museums</h2>
              <h6>museums.tovisit.eu</h6>
              <p>Explore Europe's Finest Museums & Galleries: A Curated Guide</p>
            </div>
          </div>
          <div className="card" onClick={() => { window.open('http://bars.tovisit.eu', '_blank') }}>
            <img src="https://images.tovisit.eu/tovisit/cards/bars-low.jpeg" alt="Bars & Pubs" />
            <div className="card-content">
              <h2>Bars</h2>
              <h6>bars.tovisit.eu</h6>
              <p>Explore Europe's Best: Our Curated List of Top Bars & Pubs</p>
            </div>
          </div>
          <div className="card">
            <img src="https://images.tovisit.eu/tovisit/cards/restaurants-low.jpeg" alt="Restaurants" />
            <div className="card-content">
              <h2>Restaurants</h2>
              <h6>food.tovisit.eu</h6>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
          <div className="card">
            <img src="https://images.tovisit.eu/tovisit/cards/cafes-low.jpeg" alt="Cafés" />
            <div className="card-content">
              <h2>Cafés</h2>
              <h6>cafes.tovisit.eu</h6>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
          <div className="card">
            <img src="https://images.tovisit.eu/tovisit/cards/lakes-low.jpeg" alt="Lakes" />
            <div className="card-content">
              <h2>Lakes</h2>
              <h6>lakes.tovisit.eu</h6>
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
