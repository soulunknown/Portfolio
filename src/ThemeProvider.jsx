import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, createContext, useMemo, useEffect } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light" // ✅ Saves mode between refreshes
  );

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // ✅ Stores theme in localStorage
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: { default: "#121212", paper: "#1E1E1E" }, // Dark theme vibes
                text: { primary: "#EAEAEA", secondary: "#A3A3A3" },
                accent: "#BB86FC", // Cool accent color for dark mode
              }
            : {
                background: { default: "#FFFFFF", paper: "#F5F5F5" },
                text: { primary: "#222", secondary: "#555" },
                accent: "#6200EE", // Vibrant color for light mode
              }),
        },
        typography: {
          fontFamily: '"Poppins", sans-serif', // Modern font choice
          allVariants: { transition: "color 0.3s ease-in-out" }, // Smooth text transitions
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: "background-color 0.3s ease-in-out, box-shadow 0.3s",
                boxShadow: mode === "dark" ? "0px 4px 12px rgba(255, 255, 255, 0.1)" : "0px 4px 12px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      }),
    [mode]
  );
  
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      theme.palette.background.default
    );
    document.documentElement.style.setProperty(
      "--text-color",
      theme.palette.text.primary
    );
    document.documentElement.style.setProperty(
      "--accent-color",
      theme.palette.accent
    );
    
    // Add a smooth transition when changing themes
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";
  }, [theme]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
