import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPeople } from "./redux/thunk";
import { getId } from "../../util/helpers";
import Card from "../../components/card";
import "./index.css";

const People = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchPeople(userData);
    console.log("response here ", props.getAllPeople.results);
  }
  useEffect(() => {
    handleAPICallToServer("people");
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllPeople.results &&
              props.getAllPeople.results.map((item, index) => (
                <Card key={index}>
                  <Link className="card-link" to={`/person/${getId(item.url)}`}>
                    <div className="character-header">{item.name}</div>
                    <div className="character">GENDER : {item.gender}</div>
                    <div className="character">BORN ON : {item.birth_year}</div>
                    <div className="character">HEIGHT : {item.height}</div>
                    <div className="character">
                      HAIR COLOR : {item.hair_color}
                    </div>
                    <div className="character">
                      SKIN COLOR : {item.skin_color}
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
    getAllPeople: state.peopleReducer.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: (payload) => dispatch(getPeople(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
