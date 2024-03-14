import { all } from "redux-saga/effects";
import { watchFetchNews, watchFetchMoreData } from "../sagas/fechNewsSaga";

export default function* rootSaga() {
  yield all([watchFetchNews(), watchFetchMoreData()]);
}
