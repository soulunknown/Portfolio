import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, createContext } from "react";

export const ColorModeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
