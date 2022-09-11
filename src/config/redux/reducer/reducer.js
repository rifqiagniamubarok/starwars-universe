import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import filmReducer from "./filmReducer";
import characterReducer from "./characterReducer";
import planetReducer from "./planetReducer";

const reducer = combineReducers({
  globalReducer,
  filmReducer,
  characterReducer,
  planetReducer,
});

export default reducer;
