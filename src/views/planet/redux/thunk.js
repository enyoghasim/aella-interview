import Axios from "../../../util/axios/axios";
import { setPlanet } from "./actions";

export const getPlanet = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setPlanet(data));
    } catch (error) {
      return error;
    }
  };
};
