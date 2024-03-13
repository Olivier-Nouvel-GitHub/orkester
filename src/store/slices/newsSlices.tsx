import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { NewsItemType } from "../../types/dataTypes";
import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../actions/newsAction";

interface NewsState {
  articles: NewsItemType[]; // Stock les articles de presse
  loading: boolean; // Info si les données sont en cours de chargement
  error: string | null; // Stock les erreurs en cas d'échec de récupération
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
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
      );
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.articles;
