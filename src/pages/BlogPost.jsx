import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { alpha } from "@mui/material/styles";
import { blogPosts } from "../data/blogPosts";

function formatDate(date) {
  const [year, month, day] = date.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  const backButton = (
    <Button
      component={RouterLink}
      to="/blog"
      startIcon={<ArrowBackRoundedIcon />}
      sx={{
        mb: 3,
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
      }}
    >
      Back to blog
    </Button>
  );

  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ py: { xs: 6, md: 10 } }}>
        {backButton}

        <Typography variant="h4" component="h1" fontWeight={700}>
          Post not found
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          This post may have moved or is no longer available.
        </Typography>
      </Container>
    );
  }

  const wordCount = post.content
    .replace(/<[^>]*>/g, " ")
    .trim()
    .split(/\s+/).length;

  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <Container
      maxWidth="md"
      sx={{
        pt: { xs: 4, md: 7 },
        pb: { xs: 6, md: 10 },
      }}
    >
      {backButton}

      <Paper
        component="article"
        elevation={0}
        sx={(theme) => ({
          position: "relative",
          overflow: "hidden",
          borderRadius: { xs: 3, md: 5 },
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: `0 20px 70px ${alpha(
            theme.palette.common.black,
            theme.palette.mode === "dark" ? 0.2 : 0.06
          )}`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(
              90deg,
              ${theme.palette.primary.main},
              ${theme.palette.secondary.main}
            )`,
          },
        })}
      >
        <Box sx={{ px: { xs: 3, sm: 5, md: 8 }, py: { xs: 4, md: 7 } }}>
          <Box component="header">
            <Typography
              variant="overline"
              color="primary.main"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.16em",
              }}
            >
              Henry’s Journal
            </Typography>

            <Typography
              component="h1"
              sx={{
                mt: 1.5,
                mb: 2.5,
                color: "text.primary",
                fontSize: {
                  xs: "2rem",
                  sm: "2.6rem",
                  md: "3.2rem",
                },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.035em",
                overflowWrap: "break-word",
                textWrap: "balance",
              }}
            >
              {post.title}
            </Typography>

            {post.summary && (
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {post.summary}
              </Typography>
            )}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                color: "text.secondary",
              }}
            >
              <Typography
                component="time"
                dateTime={post.date}
                variant="body2"
              >
                {formatDate(post.date)}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.75,
                }}
              >
                <AccessTimeRoundedIcon sx={{ fontSize: 17 }} />

                <Typography variant="body2">
                  {readingTime} min read
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 3, md: 4 } }} />

          <Box
            sx={(theme) => ({
              color: "text.primary",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
              lineHeight: 1.9,
              overflowWrap: "break-word",

              "& p": {
                margin: "0 0 1.5em",
              },

              "& > :last-child": {
                marginBottom: 0,
              },

              "& h2, & h3": {
                marginTop: "1.8em",
                marginBottom: "0.7em",
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
              },

              "& h2": {
                fontSize: "1.65em",
              },

              "& h3": {
                fontSize: "1.3em",
              },

              "& a": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
                textDecorationColor: alpha(
                  theme.palette.primary.main,
                  0.4
                ),
                textUnderlineOffset: "4px",
                transition: "text-decoration-color 150ms ease",
              },

              "& a:hover": {
                textDecorationColor: theme.palette.primary.main,
              },

              "& a:focus-visible": {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: 4,
                borderRadius: 2,
              },

              "& strong": {
                fontWeight: 700,
              },

              "& ul, & ol": {
                paddingLeft: "1.5em",
                marginBottom: "1.5em",
              },

              "& li": {
                marginBottom: "0.5em",
              },

              "& blockquote": {
                margin: "1.5em 0",
                padding: "1em 1.25em",
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                backgroundColor: alpha(theme.palette.primary.main, 0.06),
                borderRadius: "0 12px 12px 0",
                color: "text.secondary",
                "& p:last-child": {
                  marginBottom: 0,
                },
              },

              "& img": {
                display: "block",
                maxWidth: "100%",
                height: "auto",
                borderRadius: 3,
                margin: "2em auto",
              },

              "& pre": {
                overflowX: "auto",
                padding: 2,
                borderRadius: 2,
                backgroundColor: theme.palette.action.hover,
                fontSize: "0.85em",
              },
            })}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Box>
      </Paper>
    </Container>
  );
}