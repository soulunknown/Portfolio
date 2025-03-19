import { Card, CardContent, Typography, Box, Button, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Hero() {
  const theme = useTheme(); // ✅ Get theme for Dark Mode support

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, px: 2 }}>
      <Card
        sx={{
          maxWidth: 800,
          p: 4,
          textAlign: "center",
          backgroundColor: theme.palette.background.paper, // ✅ Fix white background
          color: theme.palette.text.primary, // ✅ Ensures text is readable
          boxShadow: theme.palette.mode === "dark"
            ? "0px 10px 30px rgba(255, 255, 255, 0.1)" // ✅ Softer glow in Dark Mode
            : "0px 10px 30px rgba(106, 13, 173, 0.4)", // ✅ Normal glow in Light Mode
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: theme.palette.mode === "dark"
              ? "0px 20px 40px rgba(255, 255, 255, 0.2)" // ✅ Subtle glow in Dark Mode
              : "0px 20px 40px rgba(106, 13, 173, 0.6)", // ✅ Stronger glow in Light Mode
          },
        }}
      >
        <CardContent>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: "bold", 
              color: theme.palette.mode === "dark" ? "#A97FDB" : "#6a0dad", // ✅ Softer purple in Dark Mode
              textShadow: theme.palette.mode === "dark" ? "2px 2px 5px rgba(255, 255, 255, 0.1)" : "2px 2px 5px rgba(106, 13, 173, 0.3)" 
            }}>
            Portfolio
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
            I'm Henry Lewis, a Full-Stack Developer, Music Producer, and Creative Thinker from Louisiana.
          </Typography>

          {/* Bullet Points */}
          <Box sx={{ textAlign: "left", display: "inline-block" }}>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <CodeIcon sx={{ color: "#6a0dad", mr: 1 }} /> Passionate about building intuitive web applications.
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <MusicNoteIcon sx={{ color: "#d9534f", mr: 1 }} /> Creating music that resonates and tells a story.
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <SearchIcon sx={{ color: "#6a0dad", mr: 1 }} /> Exploring new opportunities in tech and music.
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ConnectWithoutContactIcon sx={{ color: "#6a0dad", mr: 1 }} /> Excited to connect and collaborate with others.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="contained" color="primary" sx={{ fontWeight: "bold", px: 3 }}>
              VIEW MY PROJECTS
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                fontWeight: "bold", 
                borderColor: theme.palette.mode === "dark" ? "#A97FDB" : "#6a0dad", // ✅ Adjusted purple in Dark Mode
                color: theme.palette.mode === "dark" ? "#A97FDB" : "#6a0dad", 
                px: 3 
              }}>
              LISTEN TO MUSIC
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
