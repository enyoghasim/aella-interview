import { SET_SPECIE } from "./types";

const INITIAL_STATE = {};

const specieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPECIE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default specieReducer;
