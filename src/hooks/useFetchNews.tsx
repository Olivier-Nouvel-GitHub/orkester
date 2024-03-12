import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsRequest } from "../store/actions/newsAction";

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchNewsRequest({ query: "*" }));
}, [dispatch]);
