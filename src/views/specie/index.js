import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/index";
import { getSpecie } from "./redux/thunk";
import { species, film, planet, person, specie } from "../../route";
import "./index.css";
import { connect } from "react-redux";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";
import { dataFormat, getId } from "../../util/helpers";

const Specie = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchSpecie(userData);
  }
  useEffect(() => {
    handleAPICallToServer(`${species}/${props.match.params.id}`);
  }, []);
  return (
    <>
      <div className="films-page">
        {props.getSpecie.homeworld && (
          <div className="film-details">
            <div className="left-section">
              <div className="header">
                {props.getSpecie && props.getSpecie.name}
              </div>
              <div className="film-description">
                <div className="eye-color">
                  Eye&nbsp;Colors&nbsp;: {props.getSpecie.eye_colors}
                </div>
                <div className="hair_colors">
                  Hair&nbsp;Color:&nbsp;{props.getSpecie.hair_colors}
                </div>
                <div className="skin_colors">
                  Skin&nbsp;Colors&nbsp;:{props.getSpecie.skin_colors}
                </div>
                <div className="language">
                  Language&nbsp;:{props.getSpecie.language}
                </div>
                <div className="average_lifespan">
                  Average&nbsp;Lifespan&nbsp;:{" "}
                  {props.getSpecie.average_lifespan}
                </div>
                <div className="average_height">
                  Average&nbsp;Height&nbsp;:{props.getSpecie.average_height}
                </div>
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
              <div className="homeworld">
                Homeworld&nbsp;:
                {props.getSpecie.homeworld && (
                  <Link to={`/${planet}/${getId(props.getSpecie.homeworld)}`}>
                    {props.getSpecie.homeworld}
                  </Link>
                )}
              </div>
              <div className="designation">
                Designation&nbsp;: {props.getSpecie.designation}
              </div>
              <div className="classification">
                Classification&nbsp;:{props.getSpecie.classification}
              </div>
              <div className="url">
                URL&nbsp;:&nbsp;
                {props.getSpecie.url && (
                  <Link to={`/${specie}/${getId(props.getSpecie.url)}`}>
                    {props.getSpecie.url}
                  </Link>
                )}
              </div>
              <div className="edited">
                Edited&nbsp;: {dataFormat(props.getSpecie.edited)}
              </div>
              <div className="created-date">
                Created&nbsp;On&nbsp;:{dataFormat(props.getSpecie.created)}
              </div>
              {/*  */}
            </div>
          </div>
        )}
        <div className="details-wrapper">
          {props.getSpecie.films ? (
            <Card>
              <div className="character-header">Films</div>
              {props.getSpecie.films.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${film}/${getId(item)}`}>{item}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getSpecie.people ? (
            <Card>
              <div className="character-header">People</div>
              {props.getSpecie.people.map((item, index) => (
                <div key={index} className="character">
                  <Link to={`/${film}/${getId(item)}`}>{item}</Link>
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
    getSpecie: state.specieReducer.specie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpecie: (payload) => dispatch(getSpecie(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specie);
