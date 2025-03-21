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
          ...(mode === "dark"
            ? {
                background: { default: "#121212", paper: "#1E1E1E" },
                text: { primary: "#EAEAEA", secondary: "#A3A3A3" },
                accent: "#BB86FC",
              }
            : {
                background: { default: "#FFFFFF", paper: "#F5F5F5" },
                text: { primary: "#222", secondary: "#555" },
                accent: "#6200EE",
              }),
        },
        typography: {
          fontFamily: '"Poppins", sans-serif',
          h1: { fontWeight: 700, fontSize: "3rem" },
          h2: { fontWeight: 600, fontSize: "2.25rem" },
          h3: { fontWeight: 600, fontSize: "1.75rem" },
          body1: { fontSize: "1rem", lineHeight: 1.6 },
          allVariants: { transition: "color 0.3s ease-in-out" },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: "background-color 0.3s ease-in-out, box-shadow 0.3s",
                boxShadow:
                  mode === "dark"
                    ? "0px 4px 12px rgba(255, 255, 255, 0.1)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.1)",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    mode === "dark"
                      ? "0px 0px 10px rgba(187, 134, 252, 0.4)"
                      : "0px 0px 10px rgba(98, 0, 238, 0.4)",
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
