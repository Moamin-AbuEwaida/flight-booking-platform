import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import Logo from "../../assets/paper-plane-icon.jpeg";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" /> Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className="navBarTwo">
        <div className="logoDiv">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className={active} onClick={removeNavBar}>
          <ul className="menu flex">
            <li className="listItem" onClick={removeNavBar}>
              Home
            </li>
            <li className="listItem" onClick={removeNavBar}>
              About
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Offers
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Seats
            </li>
            <li className="listItem" onClick={removeNavBar}>
              Destinations
            </li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div className="toggleIcon" onClick={showNavBar}>
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
