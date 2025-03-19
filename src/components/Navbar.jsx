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
  useMediaQuery
} from "@mui/material";
import {
  Brightness4,
  GitHub,
  LinkedIn,
  Menu as MenuIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../ThemeProvider";

export default function Navbar() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevOpen) => !prevOpen);
  };

  // Navigation items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Music", path: "/music" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" }
  ];

  // Mobile Drawer Content
  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Avatar
        src="/henlew.jpg"
        alt="Henry Lewis"
        sx={{
          width: 100,
          height: 100,
          margin: "0 auto",
          mb: 2,
          boxShadow: "0 0 20px rgba(106, 13, 173, 0.8)", // Glowing effect
          transition: "0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 0 40px rgba(106, 13, 173, 1)" // Stronger glow on hover
          }
        }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding sx={{ justifyContent: "center" }}>
          <IconButton color="inherit" component="a" href="https://github.com/soulunknown" target="_blank">
            <GitHub />
          </IconButton>

          <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/henryrlewis/" target="_blank">
            <LinkedIn />
          </IconButton>

          <IconButton color="inherit" onClick={toggleColorMode}>
            <Brightness4 />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#6a0dad", height: 80 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
          {/* Profile Photo in Navbar */}
          <Avatar
            src="/henlew.jpg"
            alt="Henry Lewis"
            sx={{
              width: 80,
              height: 80,
              boxShadow: "0 0 15px rgba(106, 13, 173, 0.8)", // Glowing effect
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 30px rgba(106, 13, 173, 1)" // Stronger glow on hover
              }
            }}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton color="inherit" component="a" href="https://github.com/soulunknown" target="_blank">
                <GitHub />
              </IconButton>

              <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/henryrlewis/" target="_blank">
                <LinkedIn />
              </IconButton>

              <IconButton color="inherit" onClick={toggleColorMode}>
                <Brightness4 />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240
            }
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Spacer to prevent content from being hidden behind navbar */}
      <Toolbar />
    </>
  );
}
