import React, { useState } from "react";
import PropTypes from "prop-types";
import { favouitesHandler, checkFavourite } from "../../util/helpers";
import "./index.css";

const Card = ({ children, item, customClass, withRateIcons }) => {
  const handleClickChange = () => {
    setActive(!active);
    favouitesHandler(item);
  };
  const check = item ? item : "";
  const [active, setActive] = useState(checkFavourite(check));
  return (
    <>
      <div className="characters-section">
        <div className="card-main-inner-container">
          {withRateIcons && (
            <div className="list-icon-card-main">
              <div className="icon-container-wrapper"></div>
              <div className="icon-container-wrapper"></div>
              <div
                className="icon-container-wrapper"
                onClick={handleClickChange}
              >
                {active ? (
                  <span className="fa fa-heart checked"></span>
                ) : (
                  <span className="fa fa-heart"></span>
                )}
              </div>
            </div>
          )}
          <div className="child-main-contain">{children}</div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  withRateIcons: PropTypes.bool,
};

export default Card;
