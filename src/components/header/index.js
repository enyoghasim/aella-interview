import React from "react";
// import Card from "../card";
import "./index.css";
import StarWarsLogo from "../../Asset/image/starwarslogo.png";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="image-area">
          <img className="starwars-logo" src={StarWarsLogo} alt="LOGO" />
        </div>
        <div className="navigation-area">
          <li className="nav-link">HOME</li>
          <li className="nav-link">PLANETS</li>
          <li className="nav-link">PEOPLE</li>
          <li className="nav-link">FILMS</li>
          <li className="nav-link">VEHICLES</li>
          <li className="nav-link">SPECIES</li>
          <li className="nav-link">SPACESHIPS</li>
          <li className="nav-link">FAVOURITES</li>
        </div>
      </div>
      {/* <Card /> */}
    </>
  );
};

export default Header;
