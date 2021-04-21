import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { dataFormat } from "../../util/helpers";
import { getFilms } from "./redux/thunk";
import "./index.css";

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
            {props.getAllFilms?.results &&
              props.getAllFilms.results.map((item, index) => (
                <Card key={index}>
                  <div className="character-header">{item.title}</div>
                  <div className="character">
                    EPISODE ID : {item.episode_id}
                  </div>
                  <div className="character">{item.opening_crawl}</div>
                  <div className="footer-container">
                    <div className="footer-main-item">
                      <span className="label-span">Created:</span>
                      {dataFormat(item.created)}
                    </div>
                    <div className="footer-main-item">
                      <span className="label-span">Director:</span>
                      {item.director}
                    </div>
                    <div className="footer-main-item">
                      <span className="label-span">Producer:</span>
                      {item.producer}
                    </div>
                    <div className="footer-main-item">4</div>
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
    getAllFilms: state.filmsReducer.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilms: (payload) => dispatch(getFilms(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
