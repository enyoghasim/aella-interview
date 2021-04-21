import { SET_PERSON } from "./types";

const INITIAL_STATE = {};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERSON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default personReducer;
