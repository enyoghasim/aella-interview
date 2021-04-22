import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";
import { getFavourites, getId } from "../../util/helpers";
import "./index.css";

const Favourites = () => {
  const [favourites, setFavourites] = useState(getFavourites());
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {favourites.length ? (
              favourites.map((item, index) => (
                <Card withRateIcons={true} item={item} key={index}>
                  <Link
                    className="card-link"
                    to={`${item.type}/${getId(item.url)}`}
                  >
                    <div className="character-header">{item.type}</div>
                    <div className="character">
                      NAME : {item.name || item.title}
                    </div>
                  </Link>
                </Card>
              ))
            ) : (
              <div>
                <h1>
                  PLEASE YOU HAVE NOT YET ADDED ANYTHING TO YOUR FAVOURITES
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
