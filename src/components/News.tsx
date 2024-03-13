import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { useFetchNews } from "../hooks/useFetchNews";
import { selectNews } from "../store/slices/newsSlices";
import { useSelector } from "react-redux";

export const News = () => {
  useFetchNews(); // Hook used at component montage to get the news
  const news = useSelector(selectNews);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <List dense>
      {news.map((item) => (
        <ListItem key={item.title}>
          <ListItemAvatar>
            <Avatar alt={item.title} src={item.urlToImage} />
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.source.name} />
        </ListItem>
      ))}
    </List>
  );
};
