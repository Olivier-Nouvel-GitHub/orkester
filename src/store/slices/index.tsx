import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./testSlices";

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
