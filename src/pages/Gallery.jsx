
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Dialog,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Abstract Artwork",
    category: "Artwork",
    image: "/gallery/artwork1.webp",
    description: "An exploration of abstract shapes and colors.",
  },
  {
    id: 2,
    title: "Sketchbook",
    category: "Sketches",
    image: "wave.jpg",
    description: "A collection of hand drawn ideas.",
  },
  {
    id: 3,
    title: "Photography",
    category: "Photography",
    image: "/costa rica.jpeg",
    description: "Capturing moments through photography.",
  },
];

const categories = [
  "All",
  "Artwork",
  "Photography",
  "Sketches",
];

export default function Gallery() {
  const theme = useTheme();
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    category === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === category
        );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        Gallery
      </Typography>

      <Typography
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        A collection of my artwork, sketches,
        photography, and creative explorations.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 5,
        }}
      >
        {categories.map((item) => (
          <Chip
            key={item}
            label={item}
            clickable
            color={
              category === item ? "primary" : "default"
            }
            variant={
              category === item ? "filled" : "outlined"
            }
            onClick={() => setCategory(item)}
          />
        ))}
      </Box>

      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <Card
                onClick={() => setSelectedImage(item)}
                sx={{
                  cursor: "pointer",
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor:
                    theme.palette.background.paper,
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 250,
                    objectFit: "cover",
                  }}
                />

                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
      >
        {selectedImage && (
          <Box sx={{ position: "relative", p: 2 }}>
            <IconButton
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
                backgroundColor: "background.paper",
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              component="img"
              src={selectedImage.image}
              alt={selectedImage.title}
              sx={{
                width: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
              }}
            />

            <Typography
              variant="h5"
              sx={{ mt: 2 }}
            >
              {selectedImage.title}
            </Typography>

            <Typography color="text.secondary">
              {selectedImage.description}
            </Typography>
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
