import { legacy_createStore as createStore } from "redux";
import { cardReducer } from "./cardReducer";
import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  card: cardReducer,
  counter: counterReducer,
});
export const store = createStore(rootReducer);
