import { SET_PLANET } from "./types";

const INITIAL_STATE = {};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLANET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default planetReducer;
