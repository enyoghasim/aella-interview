import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card";
import { getVehicles } from "./redux/thunk";
import "./index.css";
import { dataFormat, getId } from "../../util/helpers";

const Vehicles = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchVehicles(userData);
  }
  useEffect(() => {
    handleAPICallToServer("vehicles");
  }, []);

  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props?.getAllVehicles.results &&
              props?.getAllVehicles.results.map((item, index) => (
                <Card key={index}>
                  <Link
                    className="card-link"
                    to={`/vehicle/${getId(item.url)}`}
                  >
                    <div className="character-header">{item.name}</div>
                    <div className="character">
                      MANUFACTURER : {item.manufacturer}
                    </div>
                    <div className="character">MODEL : {item.model}</div>
                    <div className="character">CREW : {item.crew}</div>
                    <div className="character">CAPACITY : {item.capacity}</div>
                    <div className="character">
                      PRICE : {item.cost_in_credits}
                    </div>
                    <div className="character">
                      CREATED ON : {dataFormat(item.created)}
                    </div>
                  </Link>
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
    getAllVehicles: state.vehiclesReducer.vehicles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVehicles: (payload) => dispatch(getVehicles(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
