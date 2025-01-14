import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { GitHubRepo, OwnerType } from "../../redux/Api/githubApi";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { RootState } from "@reduxjs/toolkit/query";
import {
  Avatar,
  createTheme,
  ListItemAvatar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

const Item = (props: GitHubRepo) => {
  const [open, setOpen] = React.useState(true);
  const { id, name, full_name, description, html_url, owner } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <List
        sx={{ width: "100%", maxWidth: 1080, bgcolor: "primary" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={full_name} />
          <CreateIcon sx={{ mr: 3 }}></CreateIcon>
          <DeleteIcon sx={{ mr: 3 }}></DeleteIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={owner.avatar_url} />
              </ListItemAvatar>
              <ListItemText
                primary={owner.login}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </ThemeProvider>
  );
};

export default Item;
