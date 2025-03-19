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
                background: { default: "#121212", paper: "#1E1E1E" }, // ✅ Dark background
                text: { primary: "#FFFFFF", secondary: "#A3A3A3" }, // ✅ Adjusted contrast
              }
            : {
                background: { default: "#FFFFFF", paper: "#F5F5F5" }, // ✅ Light Mode
                text: { primary: "#000000", secondary: "#333333" },
              }),
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
