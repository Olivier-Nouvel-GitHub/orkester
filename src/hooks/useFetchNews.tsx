import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsRequest } from "../store/actions/newsAction";
import { selectFilter } from "../store/slices/newsSlices";

export const useFetchNews = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsRequest({ query: `${filter}`, page: 1 }));
  }, [filter, dispatch]);
};
