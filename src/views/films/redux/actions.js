import { SET_FILMS } from "./types";

export const setFilms = (payload) => {
  return {
    type: SET_FILMS,
    payload,
  };
};
