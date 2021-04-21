import Axios from "../../../util/axios/axios";
import { setFilm } from "./actions";

export const getFilm = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setFilm(data));
    } catch (error) {
      throw new error(error);
    }
  };
};
