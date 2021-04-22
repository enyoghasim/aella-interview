import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import "./index.css";
import { getVehicle } from "./redux/thunk";
import { vehicle, vehicles, person, film, baseUrl } from "../../route";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { dataFormat, getId } from "../../util/helpers";

const Vehicle = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchVehicle(userData);
  }
  useEffect(() => {
    handleAPICallToServer(`${vehicle}/${props.match.params.id}`);
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="left-section">
            <div className="header">
              {props.getVehicle && props.getVehicle.name}
            </div>
            <div className="film-description">
              <div className="url">Length&nbsp;: {props.getVehicle.length}</div>
              <div className="max_atmosphering_speed">
                Max&nbsp;Atmosphering&nbsp;Speed&nbsp;:{" "}
                {props.getVehicle.max_atmosphering_speed}
              </div>
              <div className="cost_in_credits">
                Cost&nbsp;In&nbsp;Credits&nbsp;:{" "}
                {props.getVehicle.cost_in_credits}
              </div>
              <div className="consumables">
                Consumables&nbsp;: {props.getVehicle.consumables}
              </div>
              <div className="crew">Crew&nbsp;: {props.getVehicle.crew}</div>
              <div className="edited">
                Edited&nbsp;: {dataFormat(props.getVehicle.edited)}
              </div>
              <div className="created">
                Created&nbsp;: {dataFormat(props.getVehicle.created)}
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="rating-wrapper-contain">
              Rate:
              {true ? (
                <span className="fa fa-heart checked"></span>
              ) : (
                <span className="fa fa-heart"></span>
              )}
            </div>
            <div className="url">Url&nbsp;: </div>
            {/* {props.getVehicle.url} */}
            <div className="passengers">
              Passengers&nbsp;: {props.getVehicle.passengers}
            </div>
            <div className="cost_in_credits">
              Cost&nbsp;In&nbsp;Credits&nbsp;:{" "}
              {props.getVehicle.cost_in_credits}
            </div>
            <div className="model">Model&nbsp;: {props.getVehicle.model}</div>
            <div className="manufacturer">
              Manufacturer&nbsp;: {props.getVehicle.manufacturer}
            </div>
            <div className="vehicle_class">
              Vehicle&nbsp;Class&nbsp;: {props.getVehicle.vehicle_class}
            </div>
          </div>
        </div>
        <div className="details-wrapper">
          {props.getVehicle.pilots ? (
            <Card>
              <div className="character-header">Pilots</div>
              {props.getVehicle.pilots.map((item, index) => (
                <div key={index} className="character">
                  {item}
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getVehicle.films ? (
            <Card>
              <div className="character-header">Films</div>
              {props.getVehicle.films.map((item, index) => (
                <div key={index} className="character">
                  {item}
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
    getVehicle: state.vehicleReducer.vehicle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVehicle: (payload) => dispatch(getVehicle(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
