import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { NewsItemType } from "../../types/dataTypes";
import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
  fetchMoreData,
  fetchMoreDataFailure,
  fetchMoreDataSuccess,
} from "../actions/newsAction";

interface NewsState {
  articles: NewsItemType[]; // Store press articles
  url: string | null; // url of article
  selectedArticle: NewsItemType | null; // Store the article we want to display details about
  loading: boolean; // Data loading or not
  error: string | null; // Store errors
  page: number; // actual page
  query: string; // request given by user
  author: string | null;
  filter: string | null; // Parameter to filter requests
}

const initialState: NewsState = {
  articles: [],
  url: null,
  selectedArticle: null,
  loading: false,
  error: null,
  page: 1,
  query: "",
  author: null,
  filter: "*",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSelectedArticle(state, action: PayloadAction<NewsItemType>) {
      state.selectedArticle = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNewsRequest,
        (state, action: PayloadAction<{ page: number; query: string }>) => {
          state.loading = true;
          state.error = null;
          state.page = action.payload.page;
          state.query = action.payload.query;
        }
      )
      .addCase(
        fetchNewsSuccess,
        (state, action: PayloadAction<{ articles: NewsItemType[] }>) => {
          state.articles = action.payload.articles;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(
        fetchNewsFailure,
        (state, action: PayloadAction<{ error: string }>) => {
          state.error = action.payload.error;
          state.loading = false;
        }
      )
      .addCase(
        fetchMoreData,
        (state, action: PayloadAction<{ page: number }>) => {
          state.page = action.payload.page;
        }
      )
      .addCase(
        fetchMoreDataSuccess,
        (state, action: PayloadAction<{ articles: NewsItemType[] }>) => {
          state.articles = [...state.articles, ...action.payload.articles];
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(
        fetchMoreDataFailure,
        (state, action: PayloadAction<{ error: string }>) => {
          state.error = action.payload.error;
          state.loading = false;
        }
      );
  },
});

export const { setSelectedArticle, setFilter } = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.articles;
export const selectPage = (state: RootState) => state.news.page;
export const selectDetailedNews = (state: RootState) =>
  state.news.selectedArticle;
export const selectFilter = (state: RootState) => state.news.filter;
