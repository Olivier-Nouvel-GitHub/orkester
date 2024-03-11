import { NewsItemType } from "./dataTypes";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export interface FetchNewsRequestAction {
  type: typeof FETCH_NEWS_REQUEST;
  payload: {
    query: string;
  };
}

export interface FetchNewsSuccessAction {
  type: typeof FETCH_NEWS_SUCCESS;
  payload: {
    articles: NewsItemType[];
  };
}

export interface FetchNewsFailureAction {
  type: typeof FETCH_NEWS_FAILURE;
  payload: string;
}

export type NewsActionTypes =
  | FetchNewsRequestAction
  | FetchNewsSuccessAction
  | FetchNewsFailureAction;
