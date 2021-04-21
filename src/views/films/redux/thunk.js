import Axios from "../../../util/axios/axios";
import { setFilms } from "./actions";

export const getFilms = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setFilms(data));
    } catch (error) {
      return error;
    }
  };
};
