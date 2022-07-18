import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
  const [OpenDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
    <Drawer
      open={OpenDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
      PaperProps={{sx:{width: 160}}}
      sx={{zIndex: 1203}}
    >
      <List>
        <ListItemButton>
          <ListItemText>About</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Videos</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Contact Us</ListItemText>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>Login</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>SignUp</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
    <IconButton sx={{marginLeft: "auto"}} onClick={()=> setOpenDrawer(!OpenDrawer)}>
      <MenuIcon sx={{color: "whitesmoke", fontSize: 40}}/>
    </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
