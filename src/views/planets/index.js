import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card";
import { getPlanets } from "./redux/thunk";
import { getId } from "../../util/helpers";
import "./index.css";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";

const Planets = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchPlanets(userData);
  }
  useEffect(() => {
    handleAPICallToServer("planets");
    console.log(props.getAllPlanets.results);
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllPlanets?.results
              ? props.getAllPlanets?.results.map((item, index) => (
                  <Card withRateIcons={true} url={item.url} key={index}>
                    <Link
                      className="card-link"
                      to={`/planet/${getId(item.url)}`}
                    >
                      <div className="character-header">{item.name}</div>
                      <div className="character">
                        POPULATION : {item.population}
                      </div>
                      <div className="character">
                        ROTATION PERIOD : {item.rotation_period}
                      </div>
                      <div className="character">
                        ORBITAL PERIOD : {item.orbital_period}
                      </div>

                      <div className="character">
                        DIAMETER : {item.diameter}
                      </div>

                      <div className="character">TERRAIN : {item.terrain}</div>
                    </Link>
                  </Card>
                ))
              : [1, 2, 3, 4, 5, 6].map((item) => <CardLoder key={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getAllPlanets: state.planetsReducer.planets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlanets: (payload) => dispatch(getPlanets(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
