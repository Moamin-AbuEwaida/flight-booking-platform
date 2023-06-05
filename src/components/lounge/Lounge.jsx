import React from "react";
import seats from "../../assets/seats.jpg";
const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={seats} alt="seats" />
        </div>
        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favourite destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
