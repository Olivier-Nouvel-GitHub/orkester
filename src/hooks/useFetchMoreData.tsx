import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreData } from "../store/actions/newsAction";
import { selectPage } from "../store/slices/newsSlices";

export const useFetchMoreData = (shouldLoadMore: boolean) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (shouldLoadMore) {
      dispatch(fetchMoreData({ page: page + 1 }));
    }
    isFirstRender.current = false;
  }, [dispatch, shouldLoadMore]);
};
