import { SET_VEHICLES } from "./types";

const INITIAL_STATE = {};

const vehiclesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default vehiclesReducer;
