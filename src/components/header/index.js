import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import Card from "../card";
import "./index.css";
import StarWarsLogo from "../../Asset/image/starwarslogo.png";
import SearchComponent from "../../components/input/index";
import ButtonComponent from "../../components/button/index";
import {
  favouriteRoute,
  filmsRoute,
  homeRoute,
  peoplesRoute,
  planetsRoute,
  spaceShipRoute,
  spaceShipsRoute,
  speciesRoute,
  vehiclesRoute,
} from "../../route";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="image-area">
          <img className="starwars-logo" src={StarWarsLogo} alt="LOGO" />
        </div>
        <div className="search-component">
          <label className="search-label-wrapper-contain">
            <ButtonComponent
              btnCustomClassName="btn-custom-style"
              innerTextBtn="Search..."
            />
            <SearchComponent
              inputCustomClass="search-component-input"
              placeHolder="Search..."
            />
          </label>
        </div>
        <div className="navigation-area">
          <li className="nav-link">
            <Link className="link-list-item" to={homeRoute}>
              HOME
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={planetsRoute}>
              PLANETS
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={peoplesRoute}>
              PEOPLE
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={filmsRoute}>
              FILMS
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={vehiclesRoute}>
              VEHICLES
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={speciesRoute}>
              SPECIES
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={spaceShipsRoute}>
              SPACESHIPS
            </Link>
          </li>
          <li className="nav-link">
            <Link className="link-list-item" to={favouriteRoute}>
              FAVOURITES
            </Link>
          </li>
        </div>
      </div>
      {/* <Card /> */}
    </>
  );
};

export default Header;
