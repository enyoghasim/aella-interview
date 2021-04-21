import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card";
import { getVehicles } from "./redux/thunk";
import "./index.css";
import { dataFormat } from "../../util/helpers";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";

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
            {props?.getAllVehicles.results ?
              props?.getAllVehicles.results.map((item, index) => (
                <Card key={index}>
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
                </Card>
              )): [1, 2, 3, 4, 5, 6].map((item) => (<CardLoder key={item} />))}
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
