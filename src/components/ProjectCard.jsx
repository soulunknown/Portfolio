import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  imageDark,
  link,
  techStack = [],
}) {
  const theme = useTheme();

  
  const currentImage = theme.palette.mode === "dark" && imageDark ? imageDark : image;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: "100%",
          maxWidth: 700,
          m: 2,
          border: `2px solid ${theme.palette.accent || "#6a0dad"}`,
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 12px rgba(255, 255, 255, 0.1)"
              : "0 4px 12px rgba(106, 13, 173, 0.5)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 6px 16px rgba(255, 255, 255, 0.2)"
                : "0 6px 16px rgba(106, 13, 173, 0.8)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: "40%" },
            height: "100%",
            objectFit: "cover",
            borderRadius: { xs: "4px 4px 0 0", sm: "4px 0 0 4px" },
          }}
          image={currentImage}
          alt={title}
        />

        <CardContent sx={{ flex: 1, p: 3, textAlign: "left" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            {description}
          </Typography>

          {/* Tech Stack Chips */}
          {techStack.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "dark" ? "#2E2E2E" : "#f1e6fa",
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              px: 3,
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 4px 8px rgba(255, 255, 255, 0.1)"
                  : "0 4px 8px rgba(106, 13, 173, 0.3)",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 6px 12px rgba(255, 255, 255, 0.2)"
                    : "0 6px 12px rgba(106, 13, 173, 0.5)",
              },
            }}
          >
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
