import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FetchNewsRequestAction,
  FetchNewsSuccessAction,
  FetchNewsFailureAction,
} from "../../types/actionTypes";

import { NewsItemType } from "../../types/dataTypes";

export const fetchNewsRequest = (query: string): FetchNewsRequestAction => ({
  type: FETCH_NEWS_REQUEST,
  payload: { query },
});

export const fetchNewsSuccess = (
  articles: NewsItemType[]
): FetchNewsSuccessAction => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { articles },
});

export const fetchNewsFailure = (error: string): FetchNewsFailureAction => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});
