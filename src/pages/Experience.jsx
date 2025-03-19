import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";

const experienceSections = [
    {
      title: "Professional Experience",
      icon: <WorkIcon sx={{ fontSize: 40, color: "#6a0dad" }} />,
      experiences: [
        {
          role: "Delivery Driver",
          company: "DoorDash · Part-time",
          dates: "Nov 2024 – Present · 5 mos",
        },
        {
          role: "Pharmaceutical Packaging Technician",
          company: "Dr. Reddy's Laboratories · Full-time",
          dates: "Dec 2022 – Apr 2023 · 5 mos",
          location: "Shreveport, Louisiana, United States",
          skills: "Record Keeping, Quality Control, Production Operations",
        },
        {
          role: "Associate",
          company: "Lowe’s Companies, Inc. · Part-time",
          dates: "Aug 2022 – Nov 2022 · 4 mos",
          location: "Shreveport, Louisiana, United States",
          skills: "Merchandising, Customer Service, Inventory Management",
        },
        {
          role: "Yard Assistant",
          company: "Milbar Hydro-Test, Inc. · Full-time",
          dates: "May 2020 – Jan 2021 · 9 mos",
          location: "Shreveport, Louisiana, United States",
          skills: "Record Keeping, Quality Control, Equipment Handling",
        },
      ],
    },
  ];


function Experience() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
        My Experience
      </Typography>
      <Grid container spacing={4}>
        {experienceSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ boxShadow: "0 0 15px rgba(106, 13, 173, 0.3)", borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {section.icon}
                  <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
                    {section.title}
                  </Typography>
                </Box>
                {section.experiences.map((exp, i) => (
                  <Box key={i} sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a0dad" }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555" }}>
                      {exp.dates}
                    </Typography>
                    {exp.skills && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Skills:</strong> {exp.skills}
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

export default Experience;  // ✅ Ensure this is present
