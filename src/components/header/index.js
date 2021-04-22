import React, { useCallback, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
  spaceShipsRoute,
  speciesRoute,
  vehiclesRoute,
} from "../../route";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="header-section-wrapper-top-main-md">
          <div className="image-area">
            <img className="starwars-logo" src={StarWarsLogo} alt="LOGO" />
          </div>
          <button
            className="Header-link btn-link js-details-target"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <svg
              height="24"
              className="octicon octicon-three-bars"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="wrapper-dropdown-wrapper">
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
              <div className="dropdown"></div>
            </label>
          </div>
          <div className="navigation-area">
            <div className="nav-link">
              <Link className="link-list-item" to={homeRoute}>
                HOME
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={planetsRoute}>
                PLANETS
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={peoplesRoute}>
                PEOPLE
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={filmsRoute}>
                FILMS
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={vehiclesRoute}>
                VEHICLES
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={speciesRoute}>
                SPECIES
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={spaceShipsRoute}>
                SPACESHIPS
              </Link>
            </div>
            <div className="nav-link">
              <Link className="link-list-item" to={favouriteRoute}>
                FAVOURITES
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Card /> */}
    </>
  );
};

export default Header;
