import { all } from "redux-saga/effects";

function* exampleSaga() {}

export default function* rootSaga() {
  yield all([exampleSaga()]);
}
