import React from "react";
import Paris from "../../assets/paris.jpg";
import Dubai from "../../assets/dubai.jpg";
import Newyork from "../../assets/newyork.jpg";
import London from "../../assets/london.jpg";
import T1 from "../../assets/traveler1.jpg";
import T2 from "../../assets/traveler2.jpg";
import T3 from "../../assets/traveler3.jpg";
import T4 from "../../assets/traveler4.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: Paris,
    travelerImage: T1,
    travelerName: "ABCD EFGH",
    socialLink: "@abcdefgh",
  },
  {
    id: 2,
    destinationImage: Dubai,
    travelerImage: T2,
    travelerName: "EFGH ABCD",
    socialLink: "@efghabcd",
  },
  {
    id: 3,
    destinationImage: Newyork,
    travelerImage: T3,
    travelerName: "SHeko Piko",
    socialLink: "@shekop",
  },
  {
    id: 4,
    destinationImage: London,
    travelerImage: T4,
    travelerName: "Piko Piko",
    socialLink: "@pikop",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>
        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div className="singleTraveler" key={id}>
                  <img
                    src={destinationImage}
                    alt="trip"
                    className="destinationImage"
                  />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt="t1"
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
