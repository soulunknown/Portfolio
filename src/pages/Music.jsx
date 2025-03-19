import { Container, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const musicSections = [
  {
    title: "Music",
    icon: <MusicNoteIcon sx={{ fontSize: 40, color: "#d9534f" }} />,
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
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5, px: { xs: 2, md: 0 } }}>
      {/* Header */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "#d9534f" }}>
       
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        
      </Typography>

      {/* Experience Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {musicSections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ boxShadow: "0 0 15px rgba(217, 83, 79, 0.3)", borderRadius: 3, p: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2, justifyContent: "center" }}>
                  {section.icon}
                  <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
                    {section.title}
                  </Typography>
                </Box>
                {section.experiences.map((exp, i) => (
                  <Box key={i} sx={{ mb: 3, textAlign: "left" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#d9534f" }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555" }}>
                      {exp.dates}
                    </Typography>
                    {exp.details && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {exp.details}
                      </Typography>
                    )}
                    {exp.notable && (
                      <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                        {exp.notable}
                      </Typography>
                    )}
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

      {/* Spotify Embed Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          
        </Typography>

        {/* First Spotify Player */}
        <Box sx={{ mt: 2, maxWidth: "100%", overflow: "hidden", borderRadius: "12px" }}>
          <iframe
            style={{ borderRadius: "12px", width: "100%", maxWidth: "600px" }}
            src="https://open.spotify.com/embed/artist/0NfkWfj6ZOV05fwGodsQnU?utm_source=generator&theme=0"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>

        {/* Second Spotify Player */}
        <Box sx={{ mt: 3, maxWidth: "100%", overflow: "hidden", borderRadius: "12px" }}>
          <iframe
            style={{ borderRadius: "12px", width: "100%", maxWidth: "600px" }}
            src="https://open.spotify.com/embed/artist/1bystgPo0YQMMSFgrr3ZNM?utm_source=generator"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
}
