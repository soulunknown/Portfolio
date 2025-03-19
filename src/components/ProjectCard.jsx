import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <Card
      sx={{
        display: "flex", // Makes the card horizontal
        flexDirection: { xs: "column", sm: "row" }, // Column for mobile, row for larger screens
        alignItems: "center",
        width: "100%",
        maxWidth: 700, // Adjust width for better readability
        m: 2,
        border: "2px solid #6a0dad",
        boxShadow: "0 4px 10px rgba(106, 13, 173, 0.5)",
        transition: "0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 15px rgba(106, 13, 173, 0.8)",
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "40%" }, // Full width on small screens, 40% on larger screens
          height: "auto",
          objectFit: "cover",
          borderRadius: "4px",
        }}
        image={image}
        alt={title}
      />

      <CardContent sx={{ flex: "1", padding: "16px", textAlign: "left" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Button>
      </CardContent>
    </Card>
  );
}
