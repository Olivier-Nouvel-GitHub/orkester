import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../types/storeTypes";

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

// Sélecteur pour accéder à l'état de la tranche des nouvelles
export const selectNews = (state: RootState) => state.articles;
