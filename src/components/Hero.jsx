
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
import { Link } from "react-router-dom";

// Animated lava lamp background
function LavaLamp() {
  const blobs = [
    {
      color: "#4f46e5",
      size: 550,
      top: "-20%",
      left: "-15%",
      duration: 19,
      delay: 0,
    },
    {
      color: "#ff2d55",
      size: 600,
      top: "20%",
      left: "65%",
      duration: 24,
      delay: -6,
    },
    {
      color: "#2563eb",
      size: 450,
      top: "65%",
      left: "5%",
      duration: 21,
      delay: -10,
    },
    {
      color: "#ff00aa",
      size: 380,
      top: "40%",
      left: "30%",
      duration: 26,
      delay: -4,
    },
    {
      color: "#ff6a00",
      size: 500,
      top: "70%",
      left: "70%",
      duration: 23,
      delay: -12,
    },
    {
      color: "#9333ea",
      size: 300,
      top: "5%",
      left: "55%",
      duration: 17,
      delay: -8,
    },
  ];

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: "#080016",
        zIndex: 0,
        pointerEvents: "none",
        isolation: "isolate",

        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(35px)",
          WebkitBackdropFilter: "blur(35px)",
          pointerEvents: "none",
        },
      }}
    >
      {blobs.map((blob, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: blob.size,
            height: blob.size,
            maxWidth: "90vw",
            maxHeight: "90vw",
            top: blob.top,
            left: blob.left,
            borderRadius: "50%",
            opacity: 0.85,
            background: `radial-gradient(
              circle,
              ${blob.color} 0%,
              ${blob.color} 40%,
              transparent 75%
            )`,
            filter: "blur(8px)",
            willChange: "transform, border-radius",
            animation: `lavaMove ${blob.duration}s ease-in-out ${blob.delay}s infinite alternate`,

            "@keyframes lavaMove": {
              "0%": {
                transform:
                  "translate(0, 0) scale(1) rotate(0deg)",
                borderRadius: "50% 60% 40% 70%",
              },
              "25%": {
                transform:
                  "translate(100px, -120px) scale(1.2) rotate(90deg)",
                borderRadius: "70% 40% 60% 45%",
              },
              "50%": {
                transform:
                  "translate(-80px, 100px) scale(0.85) rotate(180deg)",
                borderRadius: "40% 70% 50% 65%",
              },
              "75%": {
                transform:
                  "translate(120px, 60px) scale(1.3) rotate(270deg)",
                borderRadius: "65% 45% 75% 40%",
              },
              "100%": {
                transform:
                  "translate(-100px, -80px) scale(1) rotate(360deg)",
                borderRadius: "50% 60% 40% 70%",
              },
            },

            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        />
      ))}
    </Box>
  );
}

export default function Hero() {
  const theme = useTheme();

  const interests = [
    {
      icon: CodeIcon,
      color: "#a855f7",
      text: "Writing clean, functional code.",
    },
    {
      icon: MusicNoteIcon,
      color: "#ff4d6d",
      text: "Producing and recording original music.",
    },
    {
      icon: SearchIcon,
      color: "#facc15",
      text: "Trying out new tools and ideas.",
    },
    {
      icon: ConnectWithoutContactIcon,
      color: "#22c55e",
      text: "Open to working together or talking tech.",
    },
  ];

  return (
    <>
      {/* Moving lava lamp background */}
      <LavaLamp />

      {/* Hero content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          px: 2,
          py: 8,
          position: "relative",
          zIndex: 10,
          isolation: "isolate",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            maxWidth: 820,
          }}
        >
          <Card
            sx={{
              width: "100%",
              boxSizing: "border-box",
              p: { xs: 2, sm: 5 },
              textAlign: "center",
              borderRadius: 6,
              overflow: "hidden",

              background:
                theme.palette.mode === "dark"
                  ? "rgba(10, 5, 30, 0.55)"
                  : "rgba(255, 255, 255, 0.75)",

              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",

              border:
                "1px solid rgba(255, 255, 255, 0.2)",

              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <CardContent>
              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "2.2rem",
                    sm: "3rem",
                    md: "3.5rem",
                  },
                  background:
                    "linear-gradient(90deg, #4f46e5, #d946ef, #ff4d6d, #ff6a00)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation:
                    "pulseText 6s ease-in-out infinite",
                  mb: 3,

                  "@keyframes pulseText": {
                    "0%": {
                      backgroundPosition: "0% center",
                    },
                    "50%": {
                      backgroundPosition: "100% center",
                    },
                    "100%": {
                      backgroundPosition: "0% center",
                    },
                  },

                  "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                  },
                }}
              >
                Henry Lewis
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="subtitle1"
                sx={{
                  color: theme.palette.text.primary,
                  opacity: 0.9,
                  maxWidth: 640,
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.7,
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1.1rem",
                  },
                }}
              >
                I'm a developer and music producer from
                Louisiana. I like building things, making
                music, and learning through hands-on work.
              </Typography>

              {/* Interests */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  textAlign: "left",
                }}
              >
                {interests.map((item, index) => {
                  const IconComponent = item.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.15,
                      }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          p: 1.5,
                          borderRadius: 3,

                          background:
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.06)"
                              : "rgba(255,255,255,0.35)",

                          border:
                            "1px solid rgba(255,255,255,0.1)",

                          transition:
                            "background 0.3s ease",

                          "&:hover": {
                            background:
                              theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.12)"
                                : "rgba(255,255,255,0.6)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 42,
                            height: 42,
                            borderRadius: "50%",
                            background:
                              `${item.color}20`,
                          }}
                        >
                          <IconComponent
                            sx={{
                              color: item.color,
                              fontSize: 25,
                            }}
                          />
                        </Box>

                        <Typography
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                            },
                            color:
                              theme.palette.text.primary,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>

              {/* Contact Button */}
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  color: "#fff",

                  background:
                    "linear-gradient(90deg, #4f46e5, #d946ef, #ff4d6d)",

                  backgroundSize: "200% auto",

                  boxShadow:
                    "0 6px 25px rgba(168, 85, 247, 0.4)",

                  transition:
                    "all 0.3s ease",

                  "&:hover": {
                    backgroundPosition: "100% center",
                    boxShadow:
                      "0 10px 35px rgba(217, 70, 239, 0.5)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Reach Out →
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </>
  );
}
