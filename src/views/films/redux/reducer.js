import { SET_FILMS } from "./types";

const INITIAL_STATE = {};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILMS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filmsReducer;
