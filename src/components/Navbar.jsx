import React, { useContext, useState, useEffect } from "react";
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
  useTheme,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Menu as MenuIcon,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../ThemeProvider";

export default function Navbar() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Music", path: "/music" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const iconStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "pulse 2.5s infinite",
    "@keyframes pulse": {
      "0%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.08)" },
      "100%": { transform: "scale(1)" },
    },
    "&:hover": {
      transform: "scale(1.12)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 12px rgba(255,255,255,0.3)"
          : "0 0 12px rgba(0,0,0,0.2)",
    },
  };

  const linkStyle = {
    position: "relative",
    fontWeight: 500,
    textTransform: "none",
    color: "#fff",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      left: "50%",
      bottom: 0,
      borderBottom: "2px solidrgb(192, 37, 249)",
      transition: "all 0.3s ease",
      transform: "translateX(-50%)",
    },
    "&:hover::after": {
      width: "100%",
    },
    "&:hover": {
      color: "purple",
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(12px)",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(18, 18, 18, 0.6)"
              : "rgba(255, 255, 255, 0.5)",
          color: theme.palette.text.primary,
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            justifyContent: "space-between",
            py: 1.5,
            px: 2,
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Avatar
              src="/henlew2.webp"
              alt="Henry Lewis"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 16px 4px #ffc107",
                },
              }}
            />
          </Link>

          {!isMobile && (
            <Box display="flex" alignItems="center" gap={4}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={linkStyle}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box display="flex" alignItems="center" gap={2}>
            {!isMobile && (
              <>
                <IconButton
                  color="inherit"
                  href="https://github.com/soulunknown"
                  target="_blank"
                  sx={iconStyle}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/henryrlewis/"
                  target="_blank"
                  sx={iconStyle}
                >
                  <LinkedIn />
                </IconButton>
              </>
            )}
            <IconButton
              color="inherit"
              onClick={toggleColorMode}
              sx={{
                ...iconStyle,
                transition: "transform 0.4s ease",
                "&:active": {
                  transform: "rotate(180deg)",
                },
              }}
            >
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
        PaperProps={{
          sx: {
            width: "75vw",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            px: 2,
          },
        }}
      >
        <Box textAlign="center" mt={3}>
          <Avatar
            src="/henlew2.webp"
            alt="Henry Lewis"
            sx={{
              width: 90,
              height: 90,
              mb: 2,
              mx: "auto",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "rotate(-2deg) scale(1.05)",
              },
            }}
          />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    justifyContent: "center",
                    "&:hover .MuiTypography-root": {
                      color: "red",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <IconButton
              color="inherit"
              href="https://github.com/soulunknown"
              target="_blank"
              sx={iconStyle}
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/henryrlewis/"
              target="_blank"
              sx={iconStyle}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      <Box height="90px" />
    </>
  );
}
