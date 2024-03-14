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

export const News = () => {
  const news = useSelector(selectNews);
  const loader = useRef(null);
  const isComponentMounted = useRef(false);
  const [loadMore, setLoadMore] = useState(false);
  // Nouvel état pour contrôler l'initialisation de l'observation
  const [initializeObserver, setInitializeObserver] = useState(false);

  useFetchNews();
  useFetchMoreData(loadMore);

  useEffect(() => {
    // Après un court délai, autoriser l'observation si le composant est toujours monté
    const timeoutId = setTimeout(() => {
      if (isComponentMounted.current) {
        setInitializeObserver(true);
      }
    }, 1000); // Délai de 1 seconde avant d'initialiser l'observer

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
              <ListItemText primary={item.title} secondary={item.source.name} />
            </ListItem>
          ))}
          <div ref={loader} style={{ height: "1px" }}></div>
        </List>
      </Grid>
    </Grid>
  );
};
