import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Wizard",
    description: "A comprehensive car review application that allows users to browse, review, and compare different cars. Features include detailed specifications, user ratings, and image uploads.",
    image: "/carwizard.webp",
    link: "https://carreviewweb.onrender.com/",
    techStack: ["React", "Express", "PostgreSQL", "AWS S3"],
  },
  {
    title: "DoorDash Tracker",
    description: "A tracking app that helps DoorDash drivers monitor their hours, earnings, and mileage. It provides insights into peak hours, total earnings over time, and estimated tax deductions.",
    image: "/doordashtracker.webp",
    link: "https://github.com/soulunknown/doordashtracker",
    techStack: ["Swift", "PostgreSQL", "AWS", "Kotlin", "iOS SDK"],
  },
  {
    title: "Cookie Delivery App",
    description: "An online platform for homemade cookie delivery under the Louisiana cottage food laws. Users can place orders, choose from different flavors, and opt for local pickup or delivery.",
    image: "/cookieman-cartoon.svg",
    link: "https://github.com/soulunknown/cookie-man",
    techStack: ["React", "Stripe API", "Firebase", "Next.js"],
  },

];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" align="center" color="primary" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
        Click to learn more!
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} key={index} display="flex" justifyContent="center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} style={{ width: "100%" }}>
              <ProjectCard {...project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}