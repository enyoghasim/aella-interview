import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { getSpaceship } from "./redux/thunk";
import { starship } from "../../route";
import "./index.css";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis
              quisquam fugit dolorum, rem beatae magnam culpa, voluptates harum
              exercitationem dolore est reiciendis tempora. Eius architecto esse
              suscipit deserunt quae numquam unde rem atque, quibusdam, iure
              voluptate est maiores delectus aliquid distinctio voluptatibus
              alias. Expedita ducimus ad explicabo dolores earum.
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
