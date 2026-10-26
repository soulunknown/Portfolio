import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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

export default function Blog() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: { xs: 4, md: 7 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Box component="header" sx={{ mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
        <Typography
          variant="overline"
          color="primary.main"
          sx={{ fontWeight: 700, letterSpacing: "0.16em" }}
        >
          Henry’s Journal
        </Typography>

        <Typography
          component="h1"
          sx={{
            mt: 1,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "text.primary",
          }}
        >
          Life, lately.
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.2rem" },
            lineHeight: 1.7,
          }}
        >
          Thoughts on life, things I’m making, and what I’m learning
          along the way.
        </Typography>
      </Box>

      {sortedPosts.length === 0 ? (
        <Typography color="text.secondary">
          No posts yet. Check back soon.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: 3,
          }}
        >
          {sortedPosts.map((post, index) => {
            const featured = index === 0;

            return (
              <Card
                key={post.id}
                component="article"
                elevation={0}
                sx={(theme) => ({
                  gridColumn: featured ? "1 / -1" : "auto",
                  minWidth: 0,
                  borderRadius: { xs: 3, md: 4 },
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  backgroundImage: featured
                    ? `linear-gradient(
                        135deg,
                        ${alpha(theme.palette.primary.main, 0.08)},
                        ${alpha(theme.palette.background.paper, 0)} 75%
                      )`
                    : "none",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  "&:hover, &:focus-within": {
                    borderColor: alpha(theme.palette.primary.main, 0.5),
                    boxShadow: `0 16px 40px ${alpha(
                      theme.palette.common.black,
                      theme.palette.mode === "dark" ? 0.2 : 0.07
                    )}`,
                  },
                  "@media (hover: hover)": {
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                    "&:hover": {
                      transform: "none",
                    },
                  },
                })}
              >
                <CardActionArea
                  component={RouterLink}
                  to={`/blog/${post.id}`}
                  aria-labelledby={`post-title-${post.id}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    height: "100%",
                    p: featured
                      ? { xs: 3, sm: 4, md: 5 }
                      : { xs: 3, sm: 4 },
                    color: "inherit",
                    textDecoration: "none",
                    "&.Mui-focusVisible": {
                      outline: "3px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "-3px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    {featured && (
                      <Typography
                        variant="caption"
                        sx={(theme) => ({
                          px: 1.25,
                          py: 0.5,
                          borderRadius: 1.5,
                          color: "primary.main",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                        })}
                      >
                        LATEST POST
                      </Typography>
                    )}

                    <Typography
                      component="time"
                      dateTime={post.date}
                      variant="body2"
                      color="text.secondary"
                    >
                      {formatDate(post.date)}
                    </Typography>
                  </Box>

                  <Typography
                    id={`post-title-${post.id}`}
                    component="h2"
                    sx={{
                      mb: 1.5,
                      maxWidth: 800,
                      fontSize: featured
                        ? { xs: "1.75rem", md: "2.4rem" }
                        : { xs: "1.4rem", md: "1.65rem" },
                      fontWeight: 750,
                      lineHeight: 1.25,
                      letterSpacing: "-0.025em",
                      overflowWrap: "break-word",
                      textWrap: "balance",
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    sx={{
                      mb: 3,
                      maxWidth: 720,
                      color: "text.secondary",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      overflowWrap: "break-word",
                    }}
                  >
                    {post.summary}
                  </Typography>

                  <Box
                    sx={{
                      mt: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "primary.main",
                    }}
                  >
                    <Typography variant="body2" fontWeight={700}>
                      Read story
                    </Typography>

                    <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />
                  </Box>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>
      )}
    </Container>
  );
}