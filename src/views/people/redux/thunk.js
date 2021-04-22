import Axios from "../../../util/axios/axios";
import { setPeople } from "./actions";

export const getPeople = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setPeople(data));
    } catch (err) {
      return err;
    }
  };
};
