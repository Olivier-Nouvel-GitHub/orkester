import React, { useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { selectNews } from "../store/slices/newsSlices";

export const NewsDetails = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <List dense>
          <ListItem
            key="{item.title}"
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
              <Avatar alt="alt" src="im" />
            </ListItemAvatar>
            <ListItemText primary="title" secondary="source.name" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
