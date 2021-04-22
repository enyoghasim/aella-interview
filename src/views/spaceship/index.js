import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { getSpaceship } from "./redux/thunk";
import { starship, person, film } from "../../route";
import "./index.css";
import { getId } from "../../util/helpers";

const SpaceShip = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchSpaceship(userData);
  }
  useEffect(() => {
    handleAPICallToServer(`${starship}/${props.match.params.id}`);
  }, []);

  return (
    <>
      <div className="films-page">
        {props.getOneSpaceShip.name && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">
                {props.getOneSpaceShip && props.getOneSpaceShip.name}
              </div>
              <div className="film-description">
                <div className="cargo_capacity">
                  Cargo&nbsp;Capacity&nbsp;:{" "}
                  {props.getOneSpaceShip.cargo_capacity}
                </div>
                <div className="consumables">
                  consumables&nbsp;{props.getOneSpaceShip.consumables}
                </div>
                <div className="cost_in_credits">
                  Cost&nbsp;In&nbsp;Credits&nbsp;:
                  {props.getOneSpaceShip.cost_in_credits}
                </div>
                <div className="crew">
                  Crew&nbsp;: {props.getOneSpaceShip.crew}
                </div>
                <div className="passengers">
                  Passengers&nbsp;On&nbsp;:{props.getOneSpaceShip.passengers}
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="rating-wrapper-contain">
                Rate:
                {true ? (
                  <span className="fa fa-bookmark checked"></span>
                ) : (
                  <span className="fa fa-bookmark"></span>
                )}
              </div>
              <div className="director">Directed By : John Hawking</div>
              <div className="producer">Produced By : Corner cole</div>
              <div className="release-date">Released On : 21-44-5890</div>
            </div>
          </div>
        )}
        <div className="details-wrapper">
          <div className="details-wrapper">
            {props.getOneSpaceShip.pilots ? (
              <Card>
                <div className="character-header">Pilots</div>
                {props.getOneSpaceShip.pilots.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${person}/${getId(item)}`}>{item}</Link>
                  </div>
                ))}
              </Card>
            ) : (
              <CardLoder />
            )}
            {props.getOneSpaceShip.films ? (
              <Card>
                <div className="character-header">People</div>
                {props.getOneSpaceShip.films.map((item, index) => (
                  <div key={index} className="character">
                    <Link to={`/${film}/${getId(item)}`}>{item}</Link>
                  </div>
                ))}
              </Card>
            ) : (
              <CardLoder />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getOneSpaceShip: state.spaceshipReducer.spaceship,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpaceship: (payload) => dispatch(getSpaceship(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShip);
