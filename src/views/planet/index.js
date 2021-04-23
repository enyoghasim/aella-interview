import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { getPlanet } from "./redux/thunk";
import { planets, planet, film, person } from "../../route";
import "./index.css";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import {
  dataFormat,
  getId,
  favouitesHandler,
  checkFavourite,
} from "../../util/helpers";

const Planet = (props) => {
  const [active, setActive] = useState(false);
  async function handleAPICallToServer(userData) {
    await props.fetchPlanet(userData);
  }
  const handleClickChange = () => {
    setActive(!active);
    favouitesHandler({ ...props.getOnePlanet, type: "planet" });
  };
  useEffect(() => {
    handleAPICallToServer(`${planets}/${props.match.params.id}`);
  }, []);
  return (
    <>
      <div className="films-page">
        {props.getOnePlanet.name && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">
                {props.getOnePlanet && props.getOnePlanet.name}
              </div>
              <div className="film-description">
                <div className="climate">
                  Climate&nbsp;: {props.getOnePlanet.climate}
                </div>
                <div className="diameter">
                  Diameter: {props.getOnePlanet.diameter}
                </div>
                <div className="gravity">
                  Gravity:&nbsp;{props.getOnePlanet.gravity}
                </div>
                <div className="orbital_period">
                  Orbital&nbsp;Period:&nbsp;{props.getOnePlanet.orbital_period}
                </div>
                <div className="created">
                  Created:&nbsp;{dataFormat(props.getOnePlanet.created)}
                </div>
                <div className="edited">
                  Edited:{dataFormat(props.getOnePlanet.edited)}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {checkFavourite(props.getOnePlanet) ? (
                  <span
                    onClick={handleClickChange}
                    className="fa fa-bookmark checked"
                  ></span>
                ) : (
                  <span
                    onClick={handleClickChange}
                    className="fa fa-bookmark"
                  ></span>
                )}
              </div>
              <div className="climate">
                Climate&nbsp;: {props.getOnePlanet.climate}
              </div>
              <div className="surface_water">
                Surface Water: {props.getOnePlanet.surface_water}
              </div>
              <div className="terrain">
                Terrain:&nbsp;{props.getOnePlanet.terrain}
              </div>
              <div className="terrain">
                Url:&nbsp;
                <Link to={`/${planet}/${props.match.params.id}`}>
                  {props.getOnePlanet.url}
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          {props.getOnePlanet?.films ? (
            <Card>
              <div className="character-header">Films</div>
              {props.getOnePlanet.films.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${film}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getOnePlanet?.residents ? (
            <Card>
              <div className="character-header">Residents</div>
              {props.getOnePlanet.residents.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${person}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getOnePlanet: state.planetReducer.planet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanet: (payload) => dispatch(getPlanet(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
