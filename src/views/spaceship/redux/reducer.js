import { SET_SPACESHIP } from "./types";

const INITIAL_STATE = {};

const spaceshipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPACESHIP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default spaceshipReducer;
