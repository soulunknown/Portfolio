import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { motion } from "framer-motion";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, px: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            maxWidth: 800,
            p: 4,
            textAlign: "center",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 10px 30px rgba(255, 255, 255, 0.1)"
                : "0px 10px 30px rgba(106, 13, 173, 0.4)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 20px 40px rgba(255, 255, 255, 0.2)"
                  : "0px 20px 40px rgba(106, 13, 173, 0.6)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
                color:
                  theme.palette.mode === "dark" ? "#A97FDB" : "#6a0dad",
                textShadow:
                  theme.palette.mode === "dark"
                    ? "2px 2px 5px rgba(255, 255, 255, 0.1)"
                    : "2px 2px 5px rgba(106, 13, 173, 0.3)",
              }}
            >
              Portfolio
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 1, mb: 3 }}>
              I'm Henry Lewis, a Full-Stack Developer, Music Producer, and
              Creative Thinker from Louisiana.
            </Typography>

            <Box sx={{ textAlign: "left", display: "inline-block" }}>
              <Typography component="div" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CodeIcon
                  sx={{
                    color: "#6a0dad",
                    mr: 1,
                    transition: "0.3s",
                    "&:hover": {
                      filter: "drop-shadow(0 0 6px rgba(106, 13, 173, 0.5))",
                    },
                  }}
                />
                Passionate about building intuitive web applications.
              </Typography>
              <Typography component="div" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <MusicNoteIcon
                  sx={{
                    color: "#d9534f",
                    mr: 1,
                    transition: "0.3s",
                    "&:hover": {
                      filter: "drop-shadow(0 0 6px rgba(217, 83, 79, 0.5))",
                    },
                  }}
                />
                Creating music that resonates and tells a story.
              </Typography>
              <Typography component="div" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <SearchIcon
                  sx={{
                    color: "#6a0dad",
                    mr: 1,
                    transition: "0.3s",
                    "&:hover": {
                      filter: "drop-shadow(0 0 6px rgba(106, 13, 173, 0.5))",
                    },
                  }}
                />
                Exploring new opportunities in tech and music.
              </Typography>
              <Typography component="div" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ConnectWithoutContactIcon
                  sx={{
                    color: "#6a0dad",
                    mr: 1,
                    transition: "0.3s",
                    "&:hover": {
                      filter: "drop-shadow(0 0 6px rgba(106, 13, 173, 0.5))",
                    },
                  }}
                />
                Excited to connect and collaborate with others.
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                borderRadius: "999px",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(106, 13, 173, 0.3)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 18px rgba(106, 13, 173, 0.5)",
                },
              }}
              href="#contact"
            >
              Let’s Connect
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
