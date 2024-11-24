import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img src="https://tovisit.github.io/images/tovisit/logo/png/logo-no-background.png" alt="Logo" />
        <div className="logo-text">
          <h1>Europe</h1>
          <p>Travel · Tours · Tips</p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          <div className="card selectable" onClick={() => { window.open('https://maps.app.goo.gl/33MfBF8N7miEF7s17', '_blank') }}>
            <img src="https://tovisit.github.io/images/tovisit/cards/museums-low.jpeg" alt="Museums" />
            <div className="card-content">
              <h2 style={{fontFamily: 'Style Script, cursive'}}>Museums</h2>
              <p>Explore Europe's Finest Museums & Galleries: A Curated Guide</p>
            </div>
          </div>
          <div className="card selectable" onClick={() => { window.open('https://maps.app.goo.gl/8hD7Bncaxw2CeN4y7', '_blank') }}>
            <img src="https://tovisit.github.io/images/tovisit/cards/bars-low.jpeg" alt="Bars & Pubs" />
            <div className="card-content">
              <h2 style={{fontFamily: 'Style Script, cursive'}}>Bars</h2>
              <p>Unwind in Style: Explore Europe's Top Bars and Pubs from Trendy Hangouts to Timeless Classics</p>
            </div>
          </div>
          <div className="card selectable" onClick={() => { window.open('https://maps.app.goo.gl/RVCvuXx59VreMCr3A', '_blank') }}>
            <img src="https://tovisit.github.io/images/tovisit/cards/restaurants-low.jpeg" alt="Restaurants" />
            <div className="card-content">
              <h2 style={{fontFamily: 'Style Script, cursive'}}>Restaurants</h2>
              <p>Discover Europe's Best Restaurants: From Cozy Hidden Gems to Luxurious Fine Dining Experiences</p>
              <br/>
            </div>
          </div>
          <div className="card coming-soon">
            <img src="https://tovisit.github.io/images/tovisit/cards/cafes-low.jpeg" alt="Cafés" />
            <div className="card-content">
              <h2 style={{fontFamily: 'Style Script, cursive'}}>Cafés</h2>
              <p>Coming Soon</p>
              <br/>
            </div>
          </div>
          {/* <div className="card coming-soon">
            <img src="https://tovisit.github.io/images/tovisit/cards/lakes-low.jpeg" alt="Lakes" />
            <div className="card-content">
              <h2>Lakes</h2>
              <h5>Coming Soon</h5>
              <br/>
            </div>
          </div> */}
        </div>
      </div>
      <footer>
        &copy; 2023 - {new Date().getFullYear()} · <span onClick={() => { window.location.href = "https://github.com/ToVisit/tovisit.github.io/blob/main/LICENSE" }}>AGPL-3.0 License</span>
      </footer>
    </div>
  );
}

export default App;
