import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Menu as MenuIcon,
  DarkMode,
  LightMode
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../ThemeProvider";

export default function Navbar() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Music", path: "/music" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", justifyContent: "space-between" }}>
          <Avatar src="/henlew.webp" alt="Henry Lewis" sx={{ width: 50, height: 50 }} />

          {!isMobile && (
            <Box display="flex" alignItems="center" gap={4}>
              {navItems.map((item) => (
                <Button key={item.label} component={Link} to={item.path} color="inherit">
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={2}>
            {!isMobile && (
              <>
                <IconButton color="inherit" href="https://github.com/soulunknown" target="_blank">
                  <GitHub />
                </IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/in/henryrlewis/" target="_blank">
                  <LinkedIn />
                </IconButton>
              </>
            )}
            <IconButton color="inherit" onClick={toggleColorMode}>
              {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
            {isMobile && (
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: "75vw", backgroundColor: theme.palette.primary.main, color: "#fff" } }}
      >
        <Box textAlign="center" mt={2}>
          <Avatar src="/henlew.webp" alt="Henry Lewis" sx={{ width: 80, height: 80, mb: 2, mx: "auto" }} />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle}>
                  <ListItemText primary={item.label} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <IconButton color="inherit" href="https://github.com/soulunknown" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/in/henryrlewis/" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      <Box height="80px" />
    </>
  );
}
