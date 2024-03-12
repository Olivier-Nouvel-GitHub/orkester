import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { NewsItemType } from "../types/dataTypes";
import { useFetchNews } from "../hooks/useFetchNews";

export const News = ({ news }: { news: NewsItemType[] }) => {
  useFetchNews();
  return (
    <List dense>
      {news.map((item) => (
        <ListItem key={item.title}>
          <ListItemAvatar>
            <Avatar alt={item.title} src={item.img} />
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.source} />
        </ListItem>
      ))}
    </List>
  );
};
