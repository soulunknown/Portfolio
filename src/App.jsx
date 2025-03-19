import { Routes, Route } from "react-router-dom";
import { Container, Box, useTheme } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx"; 
import CustomThemeProvider from "./ThemeProvider.jsx";
import Hero from "./components/Hero.jsx"; 
import Music from "./pages/Music.jsx";
import Experience from "./pages/Experience.jsx"; 
import Education from "./pages/Education.jsx"; 

export default function App() {
  const theme = useTheme(); // ✅ Get current theme (light/dark)

  return (
    <CustomThemeProvider>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: theme.palette.background.default, // ✅ Fix background globally
          color: theme.palette.text.primary, // ✅ Ensure text is readable
          transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "transparent", // ✅ No forced white background
            color: theme.palette.text.primary,
            padding: 4,
            transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
          }}
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/music" element={<Music />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </Container>
      </Box>
    </CustomThemeProvider>
  );
}
