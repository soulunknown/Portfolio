import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  useTheme 
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { useState } from "react";

// Education data
const educationSections = [
  {
    title: "Education",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#6a0dad" }} />,
    education: [
      {
        degree: "Web Development Bootcamp",
        institution: "Fullstack Academy / Louisiana State University",
        dates: "October 2023",
        details: "Completed an intensive program covering front-end and back-end technologies, including JavaScript, React, Node.js, and SQL.",
        image: "/bootcamp.webp", 
      },
      {
        degree: "Bachelor of General Studies",
        institution: "Louisiana State University Shreveport",
        dates: "May 2024",
        details: "Gained a broad education with a focus on critical thinking, research, and technology-related coursework.",
        image: "/GSDegree.webp",
      },
    ],
  },
];

export default function Education() {
  const theme = useTheme();
  const placeholderImage = "/placeholder.jpg"; // Default image if loading fails

  return (
    <Container maxWidth="lg" sx={{ mt: 5, pb: 5 }}>
     
      <Typography 
        variant="h3" 
        sx={{ 
          textAlign: "center", 
          fontWeight: "bold", 
          mb: 4, 
          textShadow: "2px 2px 6px rgba(106, 13, 173, 0.3)"
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4}>
        {educationSections.map((section, index) => (
          <Grid item xs={12} key={index}>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  boxShadow: theme.palette.mode === "dark" 
                    ? "0 0 15px rgba(255, 255, 255, 0.1)" 
                    : "0 0 15px rgba(106, 13, 173, 0.3)",
                  borderRadius: 3,
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                }}
              >
                <CardContent>
                  
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {section.icon}
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
                      {section.title}
                    </Typography>
                  </Box>

                  
                  {section.education.map((edu, i) => {
                    const [imageSrc, setImageSrc] = useState(edu.image);

                    return (
                      <Box key={i} sx={{ mb: 3, display: "flex", alignItems: "center", gap: 3, flexDirection: { xs: "column", sm: "row" } }}>
                        {edu.image && (
                          <Box
                            component="img"
                            src={imageSrc}
                            alt={edu.degree}
                            loading="lazy"
                            onError={() => setImageSrc(placeholderImage)} // Fallback if image fails to load
                            sx={{
                              width: { xs: "100%", sm: 150 }, // Responsive image size
                              height: "auto",
                              borderRadius: 2,
                              boxShadow: theme.palette.mode === "dark"
                                ? "0 0 10px rgba(255, 255, 255, 0.1)"
                                : "0 0 10px rgba(0,0,0,0.2)",
                            }}
                          />
                        )}
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a0dad" }}>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {edu.institution}
                          </Typography>
                          <Typography variant="body2" sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
                            {edu.dates}
                          </Typography>

                          {edu.details && (
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              <strong>Details:</strong> {edu.details}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
