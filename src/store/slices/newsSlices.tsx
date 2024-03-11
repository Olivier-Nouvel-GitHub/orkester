import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../types/storeTypes";
import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../actions/newsAction";
import { NewsItemType } from "../../types/dataTypes";

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
    builder.addCase("fetchNewsRequest", (state) => {
      // Mettez à jour l'état pour indiquer que la requête est en cours
      state.loading = true;
      state.error = null; // Réinitialisez l'erreur à null
    });
    // Ajoutez d'autres cas pour gérer FETCH_NEWS_SUCCESS et FETCH_NEWS_FAILURE si nécessaire
    // builder.addCase(
    //   fetchNewsSuccess,
    //   (state, action: PayloadAction<NewsItemType[]>) => {
    //     // Mettez à jour l'état en réponse à FETCH_NEWS_SUCCESS
    //     state.articles = action.payload;
    //     state.loading = false; // Marquez que le chargement est terminé
    //   }
    // );
    // builder.addCase(
    //   fetchNewsFailure,
    //   (state, action: PayloadAction<string>) => {
    //     // Mettez à jour l'état en réponse à FETCH_NEWS_FAILURE
    //     state.error = action.payload;
    //     state.loading = false; // Marquez que le chargement est terminé
    //   }
    // );
  },
});

export const {
  /* exportez des réducteurs supplémentaires si nécessaire */
} = newsSlice.actions;
export default newsSlice.reducer;

// Sélecteur pour accéder à l'état de la tranche des nouvelles
export const selectNews = (state: RootState) => state.articles;
