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
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

function InnerApp() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "transparent",
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <CustomThemeProvider>
      <InnerApp />
    </CustomThemeProvider>
  );
}