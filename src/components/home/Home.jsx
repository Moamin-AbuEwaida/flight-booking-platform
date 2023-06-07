import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Plane from "../../assets/flight.png";
import video from "../../assets/video.mp4";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={Plane} alt="plane" className="plane" />
      </div>
    </div>
  );
};

export default Home;
