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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 10,
        px: 2,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Ambient background light effect */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(106,13,173,0.3), transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card
          sx={{
            maxWidth: 820,
            p: { xs: 3, sm: 5 },
            textAlign: "center",
            borderRadius: 6,
            background:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(12px)",
            boxShadow: theme.palette.mode === "dark"
              ? "0px 15px 35px rgba(255,255,255,0.05)"
              : "0px 15px 35px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" },
                background: "linear-gradient(90deg,rgb(72, 108, 192),rgb(235, 43, 43))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "pulseText 5s ease-in-out infinite",
                mb: 2,
                "@keyframes pulseText": {
                  "0%": { backgroundPosition: "0% center" },
                  "50%": { backgroundPosition: "100% center" },
                  "100%": { backgroundPosition: "0% center" },
                },
              }}
            >
              Henry Lewis
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.0,
              }}
            >
              I'm a developer and music producer from Louisiana. I like building things, making music, and learning through hands-on work.
            </Typography>

            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                maxWidth: 600,
                margin: "0 auto 32px auto",
                mt: 4,
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }} style={{ width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CodeIcon sx={{ color: "#6a0dad", mr: 1 }} />
                  <Typography>Writing clean, functional code.</Typography>
                </Box>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} style={{ width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MusicNoteIcon sx={{ color: "#d9534f", mr: 1 }} />
                  <Typography>Producing and recording original music.</Typography>
                </Box>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} style={{ width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchIcon sx={{ color: "gold", mr: 1 }} />
                  <Typography>Trying out new tools and ideas.</Typography>
                </Box>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} style={{ width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ConnectWithoutContactIcon sx={{ color: "green", mr: 1 }} />
                  <Typography>Open to working together or talking tech.</Typography>
                </Box>
              </motion.div>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contact"
              sx={{
                px: 5,
                borderRadius: "50px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 6px 15px rgba(106, 13, 173, 0.3)",
                "&:hover": {
                  boxShadow: "0 8px 20px rgba(106, 13, 173, 0.5)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Reach Out
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
