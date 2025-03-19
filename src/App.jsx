import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx"; 
import CustomThemeProvider from "./ThemeProvider.jsx";

import Hero from "./components/Hero.jsx"; 
import Music from "./pages/Music.jsx";
import Experience from "./pages/Experience.jsx"; // Import Experience Page
import Education from "./pages/Education.jsx"; // Import Education Page

export default function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Navbar />
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            
            <Route path="/music" element={<Music />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} /> {/* ✅ Added Experience Page */}
            <Route path="/education" element={<Education />} /> {/* ✅ Added Education Page */}
          </Routes>
        </Container>
      </Router>
    </CustomThemeProvider>
  );
}
