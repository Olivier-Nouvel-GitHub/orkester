import { all } from "redux-saga/effects";
import { watchFetchNews } from "../sagas/fechNewsSaga";

export default function* rootSaga() {
  yield all([watchFetchNews()]);
}
