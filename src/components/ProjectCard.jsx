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
      <Card sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, boxShadow: 3, borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={currentImage}
          alt={title}
          sx={{ width: { xs: "100%", sm: "40%" }, height: "100%", objectFit: "cover" }}
        />

        <CardContent sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>

          {techStack.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {techStack.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
