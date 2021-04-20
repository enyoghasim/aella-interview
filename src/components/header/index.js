import React from "react";
import StarWarsLogo from "../../Asset/image/starwarslogo.png";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <img src={StarWarsLogo} alt="LOGO" />
      </div>
    </>
  );
};

export default Header;
