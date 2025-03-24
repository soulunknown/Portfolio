import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";

export default function BlogCard({ post }) {
  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.date}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {post.summary}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button
            component={Link}
            to={`/blog/${post.id}`}
            variant="outlined"
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
