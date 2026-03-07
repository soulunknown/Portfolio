import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { motion } from "framer-motion";

const musicSections = [
  {
    title: "Music",
    icon: <MusicNoteIcon color="error" sx={{ fontSize: 36 }} />,
    experiences: [
      {
        role: "Solo Artist & Producer",
        company: "Soul Unknown",
        dates: "Since 2020",
        details: "Blues, rock, and experimental music.",
        notable: "'I'll Wait for You'",
        skills: "Production, Mixing, Songwriting, Performance",
      },
      {
        role: "Label Manager & Producer",
        company: "Feel Good Records",
        dates: "Since 2023",
        details: "Overseeing indie releases and artist work.",
        skills: "Production, Artist Management, Distribution",
      },
    ],
  },
];

export default function Music() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {musicSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {section.icon}
                    <Typography variant="h5" ml={2}>
                      {section.title}
                    </Typography>
                  </Box>

                  {section.experiences.map((exp, i) => (
                    <Box key={i} mb={2}>
                      <Typography variant="h6" color="error">
                        {exp.role}
                      </Typography>
                      <Typography variant="body2">{exp.company}</Typography>
                      <Typography variant="body2" fontStyle="italic">{exp.dates}</Typography>
                      {exp.details && <Typography variant="body2">{exp.details}</Typography>}
                      {exp.notable && <Typography variant="body2"><strong>Track:</strong> {exp.notable}</Typography>}
                      {exp.skills && <Typography variant="body2"><strong>Skills:</strong> {exp.skills}</Typography>}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box mt={5}>
        <Grid container spacing={3} justifyContent="center">
          {[
            "https://open.spotify.com/embed/artist/0NfkWfj6ZOV05fwGodsQnU?utm_source=generator&theme=0",
            "https://open.spotify.com/embed/artist/1bystgPo0YQMMSFgrr3ZNM?utm_source=generator",
          ].map((src, i) => (
            <Grid key={i} item xs={12} sm={6} display="flex" justifyContent="center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <iframe
                  style={{ borderRadius: 12, width: "100%", maxWidth: 600 }}
                  src={src}
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
