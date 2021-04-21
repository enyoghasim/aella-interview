import Axios from "../../../util/axios/axios";
import { setPlanets } from "./actions";

export const getPlanets = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setPlanets(data));
    } catch (error) {
      return error;
    }
  };
};
