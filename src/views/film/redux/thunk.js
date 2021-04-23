import { setLoading } from "../../../redux/loading/actions";
import Axios from "../../../util/axios/axios";
import { setFilm } from "./actions";

export const getFilm = (url) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.handleGetRequest(url);
      dispatch(setFilm(data));
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(err))
      return err;
    }
  };
};
