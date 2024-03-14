import { createAction } from "@reduxjs/toolkit";
import { NewsItemType } from "../../types/dataTypes";

export const fetchNewsRequest = createAction<{ query: string; page: number }>(
  "FETCH_NEWS_REQUEST"
);
export const fetchNewsSuccess = createAction<{
  articles: NewsItemType[];
  page: number;
}>("FETCH_NEWS_SUCCESS");
export const fetchNewsFailure = createAction<{ error: string }>(
  "FETCH_NEWS_FAILURE"
);
export const fetchMoreData = createAction<{ page: number }>("FETCH_MORE_DATA");

export const fetchMoreDataSuccess = createAction<{
  articles: NewsItemType[];
  page: number;
}>("FETCH_MORE_DATA_SUCCESS");

export const fetchMoreDataFailure = createAction<{ error: string }>(
  "FETCH_MORE_DATA_FAILURE"
);

export const storeNewsDetails = createAction<{ news: NewsItemType }>(
  "STORE_NEWS_DETAILS"
);
