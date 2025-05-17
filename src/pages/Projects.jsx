import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard.jsx";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Wizard",
    description: "A car review app where users can browse, compare, and review cars with specs, ratings, and image uploads.",
    image: "/carwizard.webp",
    link: "https://carreviewweb.onrender.com/",
    techStack: ["React", "Express", "PostgreSQL", "AWS S3"],
  },
  {
    title: "DoorDash Tracker",
    description: "Tracks hours, earnings, and mileage for DoorDash drivers, with insights into peak hours and tax estimates.",
    image: "/doordashtracker.webp",
    link: "https://github.com/soulunknown/doordashtracker",
    techStack: ["Swift", "PostgreSQL", "AWS", "Kotlin", "iOS SDK"],
  },
  {
    title: "Cookie Delivery App",
    description: "Lets users order homemade cookies under Louisiana’s cottage food laws with options for pickup or delivery.",
    image: "/cookieman-cartoon.svg",
    link: "https://github.com/soulunknown/cookie-man",
    techStack: ["React", "Stripe API", "Firebase", "Next.js"],
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ textShadow: "1px 1px 4px rgba(106, 13, 173, 0.2)" }}
      >
        Projects
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
        Click a project to explore the details.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={10} md={8} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
