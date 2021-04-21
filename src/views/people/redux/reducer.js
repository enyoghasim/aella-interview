import { SET_PEOPLE } from "./types";

const INITIAL_STATE = {};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
