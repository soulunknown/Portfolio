import { useEffect } from "react";
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

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.async = true;

    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "HenryRossLewis");
    script.setAttribute("data-description", "Support my work");
    script.setAttribute("data-message", "Thanks for visiting");
    script.setAttribute("data-color", "#FFDD00");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    document.body.appendChild(script);

    return () => {
      const widgetScript = document.querySelector(
        'script[src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"]'
      );

      if (widgetScript) {
        document.body.removeChild(widgetScript);
      }

      const bmcFrame = document.getElementById("bmc-wbtn");
      if (bmcFrame) {
        bmcFrame.remove();
      }

      const bmcContainer = document.getElementById("bmc-wbtn-wrapper");
      if (bmcContainer) {
        bmcContainer.remove();
      }
    };
  }, []);

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
        position: "relative",
      }}
    >
      <div className="lava-lamp-bg">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      <Navbar />

      <Container maxWidth="md" sx={{ padding: 4 }}>
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