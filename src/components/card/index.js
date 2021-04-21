import React from "react";
import "./index.css";

const Card = ({ children, customClass, details }) => {
  return (
    <>
      <div className="characters-section">
        <div className="card-main-inner-container">
          <div className="list-icon-card-main">
            <div className="icon-container-wrapper"></div>
            <div className="icon-container-wrapper"></div>
            <div className="icon-container-wrapper">
              {(true) ? (<span class="fa fa-heart checked"></span>) : (<span class="fa fa-heart"></span>)}
            </div>
          </div>
          <div className="child-main-contain">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
