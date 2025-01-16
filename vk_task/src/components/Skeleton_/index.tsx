import Skeleton from "@mui/material/Skeleton";
import {
  createTheme,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ThemeProvider,
} from "@mui/material";

const Skeleton_ = () => {
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
        sx={{
          width: "100%",
          maxWidth: 1080,
          bgcolor: "primary",
          margin: "0 auto",
        }}
      >
        <ListItemButton sx={{ width: 1080 }}>
          <Skeleton variant="rectangular" width="100%" height={40} />
        </ListItemButton>

        <List component="div" disablePadding>
          <ListItemButton sx={{ width: "100%" }}>
            <ListItemAvatar sx={{ pl: 4 }}>
              <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <ListItem sx={{ p: 0, width: 1080 }}>
              <Skeleton variant="rectangular" width="100%" height={52} />
            </ListItem>
          </ListItemButton>
        </List>
      </List>
    </ThemeProvider>
  );
};

export default Skeleton_;
