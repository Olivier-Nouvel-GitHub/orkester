import { call, put, takeEvery, Effect } from "redux-saga/effects";

// Worker saga qui va exécuter l'appel API
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../../types/actionTypes";

import { fetchNewsRequest } from "../actions/newsAction";

// Fonction pour effectuer l'appel API
function fetchNewsApi(query: string) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}?q=${query}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
  return fetch(apiUrl).then((response) => response.json());
}

// Worker saga : sera déclenchée lors de l'action FETCH_NEWS_REQUEST
function* fetchNewsSaga(
  action: ReturnType<typeof fetchNewsRequest>
): Generator<Effect, void, any> {
  try {
    const data = yield call(fetchNewsApi, action.payload.query);
    yield put({
      type: FETCH_NEWS_SUCCESS,
      payload: { articles: data.articles },
    });
  } catch (e) {
    yield put({ type: FETCH_NEWS_FAILURE, payload: e.message });
  }
}

// Watcher saga : déclenche une action FETCH_NEWS_REQUEST
export function* watchFetchNews() {
  yield takeEvery(FETCH_NEWS_REQUEST, fetchNewsSaga);
}
