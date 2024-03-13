import { createAction } from "@reduxjs/toolkit";
import { NewsItemType } from "../../types/dataTypes";

export const fetchNewsRequest = createAction<{ query: string }>(
  "FETCH_NEWS_REQUEST"
);
export const fetchNewsSuccess = createAction<{ articles: NewsItemType[] }>(
  "FETCH_NEWS_SUCCESS"
);
export const fetchNewsFailure = createAction<{ error: string }>(
  "FETCH_NEWS_FAILURE"
);