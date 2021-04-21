import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card";
import { dataFormat } from "../../util/helpers";
import { getSpaceships } from "./redux/thunk";
import "./index.css";

const SpaceShips = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchSpaceships(userData);
  }
  useEffect(() => {
    handleAPICallToServer("starships");
  }, []);

  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllSpacehips?.results &&
              props.getAllSpacehips?.results.map((item, index) => (
                <Card key={index}>
                  <div className="character-name">
                    MANUFACTURER : {item.name}
                  </div>
                  <div className="character">
                    MANUFACTURER : {item.manufacturer}
                  </div>
                  <div className="character">MODEL : {item.model}</div>
                  <div className="character">CREW : {item.crew}</div>
                  <div className="character">
                    CAPACITY : {item.cargo_capacity}
                  </div>
                  <div className="character">
                    PRICE : {item.cost_in_credits}
                  </div>
                  <div className="character">
                    CREATED ON : {dataFormat(item.created)}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAllSpacehips: state.spaceShipsReducer.spaceships,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpaceships: (payload) => dispatch(getSpaceships(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShips);
