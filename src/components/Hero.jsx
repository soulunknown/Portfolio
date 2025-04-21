import { Card, CardContent, Typography, Box, Button, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { motion } from "framer-motion";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="center" mt={5} px={2}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Card>
          <CardContent>
            <Typography variant="h2" color="primary" align="center" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center" paragraph>
              I'm Henry Lewis, a Full-Stack Developer, Music Producer, and Creative Thinker from Louisiana.
            </Typography>

            <Box textAlign="left" maxWidth={600} margin="auto">
              <Box display="flex" alignItems="center" mb={1}>
                <CodeIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Passionate about building intuitive web applications.</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <MusicNoteIcon sx={{ color: theme.palette.error.main, mr: 1 }} />
                <Typography variant="body1">Creating music that resonates and tells a story.</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <SearchIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Exploring new opportunities in tech and music.</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <ConnectWithoutContactIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Excited to connect and collaborate with others.</Typography>
              </Box>
            </Box>

            <Box textAlign="center">
              <Button variant="contained" color="primary" size="large" href="#contact">
                Let’s Connect
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}