import { SET_SPACESHIPS } from "./types";

const INITIAL_STATE = {};

const spaceShipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPACESHIPS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default spaceShipsReducer;
