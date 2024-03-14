import { call, put, takeEvery, Effect } from "redux-saga/effects";
import { select } from "redux-saga/effects";

// Worker saga qui va exécuter l'appel API
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_MORE_DATA,
  FETCH_MORE_DATA_FAILURE,
  FETCH_MORE_DATA_SUCCESS,
} from "../../types/actionTypes";

import { fetchNewsRequest, fetchMoreData } from "../actions/newsAction";

// Fonctions pour les appels API
function fetchArticles(query: string, page: number): Promise<any> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}?q=${query}&page=${page}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
  return fetch(apiUrl).then((response) => response.json());
}

// Worker saga : sera déclenchée lors de l'action appellée
function* fetchNewsSaga(
  action: ReturnType<typeof fetchNewsRequest>
): Generator<Effect, void, any> {
  try {
    const data = yield call(
      fetchArticles,
      action.payload.query,
      action.payload.page
    );
    yield put({
      type: FETCH_NEWS_SUCCESS,
      payload: { articles: data.articles, page: action.payload.page },
    });
  } catch (e) {
    yield put({ type: FETCH_NEWS_FAILURE, payload: e.message });
  }
}

function* fetchMoreDataSaga(
  action: ReturnType<typeof fetchMoreData>
): Generator<Effect, void, any> {
  try {
    const query = yield select((state) => state.news.query); // On accède à la query de l'user dans le store
    const page = yield select((state) => state.news.page);
    const nextPageData = yield call(fetchArticles, query, page);
    yield put({
      type: FETCH_MORE_DATA_SUCCESS,
      payload: { articles: nextPageData.articles },
    });
  } catch (e) {
    yield put({ type: FETCH_MORE_DATA_FAILURE, payload: e.message });
  }
}

// Watcher sagas
export function* watchFetchNews() {
  yield takeEvery(FETCH_NEWS_REQUEST, fetchNewsSaga);
}

export function* watchFetchMoreData() {
  yield takeEvery(FETCH_MORE_DATA, fetchMoreDataSaga);
}
