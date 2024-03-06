import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import { NewsItemType } from "../types/NewsItemType";

export const News = (news: NewsItemType[]) => {
  return (
    <List dense>
      {news.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary="Second-Line item"
          />
        </ListItem>
      ))}
    </List>
  );
};
