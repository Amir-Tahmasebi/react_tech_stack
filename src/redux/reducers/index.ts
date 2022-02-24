import { combineReducers } from "redux";
import layoutReducer from "./../../state/reducer";

const reducers = combineReducers({
  data: layoutReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>