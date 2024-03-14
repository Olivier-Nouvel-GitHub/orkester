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
  articles: NewsItemType[]; // Stock les articles de presse
  loading: boolean; // Info si les données sont en cours de chargement
  error: string | null; // Stock les erreurs en cas d'échec de récupération
  page: number;
  query: string; // requête lancée par un user
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
  page: 1,
  query: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
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
          state.articles = [...state.articles, ...action.payload.articles];
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
          state.page = state.page + 1;
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

export const {} = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.articles;
export const selectPage = (state: RootState) => state.news.page;
