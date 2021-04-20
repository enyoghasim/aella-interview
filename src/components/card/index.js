import React from "react";
import "./index.css";

const Card = ({ customClass, details }) => {
  return (
    <>
      <div className={`card-container ${customClass}`}>
        <div className="card-upper">
          <div className="card-title">{details?.title || "TITLE"}</div>
          <div className="card-description">
            <div className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              commodi laudantium quaerat pariatur expedita nesciunt, dolorem
              nobis maxime similique voluptate praesentium labore ad optio
              placeat? Blanditiis quae itaque mollitia dolorem voluptatibus
              quibusdam neque, repellendus ratione reprehenderit eum ut possimus
              quia explicabo reiciendis porro aut necessitatibus rem aliquid!
              Repudiandae, nemo iusto.
            </div>
          </div>
        </div>
        <div className="item-type">{details?.type || "FILMS"}</div>
      </div>
    </>
  );
};

export default Card;
