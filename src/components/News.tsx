import React, { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../store/slices/newsSlices";
import { useFetchNews } from "../hooks/useFetchNews";
import { useFetchMoreData } from "../hooks/useFetchMoreData";
import Link from "next/link";
import { NewsItemType } from "../types/dataTypes";
import { setSelectedArticle } from "../store/slices/newsSlices";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { setFilter } from "../store/slices/newsSlices";

export const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const loader = useRef(null);
  const isComponentMounted = useRef(false);
  const [loadMore, setLoadMore] = useState(false);
  // State to control initialization and observation
  const [initializeObserver, setInitializeObserver] = useState(false);
  const [filterName, setFilterName] = useState<string>("");
  const [filterValue, setFilterValue] = useState("");

  console.log(news);
  useFetchNews();
  useFetchMoreData(loadMore);

  const handleFilterNameChange = (event: SelectChangeEvent<string>) => {
    setFilterName(event.target.value as string);
  };

  const handleFilterValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterValue(event.target.value);
  };

  const handleArticleClick = (item: NewsItemType) => {
    dispatch(setSelectedArticle(item));
  };

  const filteredResearch = () => {
    let newFilter = "";
    if (filterName == "language") {
      newFilter = `*&${filterName}=${filterValue}`;
    } else {
      newFilter = `${filterValue}&searchIn=${filterName}`;
    }
    dispatch(setFilter(newFilter));
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

  if (!news || news.length === 0) {
    return <div>No news articles found.</div>;
  }

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: "10px",
          margin: "20px 0",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="select-filter">Filter</InputLabel>
              <Select
                labelId="select-filter"
                id="select-filter-component"
                value={filterName}
                label="Parameter"
                onChange={handleFilterNameChange}
              >
                <MenuItem value="title">Title</MenuItem>
                <MenuItem value="sources">Description</MenuItem>
                <MenuItem value="content">Content</MenuItem>
                <MenuItem value="language">Language</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="standard-basic"
              label="Research"
              variant="standard"
              value={filterValue}
              onChange={handleFilterValueChange}
            />
          </Grid>
          <Grid item xs={1} display="flex" justifyContent="flex-start">
            <Button size="small" onClick={filteredResearch}>
              Go
            </Button>
          </Grid>
        </Grid>
      </Paper>
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
    </div>
  );
};
