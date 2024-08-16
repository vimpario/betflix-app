import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(prevState => !prevState);
  };
  const trigger = useScrollTrigger({
    target: window,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={isOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary="Фильмы" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
