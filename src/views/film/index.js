import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from "../../components/card/index";
import { getFilm } from "./redux/thunk";
import { getId, checkFavourite, favouitesHandler } from "../../util/helpers";
import {
  films,
  film,
  specie,
  vehicles,
  spaceship,
  planet,
  person,
} from "../../route";
import "./index.css";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";

const Film = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchFilm(userData);
  }
  const [item, setItem] = useState({});
  const handleClickChange = () => {
    setActive(!active);
    favouitesHandler(item);
  };
  const [active, setActive] = useState(false);

  useEffect(() => {
    handleAPICallToServer(`${films}/${props.match.params.id}`);
    console.log(">>>>>>>>", props);
    // setActive(checkFavourite(props.getFilm));
    // console.log(">>fav", checkFavourite(check));
    console.log("this is the item>>", item);
  }, []);
  return (
    <>
      <div className="films-page">
        {props.getFilm.title && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">
                {props.getFilm && props.getFilm.title}
              </div>
              <div className="film-description">
                {props.getFilm && props.getFilm.opening_crawl}
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {active ? (
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
              <div className="episode_id">
                Episode&nbsp;ID&nbsp;: {props.getFilm.episode_id}
              </div>
              <div className="director">
                Director&nbsp;: {props.getFilm.director}
              </div>
              <div className="producer">
                Producer&nbsp;: {props.getFilm.producer}
              </div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          {props.getFilm.species ? (
            <Card>
              <div className="character-header">Species</div>
              {props.getFilm.species.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${specie}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.vehicles ? (
            <Card>
              <div className="character-header">Vehicles</div>
              {props.getFilm.vehicles.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${vehicles}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.starships ? (
            <Card>
              <div className="character-header">Starships</div>
              {props.getFilm.starships.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${spaceship}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.planets ? (
            <Card>
              <div className="character-header">Planets</div>
              {props.getFilm.planets.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${planet}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getFilm.characters ? (
            <Card>
              <div className="character-header">Characters</div>
              {props.getFilm.characters.map((item, index) => (
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

Film.propTypes = {
  children: PropTypes.element,
};

const mapStateToProps = (state) => {
  return {
    getFilm: state.filmReducer.film,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilm: (payload) => dispatch(getFilm(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
