import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./views/main";
import PlanetsPage from "./views/planets";
import PlanetPage from "./views/planet";
import PeoplesPage from "./views/people";
import PersonPage from "./views/person";
import SpeciesPage from "./views/species";
import SpeciePage from "./views/specie";
import VehiclesPage from "./views/vehicles";
import VehiclePage from "./views/vehicle";
import FilmsPage from "./views/films";
import Film from "./views/film";
import SpaceShipsPage from "./views/spaceships";
import SpaceShipPage from "./views/spaceship";
import FavouritesPage from "./views/favourites";

import {
  homeRoute,
  planetsRoute,
  planetRoute,
  peoplesRoute,
  peopleRoute,
  speciesRoute,
  specieRoute,
  vehiclesRoute,
  vehicleRoute,
  filmsRoute,
  filmRoute,
  spaceShipsRoute,
  spaceShipRoute,
  favouriteRoute,
} from "./route";



import store from "./redux/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App>
          <Switch>
            <Route exact path={homeRoute} component={LandingPage}></Route>
            <Route path={planetsRoute} component={PlanetsPage}></Route>
            <Route path={planetRoute} component={PlanetPage}></Route>
            <Route path={peoplesRoute} component={PeoplesPage}></Route>
            <Route path={peopleRoute} component={PersonPage}></Route>
            <Route path={speciesRoute} component={SpeciesPage}></Route>
            <Route path={specieRoute} component={SpeciePage}></Route>
            <Route path={vehiclesRoute} component={VehiclesPage}></Route>
            <Route path={vehicleRoute} component={VehiclePage}></Route>
            <Route path={filmsRoute} component={FilmsPage}></Route>
            <Route path={filmRoute} component={Film}></Route>
            <Route path={spaceShipsRoute} component={SpaceShipsPage}></Route>
            <Route path={spaceShipRoute} component={SpaceShipPage}></Route>
            <Route path={favouriteRoute} component={FavouritesPage}></Route>
          </Switch>
        </App>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
