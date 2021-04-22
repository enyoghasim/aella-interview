import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/card/index";
import { getPerson } from "./redux/thunk";
import {
  people,
  film,
  specie,
  spaceship,
  vehicles,
  planet,
  baseUrl,
} from "../../route";
import "./index.css";
import { dataFormat, getId } from "../../util/helpers";
import CardLoder from "../../components/card/skelecton/index.card.skelecton";

const Person = (props) => {
  async function handleAPICallToServer(userData) {
    await props.fetchPerson(userData);
  }
  useEffect(() => {
    handleAPICallToServer(`${people}/${props.match.params.id}`);
  }, []);
  return (
    <>
      <div className="films-page">
        <div className="film-details">
          <div className="left-section">
            <div className="header">
              {props.getOnePerson && props.getOnePerson.name}
            </div>
            <div className="film-description">
              <div className="eye-color">
                Birth&nbsp;Year&nbsp;: {props.getOnePerson.birth_year}
              </div>
              <div className="homeworld">
                Hair&nbsp;Color:&nbsp;{props.getOnePerson.hair_color}
              </div>
              <div className="created-date">
                Mass&nbsp;:{props.getOnePerson.mass}
              </div>
              <div className="height">
                Edited&nbsp;: {dataFormat(props.getOnePerson.edited)}
              </div>
              <div className="created-date">
                Created&nbsp;On&nbsp;:{dataFormat(props.getOnePerson.created)}
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
            <div className="height">
              Height&nbsp;: {props.getOnePerson.height}
            </div>
            <div className="eye-color">
              Eye&nbsp;Color&nbsp;: {props.getOnePerson.eye_color}
            </div>
            <div className="homeworld">
              Homeworld:&nbsp;
              <Link
                to={`/${planet}/${getId(props.getOnePerson.homeworld)}`}
              >{`${baseUrl}${planet}/${getId(
                props.getOnePerson.homeworld
              )}`}</Link>
            </div>
            <div className="homeworld">
              Gender:&nbsp;{props.getOnePerson.gender}
            </div>
            <div className="created-date">
              Skin&nbsp;Color&nbsp;:{props.getOnePerson.skin_color}
            </div>
          </div>
        </div>
        <div className="details-wrapper">
          {props.getOnePerson.vehicles ? (
            <Card>
              <div className="character-header">Vehicles</div>
              {props.getOnePerson.vehicles.map((item, index) => (
                <div key={index} className="character">
                  <Link
                    to={`/${vehicles}/${getId(item)}`}
                  >{`${baseUrl}${vehicles}/${getId(item)}`}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}
          {props.getOnePerson.films ? (
            <Card>
              <div className="character-header">Films</div>
              {props.getOnePerson.films.map((item, index) => (
                <div key={index} className="character">
                  <Link
                    to={`/${film}/${getId(item)}`}
                  >{`${baseUrl}${film}/${getId(item)}`}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}

          {props.getOnePerson.starships ? (
            <Card>
              <div className="character-header">Starships</div>
              {props.getOnePerson.starships.map((item, index) => (
                <div key={index} className="character">
                  <Link
                    to={`/${spaceship}/${getId(item)}`}
                  >{`${baseUrl}${spaceship}/${getId(item)}`}</Link>
                </div>
              ))}
            </Card>
          ) : (
            <CardLoder />
          )}

          {props.getOnePerson.species ? (
            <Card>
              <div className="character-header">Species</div>
              {props.getOnePerson.species.map((item, index) => (
                <div key={index} className="character">
                  <Link
                    to={`/${specie}/${getId(item)}`}
                  >{`${baseUrl}${specie}/${getId(item)}`}</Link>
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
    getOnePerson: state.personReducer.person,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPerson: (payload) => dispatch(getPerson(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
