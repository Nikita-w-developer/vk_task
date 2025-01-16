import { useState } from "react";
import {
  Avatar,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Collapse,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../redux/Slices/editSlice";
import { GitHubRepo } from "../../redux/Api/githubApi";

const Item = (props: GitHubRepo) => {
  const [open, setOpen] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [editedFullName, setEditedFullName] = useState(props.full_name);
  const [editedDescription, setEditedDescription] = useState(
    props.description || ""
  );

  const { id, full_name, description, owner } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    dispatch(deleteItem(props));
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleSave = () => {
    dispatch(
      updateItem({
        id,
        full_name: editedFullName,
        description: editedDescription,
      })
    );
    setEditOpen(false);
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
        <ListItemButton>
          <ListItemText primary={full_name} />
          <CreateIcon onClick={handleEditOpen} sx={{ mr: 3 }} />
          <DeleteIcon onClick={handleDelete} sx={{ mr: 3 }} />
          {open ? (
            <ExpandLess onClick={handleClick} />
          ) : (
            <ExpandMore onClick={handleClick} />
          )}
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
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    {description}
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Repository</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Full Name"
            fullWidth
            value={editedFullName}
            onChange={(e) => setEditedFullName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Item;
