import { SET_PLANETS } from "./types";

const INITIAL_STATE = {};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default planetsReducer;
