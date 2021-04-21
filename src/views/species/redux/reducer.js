import { SET_SPECIES } from "./types";

const INITIAL_STATE = {};

const speciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default speciesReducer;
