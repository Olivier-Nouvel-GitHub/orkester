import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../store/slices/newsSlices";

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
