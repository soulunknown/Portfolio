import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx"; 
import CustomThemeProvider from "./ThemeProvider.jsx";
import Hero from "./components/Hero.jsx"; 
import Music from "./pages/Music.jsx";
import Experience from "./pages/Experience.jsx"; 
import Education from "./pages/Education.jsx"; 

export default function App() {
  return (
    <CustomThemeProvider>
      <Navbar />
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Container>
    </CustomThemeProvider>
  );
}
