import {combineReducers} from "redux";
import product from "./product";
import search from "./search";

const rootReducer = combineReducers({
  product,
  search,
});

export default rootReducer;