import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../slices/newsSlices";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
