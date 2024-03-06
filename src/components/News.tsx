import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { NewsItemType } from "../types/NewsItemType";

export const News = (news: NewsItemType[]) => {
  return (
    <List dense>
      {news.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar alt={item.title} src={item.img} />
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.source} />
        </ListItem>
      ))}
    </List>
  );
};
