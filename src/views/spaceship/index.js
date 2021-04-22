import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { getSpaceship } from "./redux/thunk";
import { starship } from "../../route";
import "./index.css";
import { dataFormat } from "../../util/helpers";

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
        <div className="film-details">
          <div className="left-section">
            <div className="header">
              {props.getOneSpaceShip && props.getOneSpaceShip.name}
            </div>
            <div className="film-description">
              <div className="cargo_capacity">Cargo&nbsp;Capacity&nbsp;: {props.getOneSpaceShip.cargo_capacity}</div>
              <div className="consumables">consumables&nbsp;{props.getOneSpaceShip.consumables}</div>
              <div className="cost_in_credits">Cost&nbsp;In&nbsp;Credits&nbsp;:{props.getOneSpaceShip.cost_in_credits}</div>
              <div className="crew">Crew&nbsp;: {props.getOneSpaceShip.crew}</div>
              <div className="passengers">Passengers&nbsp;On&nbsp;:{props.getOneSpaceShip.passengers}</div>
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
        <div className="details-wrapper">
          <Card>
            <div className="character-header">Vehicles</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
            <div className="character">https://starwars.com/ok.o</div>
          </Card>
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
