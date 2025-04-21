import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, createContext, useMemo, useEffect } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#6a0dad" },
          secondary: { main: "#03dac6" },
          accent: mode === "dark" ? "#bb86fc" : "#6200ee",
          background: {
            default: mode === "dark" ? "#0d0d0d" : "#f3f3f3",
            paper: mode === "dark" ? "#161616" : "#fafafa",
            hero: mode === "dark" ? "#121212" : "#ffffff",
            footer: mode === "dark" ? "#0a0a0a" : "#f0f0f0",
          },
          text: {
            primary: mode === "dark" ? "#cccccc" : "#333333",
            secondary: mode === "dark" ? "#999999" : "#555555",
          },
        },
        typography: {
          fontFamily: '"Poppins", sans-serif',
          h1: { fontWeight: 700, fontSize: "4rem", letterSpacing: "1px" },
          h2: { fontWeight: 600, fontSize: "3rem" },
          h3: { fontWeight: 600, fontSize: "2.25rem" },
          body1: { fontSize: "1.1rem", lineHeight: 1.6 },
          allVariants: { transition: "color 0.3s ease-in-out" },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: "background-color 0.3s ease-in-out, box-shadow 0.3s",
                boxShadow:
                  mode === "dark"
                    ? "0px 4px 12px rgba(255, 255, 255, 0.05)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.08)",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                background: "linear-gradient(135deg, #6a0dad 0%, #9d50bb 100%)",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0px 4px 12px rgba(106,13,173,0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 18px rgba(106,13,173,0.6)",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--bg-color", theme.palette.background.default);
    document.documentElement.style.setProperty("--text-color", theme.palette.text.primary);
    document.documentElement.style.setProperty("--accent-color", theme.palette.accent);
    document.documentElement.style.setProperty("--primary-color", theme.palette.primary.main);
    document.documentElement.style.setProperty("--secondary-color", theme.palette.secondary.main);
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
