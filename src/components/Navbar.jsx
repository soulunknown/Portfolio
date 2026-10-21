
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
  Coffee as CoffeeIcon,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";
import { ColorModeContext } from "../ThemeProvider";

export default function Navbar() {
  const { toggleColorMode } = useContext(ColorModeContext);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const location = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  // Navigation Items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Music", path: "/music" },
    { label: "Projects", path: "/projects" },
    { label: "Animation", path: "/psychedelic" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  // Animated Icon Styling
  const iconStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "pulse 2.5s infinite",

    "@keyframes pulse": {
      "0%": {
        transform: "scale(1)",
      },
      "50%": {
        transform: "scale(1.08)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },

    "&:hover": {
      transform: "scale(1.12)",
      boxShadow:
        theme.palette.mode === "dark"
          ? "0 0 12px rgba(255,255,255,0.3)"
          : "0 0 12px rgba(0,0,0,0.2)",
    },
  };

  // Desktop Navigation Styling
  const linkStyle = {
    position: "relative",
    fontWeight: 500,
    textTransform: "none",
    color: theme.palette.text.primary,
    fontSize: "0.9rem",
    minWidth: "auto",
    px: 0.5,
    whiteSpace: "nowrap",

    "&::after": {
      content: '""',
      position: "absolute",
      width: "0%",
      left: "50%",
      bottom: 0,
      borderBottom: "2px solid rgb(192, 37, 249)",
      transition: "all 0.3s ease",
      transform: "translateX(-50%)",
    },

    "&:hover::after": {
      width: "100%",
    },

    "&:hover": {
      color: theme.palette.primary.main,
    },
  };

  return (
    <>
      {/* Glass Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          backdropFilter: "blur(12px)",

          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(18, 18, 18, 0.6)"
              : "rgba(255, 255, 255, 0.5)",

          color: theme.palette.text.primary,

          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.25)"
            : "none",

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
            gap: 2,
          }}
        >
          {/* Avatar */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Avatar
              src="/henlew2.webp"
              alt="Henry Lewis"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                cursor: "pointer",

                transition: "all 0.3s ease-in-out",

                boxShadow:
                  "0 0 8px rgba(255, 255, 255, 0.2)",

                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 0 16px 4px #ffc107",
                },
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="nowrap"
              gap={2}
              sx={{
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path === "/blog" &&
                    location.pathname.startsWith("/blog/"));

                return (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      ...linkStyle,

                      color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,

                      fontWeight: isActive ? 700 : 500,

                      "&::after": {
                        ...linkStyle["&::after"],
                        width: isActive ? "100%" : "0%",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Right Side Icons */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ flexShrink: 0 }}
          >
            {!isMobile && (
              <>
                {/* GitHub */}
                <IconButton
                  color="inherit"
                  href="https://github.com/soulunknown"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={iconStyle}
                >
                  <GitHub />
                </IconButton>

                {/* LinkedIn */}
                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/henryrlewis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={iconStyle}
                >
                  <LinkedIn />
                </IconButton>

                {/* Buy Me a Coffee */}
                <IconButton
                  color="inherit"
                  href="https://buymeacoffee.com/henryrosslewis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buy Me a Coffee"
                  sx={{
                    ...iconStyle,
                    color: "#ffdd57",

                    "&:hover": {
                      transform: "scale(1.15)",
                      boxShadow:
                        "0 0 16px rgba(255, 221, 87, 0.6)",
                    },
                  }}
                >
                  <CoffeeIcon />
                </IconButton>
              </>
            )}

            {/* Theme Toggle */}
            <IconButton
              color="inherit"
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              sx={{
                ...iconStyle,

                transition: "transform 0.4s ease",

                "&:active": {
                  transform: "rotate(180deg)",
                },
              }}
            >
              {theme.palette.mode === "dark" ? (
                <LightMode />
              ) : (
                <DarkMode />
              )}
            </IconButton>

            {/* Mobile Menu */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={handleDrawerToggle}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: "75vw",
            maxWidth: 350,
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            px: 2,
          },
        }}
      >
        <Box textAlign="center" mt={3}>
          {/* Mobile Avatar */}
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

          {/* Mobile Navigation Links */}
          <List>
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === "/blog" &&
                  location.pathname.startsWith("/blog/"));

              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={closeDrawer}
                    selected={isActive}
                    sx={{
                      justifyContent: "center",
                      borderRadius: 2,
                      mb: 0.5,

                      "&.Mui-selected": {
                        backgroundColor:
                          "rgba(255,255,255,0.18)",
                      },

                      "&.Mui-selected:hover": {
                        backgroundColor:
                          "rgba(255,255,255,0.25)",
                      },

                      "&:hover .MuiTypography-root": {
                        color: "#ffdd57",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{
                        textAlign: "center",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Mobile Social Icons */}
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            mt={2}
            mb={4}
          >
            {/* GitHub */}
            <IconButton
              color="inherit"
              href="https://github.com/soulunknown"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={iconStyle}
            >
              <GitHub />
            </IconButton>

            {/* LinkedIn */}
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/henryrlewis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={iconStyle}
            >
              <LinkedIn />
            </IconButton>

            {/* Buy Me a Coffee */}
            <IconButton
              color="inherit"
              href="https://buymeacoffee.com/henryrosslewis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Me a Coffee"
              sx={{
                ...iconStyle,
                color: "#ffdd57",
              }}
            >
              <CoffeeIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer Below Fixed Navbar */}
      <Box height="110px" />
    </>
  );
}
