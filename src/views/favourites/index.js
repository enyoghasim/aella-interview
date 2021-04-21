import React from "react";
import Card from "../../components/card";
import "./index.css";

const Favourites = () => {
  return (<>
  <div className="films-page">
      <div className="film-details">
        <div className="details-wrapper">
          {
            [1, 2, 3, 4, 5, 6, 7].map((index) => (
              <Card key={index}>
                <div className="character-header">Favorites</div>
                <div className="character">https://starwars.com/ok.o</div>
                <div className="character">https://starwars.com/ok.o</div>
                <div className="character">https://starwars.com/ok.o</div>
                <div className="character">https://starwars.com/ok.o</div>
                <div className="character">https://starwars.com/ok.o</div>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  </>);
};

export default Favourites;
