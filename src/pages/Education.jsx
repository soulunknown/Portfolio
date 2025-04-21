import { Container, Grid, Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { useState } from "react";

const educationSections = [
  {
    title: "Education",
    icon: <SchoolIcon color="primary" sx={{ fontSize: 40 }} />,
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
  const placeholderImage = "/placeholder.jpg";

  return (
    <Container maxWidth="lg">
   

      <Grid container spacing={4}>
        {educationSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={3}>
                    {section.icon}
                    <Typography variant="h5" ml={2}>
                      {section.title}
                    </Typography>
                  </Box>

                  {section.education.map((edu, i) => {
                    const [imageSrc, setImageSrc] = useState(edu.image);

                    return (
                      <Box key={i} display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems="center" gap={3} mb={4}>
                        {edu.image && (
                          <Box
                            component="img"
                            src={imageSrc}
                            alt={edu.degree}
                            loading="lazy"
                            onError={() => setImageSrc(placeholderImage)}
                            sx={{ width: { xs: "100%", sm: 150 }, borderRadius: 2, objectFit: "cover" }}
                          />
                        )}
                        <Box>
                          <Typography variant="h6" color="primary" gutterBottom>
                            {edu.degree}
                          </Typography>
                          <Typography variant="body1" color="textSecondary">
                            {edu.institution}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" fontStyle="italic" gutterBottom>
                            {edu.dates}
                          </Typography>
                          {edu.details && (
                            <Typography variant="body2">
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