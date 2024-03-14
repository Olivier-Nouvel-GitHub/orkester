import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../store/slices/newsSlices";
import { NewsItemType } from "../types/dataTypes";

export const useStoreNewsDetails = (newsDetails: NewsItemType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedArticle(newsDetails));
  }, [dispatch, newsDetails]);
};
