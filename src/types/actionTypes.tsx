import { NewsItemType } from "./dataTypes";
export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const FETCH_MORE_DATA = "FETCH_MORE_DATA";
export const FETCH_MORE_DATA_SUCCESS = "FETCH_MORE_DATA_SUCCESS";
export const FETCH_MORE_DATA_FAILURE = "FETCH_MORE_DATA_FAILURE";

export interface FetchNewsRequestAction {
  type: typeof FETCH_NEWS_REQUEST;
  payload: {
    query: string;
    page: number;
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
  payload: {
    error: string;
  };
}

export interface FetchMoreDataAction {
  type: typeof FETCH_MORE_DATA;
  payload: {
    articles: NewsItemType[];
  };
}

export interface FetchMoreDataSuccessAction {
  type: typeof FETCH_MORE_DATA_SUCCESS;
  payload: {
    articles: NewsItemType[];
    page: number;
  };
}

export interface FetchMoreDataFailureAction {
  type: typeof FETCH_MORE_DATA_FAILURE;
  payload: {
    error: string;
  };
}

export type NewsActionTypes =
  | FetchNewsRequestAction
  | FetchNewsSuccessAction
  | FetchNewsFailureAction
  | FetchMoreDataAction
  | FetchMoreDataSuccessAction
  | FetchMoreDataFailureAction;
