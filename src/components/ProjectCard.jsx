import { Card, CardContent, CardMedia, Typography, Button, Box, Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, imageDark, link, techStack = [] }) {
  const theme = useTheme();

  const currentImage = theme.palette.mode === "dark" && imageDark ? imageDark : image;

  return (
    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <Card>
        <CardMedia component="img" image={currentImage} alt={title} sx={{ width: { xs: "100%", sm: "40%" }, objectFit: "cover" }} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body2" color="textSecondary" paragraph>
            {description}
          </Typography>

          {techStack.length > 0 && (
            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
              {techStack.map((tech) => (
                <Chip key={tech} label={tech} />
              ))}
            </Box>
          )}

          <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
