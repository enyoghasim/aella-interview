import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import "./index.css";
import { getFilms } from "./redux/thunk";

const FilmList = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchFilms(userData);
  }
  useEffect(() => {
    handleAPICallToServer("films");
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="details-wrapper">
            {props.getAllFilms.results &&
              props.getAllFilms.results.map((item, index) => (
                <Card key={index}>
                  <div className="character-header">{item.title}</div>
                  <div className="character">{item.episode_id}</div>
                  <div className="character">{item.opening_crawl}</div>
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
    getAllFilms: state.filmsReducer.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilms: (payload) => dispatch(getFilms(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
