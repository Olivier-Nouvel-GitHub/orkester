import React, { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { selectNews } from "../store/slices/newsSlices";
import { useFetchNews } from "../hooks/useFetchNews";
import { useFetchMoreData } from "../hooks/useFetchMoreData";
import { useStoreNewsDetails } from "../hooks/useStoreNewsDetails";
import Link from "next/link";
import { NewsItemType } from "../types/dataTypes";

export const News = () => {
  const news = useSelector(selectNews);
  const loader = useRef(null);
  const isComponentMounted = useRef(false);
  const [loadMore, setLoadMore] = useState(false);
  // State to control initialization and observation
  const [initializeObserver, setInitializeObserver] = useState(false);

  useFetchNews();
  useFetchMoreData(loadMore);

  const handleArticleClick = (item: NewsItemType) => {
    useStoreNewsDetails(item);
  };

  useEffect(() => {
    // After a delay, authorize the observation if component mounted to prevent prematurated observation
    const timeoutId = setTimeout(() => {
      if (isComponentMounted.current) {
        setInitializeObserver(true);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (loadMore) {
      setLoadMore(false);
    }
  }, [news.length]);

  useEffect(() => {
    isComponentMounted.current = true;
    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (initializeObserver && loader.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting) {
            setLoadMore(true);
          }
        },
        { threshold: 1 }
      );

      observer.observe(loader.current);

      return () => observer.disconnect();
    }
  }, [initializeObserver]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <List dense>
          {news.map((item) => (
            <ListItem
              key={item.title}
              sx={{
                "&:hover": {
                  "& .MuiAvatar-root": {
                    borderColor: "black",
                    borderWidth: 2,
                    borderStyle: "solid",
                  },
                },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.urlToImage} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    href={`/newsDetailsPage`}
                    onClick={() => handleArticleClick(item)}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.title}
                  </Link>
                }
                secondary={item.source.name}
              />
            </ListItem>
          ))}
          <div ref={loader} style={{ height: "1px" }}></div>
        </List>
      </Grid>
    </Grid>
  );
};
