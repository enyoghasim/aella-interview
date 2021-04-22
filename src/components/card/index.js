import React from "react";
import PropTypes from 'prop-types';
import "./index.css";

const Card = ({ children, withRateIcons, details }) => {
  return (
    <>
      <div className="characters-section">
        <div className="card-main-inner-container">
          {
            (withRateIcons) &&
            (<div className="list-icon-card-main">
              <div className="icon-container-wrapper"></div>
              <div className="icon-container-wrapper"></div>
              <div className="icon-container-wrapper">
                {true ? (
                  <span className="fa fa-heart checked"></span>
                ) : (
                  <span className="fa fa-heart"></span>
                )}
              </div>
            </div>)
          }
          <div className="child-main-contain">{children}</div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  withRateIcons: PropTypes.bool
}

export default Card;
