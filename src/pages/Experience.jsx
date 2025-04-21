import { Container, Grid, Card, CardContent, Typography, Box, Divider, useTheme } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";

const experienceSections = [
  {
    title: "Professional Experience",
    icon: <WorkIcon color="primary" sx={{ fontSize: 40 }} />,
    experiences: [
      {
        role: "Technician",
        company: "Stanley Steemer · Full-time",
        dates: "Mar 2025 – Present",
        location: "Scott, Louisiana",
        skills: "Customer Service, Equipment Operation, Deep Cleaning",
      },
      {
        role: "Delivery Driver",
        company: "DoorDash · Part-time",
        dates: "Nov 2024 – Present",
      },
      {
        role: "Pharmaceutical Packaging Technician",
        company: "Dr. Reddy's Laboratories · Full-time",
        dates: "Dec 2022 – Apr 2023 · 5 mos",
        location: "Shreveport, Louisiana",
        skills: "Record Keeping, Quality Control, Production Operations",
      },
      {
        role: "Associate",
        company: "Lowe’s Companies, Inc. · Part-time",
        dates: "Aug 2022 – Nov 2022 · 4 mos",
        location: "Shreveport, Louisiana",
        skills: "Merchandising, Customer Service, Inventory Management",
      },
      {
        role: "Yard Assistant",
        company: "Milbar Hydro-Test, Inc. · Full-time",
        dates: "May 2020 – Jan 2021 · 9 mos",
        location: "Shreveport, Louisiana",
        skills: "Record Keeping, Quality Control, Equipment Handling",
      },
    ],
  },
];

export default function Experience() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
     

      <Grid container spacing={4}>
        {experienceSections.map((section, index) => (
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

                  {section.experiences.map((exp, i) => (
                    <Box key={i} mb={3}>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {exp.role}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" fontStyle="italic" gutterBottom>
                        {exp.dates}
                      </Typography>
                      {exp.skills && (
                        <Typography variant="body2">
                          <strong>Skills:</strong> {exp.skills}
                        </Typography>
                      )}
                      {i < section.experiences.length - 1 && <Divider sx={{ my: 2 }} />}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
