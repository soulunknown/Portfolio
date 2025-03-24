import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Divider, 
  useTheme 
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";


const experienceSections = [
  {
    title: "Professional Experience",
    icon: <WorkIcon sx={{ fontSize: 40, color: "#6a0dad" }} />,
    experiences: [
      {
        role: "Carpet Technician",
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


function Experience() {
  const theme = useTheme();

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
        Experience
      </Typography>

      <Grid container spacing={4}>
        {experienceSections.map((section, index) => (
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

                 
                  {section.experiences.map((exp, i) => (
                    <Box key={i} sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6a0dad" }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" sx={{ fontStyle: "italic", color: theme.palette.text.secondary }}>
                        {exp.dates}
                      </Typography>

                      {exp.skills && (
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          <strong>Skills:</strong> {exp.skills}
                        </Typography>
                      )}

                      
                      {i < section.experiences.length - 1 && (
                        <Divider sx={{ my: 2, borderColor: "rgba(106, 13, 173, 0.3)" }} />
                      )}
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

export default Experience;

