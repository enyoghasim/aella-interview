import Axios from "../../../util/axios/axios";
import { setPerson } from "./actions";

export const getPerson = (url) => {
  return async (dispatch) => {
    try {
      // dispatch(setLoading)
      const { data } = await Axios.handleGetRequest(url);
      // dispatch(setLoading)
      dispatch(setPerson(data));
    } catch (err) {
      return err;
    }
  };
};
