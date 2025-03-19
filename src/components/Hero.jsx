import { Container, Typography, Box, Button, List, ListItem, ListItemIcon } from "@mui/material";
import { Code, MusicNote, Search, ConnectWithoutContact } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      {/* Glowing Welcome Text */}
      <Typography 
        variant="h2" 
        gutterBottom 
        sx={{ fontWeight: "bold", color: "#6a0dad", textShadow: "0 0 10px rgba(106, 13, 173, 0.7)" }}
      >
        Portfolio
      </Typography>

      {/* Brief Intro */}
      <Typography variant="h5" color="text.secondary" gutterBottom>
        I'm Henry Lewis, a Full-Stack Developer, Music Producer, and Creative Thinker from Louisiana.
      </Typography>

      {/* Bullet Point List with Icons */}
      <List sx={{ textAlign: "left", display: "inline-block", mt: 2 }}>
        <ListItem>
          <ListItemIcon>
            <Code sx={{ color: "#6a0dad" }} />
          </ListItemIcon>
          <Typography variant="h6">
            Passionate about building intuitive web applications.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MusicNote sx={{ color: "#6a0dad" }} />
          </ListItemIcon>
          <Typography variant="h6">
            Creating music that resonates and tells a story.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Search sx={{ color: "#6a0dad" }} />
          </ListItemIcon>
          <Typography variant="h6">
            Exploring new opportunities in tech and music.
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ConnectWithoutContact sx={{ color: "#6a0dad" }} />
          </ListItemIcon>
          <Typography variant="h6">
            Excited to connect and collaborate with others.
          </Typography>
        </ListItem>
      </List>

      {/* Buttons for Navigation */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/projects">
          View My Projects
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/music">
          Listen to Music
        </Button>
      </Box>
    </Container>
  );
}
