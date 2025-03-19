import { Container, Grid, Box } from "@mui/material";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Car Wizard",
    description: "A comprehensive car review application that allows users to browse, review, and compare different cars. Features include detailed specifications, user ratings, and image uploads.",
    image: "/carwizard.jpg",
    link: "https://carreviewweb.onrender.com/", // Your actual Car Wizard link
  },
  {
    title: "DoorDash Tracker",
    description: "A tracking app that helps DoorDash drivers monitor their hours, earnings, and mileage. It provides insights into peak hours, total earnings over time, and estimated tax deductions.",
    image: "/doordashtracker.jpg",
    link: "https://github.com/soulunknown/doordashtracker", // Replace with actual link
  },
  {
    title: "Cookie Delivery App",
    description: "An online platform for homemade cookie delivery under the Louisiana cottage food laws. Users can place orders, choose from different flavors, and opt for local pickup or delivery.",
    image: "/cookieman-cartoon.svg",
    link: "https://github.com/soulunknown/cookie-man", // Replace with actual link
  },

];

export default function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensures full viewport height
        width: "100%", // Full width for responsiveness
        px: 3, // Adds horizontal padding
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              key={index}
            >
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
