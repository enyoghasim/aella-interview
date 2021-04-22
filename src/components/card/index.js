import React from "react";
import { favouitesHandler, checkFavourite } from "../../util/helpers";
import "./index.css";

const Card = ({ children, url, customClass, details }) => {
  return (
    <>
      <div className="characters-section">
        <div className="card-main-inner-container">
          <div className="list-icon-card-main">
            <div className="icon-container-wrapper"></div>
            <div className="icon-container-wrapper"></div>
            <div
              className="icon-container-wrapper"
              onClick={() => favouitesHandler(url)}
            >
              {checkFavourite(url) ? (
                <span className="fa fa-heart checked"></span>
              ) : (
                <span className="fa fa-heart"></span>
              )}
            </div>
          </div>
          <div className="child-main-contain">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
