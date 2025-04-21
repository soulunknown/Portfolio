import { Container, Typography, Box, Grid, Card, CardContent, useTheme } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { motion } from "framer-motion";

const musicSections = [
  {
    title: "Music",
    icon: <MusicNoteIcon color="error" sx={{ fontSize: 40 }} />,
    experiences: [
      {
        role: "Solo Artist & Producer",
        company: "Soul Unknown",
        dates: "Active Since: 2020",
        details: "Genres: Blues, Rock, Experimental",
        notable: "Notable Works: 'I'll Wait for You'",
        skills: "Audio Production, Mixing, Songwriting, Live Performance",
      },
      {
        role: "Record Label Manager & Producer",
        company: "Feel Good Records",
        dates: "Active Since: 2023",
        details: "Managing and producing artists under Feel Good Records",
        skills: "Music Production, Artist Management, Distribution, Marketing",
      },
    ],
  },
];

export default function Music() {
  return (
    <Container maxWidth="lg">
  

      <Grid container spacing={4} mt={4}>
        {musicSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
                    {section.icon}
                    <Typography variant="h5" ml={2}>
                      {section.title}
                    </Typography>
                  </Box>

                  {section.experiences.map((exp, i) => (
                    <Box key={i} mb={3} textAlign="left">
                      <Typography variant="h6" color="error" gutterBottom>
                        {exp.role}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" fontStyle="italic" gutterBottom>
                        {exp.dates}
                      </Typography>
                      {exp.details && (
                        <Typography variant="body2">
                          {exp.details}
                        </Typography>
                      )}
                      {exp.notable && (
                        <Typography variant="body2" fontWeight="bold">
                          {exp.notable}
                        </Typography>
                      )}
                      {exp.skills && (
                        <Typography variant="body2">
                          <strong>Skills:</strong> {exp.skills}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center">
   
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <iframe
                style={{ borderRadius: "12px", width: "100%", maxWidth: "600px" }}
                src="https://open.spotify.com/embed/artist/0NfkWfj6ZOV05fwGodsQnU?utm_source=generator&theme=0"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <iframe
                style={{ borderRadius: "12px", width: "100%", maxWidth: "600px" }}
                src="https://open.spotify.com/embed/artist/1bystgPo0YQMMSFgrr3ZNM?utm_source=generator"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
