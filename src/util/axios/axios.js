import API from "./axios.default.config";

class Axios {
  static handleGetRequest = async (payload) => {
    try {
      const response = await API.get(payload);
      console.log(response);
      return response;
    } catch (err) {
      return err;
    }
  };

  static handlePostRequest = async (path, payload) => {
    try {
      const { data } = await API.post(`users/${path}`, payload);
      return data;
    } catch (err) {
      return err;
    }
  };
  static handleDeleteRequest = async (payload) => {
    try {
      const { data } = await API.delete(`users/${payload}`);
      return data;
    } catch (err) {
      return err;
    }
  };
}

export default Axios;
