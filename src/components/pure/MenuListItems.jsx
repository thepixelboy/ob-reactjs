import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home />;
    case "settings":
      return <Settings />;
    default:
      return <Home />;
  }
};

const MenuListItems = ({ List }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <List>
      {List.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => navigateTo(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
