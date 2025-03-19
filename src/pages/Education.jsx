import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const educationSections = [
  {
    title: "Education",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#6a0dad" }} />,
    education: [
      {
        degree: "Web Development Bootcamp",
        institution: "Fullstack Academy / Louisiana State University",
        dates: "October 2023",
        details: "Completed an intensive program covering front-end and back-end technologies, including JavaScript, React, Node.js, and SQL."
      },
      {
        degree: "Bachelor of General Studies",
        institution: "Louisiana State University Shreveport",
        dates: "May 2024",
        details: "Gained a broad education with a focus on critical thinking, research, and technology-related coursework."
      }
    ]
  }
];

function Education() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
        My Education
      </Typography>
      <Grid container spacing={4}>
        {educationSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ boxShadow: "0 0 15px rgba(106, 13, 173, 0.3)", borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {section.icon}
                  <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
                    {section.title}
                  </Typography>
                </Box>
                {section.education.map((edu, i) => (
                  <Box key={i} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a0dad" }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {edu.institution}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555" }}>
                      {edu.dates}
                    </Typography>
                    {edu.details && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Details:</strong> {edu.details}
                      </Typography>
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Education;
