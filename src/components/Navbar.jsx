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
    setMobileOpen((prevOpen) => !prevOpen);
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

  const bgColor = theme.palette.mode === "dark" ? "#8B0000" : "#6a0dad";

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: bgColor,
          height: 70,
          display: "flex",
          justifyContent: "center",
          paddingX: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Avatar */}
          <Avatar
            src="/henlew.webp"
            alt="Henry Lewis"
            sx={{
              width: 50,
              height: 50,
              boxShadow: "0 0 10px rgba(106, 13, 173, 0.8)",
            }}
          />

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                gap: 4,
                textAlign: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: theme.palette.mode === "dark" ? "#ffaaaa" : "#ffe6ff",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton title="GitHub" color="inherit" component="a" href="https://github.com/soulunknown">
                <GitHub />
              </IconButton>
              <IconButton title="LinkedIn" color="inherit" component="a" href="https://www.linkedin.com/in/henryrlewis/">
                <LinkedIn />
              </IconButton>
              <IconButton
                title="Toggle Theme"
                color="inherit"
                onClick={toggleColorMode}
                sx={{
                  transition: "transform 0.4s ease",
                  "& svg": {
                    transform: "rotate(0deg)",
                    transition: "transform 0.4s ease",
                  },
                  "&:active svg": {
                    transform: "rotate(180deg)",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "75vw",
            backgroundColor: bgColor,
            color: "#fff",
            transition: "background-color 0.3s ease-in-out",
          }
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
          <Avatar
            src="/henlew.webp"
            alt="Henry Lewis"
            sx={{
              width: 80,
              height: 80,
              margin: "0 auto",
              mb: 2,
              boxShadow: "0 0 20px rgba(106, 13, 173, 0.8)",
              transition: "0.3s ease-in-out",
              "&:hover": { boxShadow: "0 0 40px rgba(106, 13, 173, 1)" }
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
          </List>

          {/* Mobile Icons and Theme Toggle */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            <IconButton title="GitHub" color="inherit" component="a" href="https://github.com/soulunknown">
              <GitHub />
            </IconButton>
            <IconButton title="LinkedIn" color="inherit" component="a" href="https://www.linkedin.com/in/henryrlewis/">
              <LinkedIn />
            </IconButton>
            <IconButton
              title="Toggle Theme"
              color="inherit"
              onClick={toggleColorMode}
              sx={{
                transition: "transform 0.4s ease",
                "& svg": {
                  transform: "rotate(0deg)",
                  transition: "transform 0.4s ease",
                },
                "&:active svg": {
                  transform: "rotate(180deg)",
                },
              }}
            >
              {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer below navbar */}
      <Box sx={{ marginTop: "80px" }} />
    </>
  );
}
