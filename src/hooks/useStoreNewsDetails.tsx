import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeNewsDetails } from "../store/actions/newsAction";

export const useStoreNewsDetails = (newsDetails: newsDetails) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeNewsDetails({ details: details }));
  }, [dispatch]);
};
