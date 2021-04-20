import { combineReducers } from "redux";
import selectReducer from "../views/ADDMTOITEMFORM/redux/selectlist/selectlist.reducers";
import LoginReducer from "../views/LOGIN/redux/login.reducer";
import registerReducer from "../views/REGISTER/redux/index.reducer";

const rootReducer = combineReducers({
  getUnits: selectReducer,
  logInUser: LoginReducer,
  registerUser: registerReducer,
});

export default rootReducer;
