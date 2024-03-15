import { combineReducers } from "redux";
import postsReducer from "./idariBuro/reducers";
const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
