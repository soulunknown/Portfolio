
import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  Shuffle,
  RestartAlt,
} from "@mui/icons-material";

const PALETTES = {
  Neon: ["#ff00cc", "#00ffff", "#ffff00", "#8a2be2"],
  Sunset: ["#ff416c", "#ff9a44", "#ffd166", "#9d4edd"],
  Ocean: ["#00f5d4", "#00bbf9", "#4361ee", "#7209b7"],
  Candy: ["#ff4dcb", "#b388ff", "#64ffda", "#ffe066"],
};

const MODES = ["Liquid", "Kaleidoscope", "Cosmic", "Waves"];

const DEFAULTS = {
  mode: "Liquid",
  palette: "Neon",
  speed: 1,
  intensity: 60,
};

const TAU = Math.PI * 2;
const FPS = 24;
const FRAME_TIME = 1000 / FPS;

function drawBackground(ctx, w, h, colors) {
  const gradient = ctx.createLinearGradient(0, 0, w, h);

  gradient.addColorStop(0, "#08021a");
  gradient.addColorStop(0.5, "#13052b");
  gradient.addColorStop(1, "#02040f");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);

  // Static atmosphere
  const glow = ctx.createRadialGradient(
    w * 0.5,
    h * 0.5,
    0,
    w * 0.5,
    h * 0.5,
    Math.max(w, h) * 0.65
  );

  glow.addColorStop(0, colors[0] + "30");
  glow.addColorStop(1, "transparent");

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);
}

function drawLiquid(ctx, w, h, t, colors, intensity, pointer) {
  const count = 7;
  const base = Math.min(w, h);

  for (let i = 0; i < count; i++) {
    const angle = i * 2.4 + t * (0.3 + i * 0.025);

    const x =
      w / 2 +
      Math.cos(angle) * w * 0.32 +
      pointer.x * 35;

    const y =
      h / 2 +
      Math.sin(angle * 1.3) * h * 0.32 +
      pointer.y * 35;

    const radius =
      base * (0.12 + (i % 3) * 0.035) *
      (0.7 + intensity * 0.5);

    const gradient = ctx.createRadialGradient(
      x, y, 0,
      x, y, radius
    );

    gradient.addColorStop(0, colors[i % colors.length] + "cc");
    gradient.addColorStop(0.5, colors[i % colors.length] + "66");
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TAU);
    ctx.fill();
  }
}

function drawKaleidoscope(ctx, w, h, t, colors, intensity) {
  const cx = w / 2;
  const cy = h / 2;
  const maxRadius = Math.min(w, h) * 0.46;
  const segments = 12;

  ctx.save();
  ctx.translate(cx, cy);

  for (let i = 0; i < segments; i++) {
    ctx.save();
    ctx.rotate((i / segments) * TAU + t * 0.05);

    for (let j = 0; j < 5; j++) {
      const distance =
        (j + 1) * maxRadius / 6;

      const x =
        distance *
        Math.cos(t * 0.25 + j * 0.8);

      const y =
        distance *
        Math.sin(t * 0.25 + j * 0.8) *
        0.25;

      ctx.beginPath();
      ctx.arc(
        x,
        y,
        5 + intensity * 12,
        0,
        TAU
      );

      ctx.fillStyle = colors[j % colors.length];
      ctx.globalAlpha = 0.55;
      ctx.fill();
    }

    ctx.restore();
  }

  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawCosmic(ctx, w, h, t, colors, intensity) {
  const cx = w / 2;
  const cy = h / 2;
  const count = 90;
  const maxRadius = Math.min(w, h) * 0.5;

  for (let i = 0; i < count; i++) {
    const fraction = i / count;

    const angle =
      i * 2.39996 +
      t * 0.15 +
      fraction * 12;

    const radius = fraction * maxRadius;

    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.arc(
      x,
      y,
      1 + intensity * 2.5,
      0,
      TAU
    );

    ctx.fillStyle = colors[i % colors.length];
    ctx.globalAlpha = 0.4 + fraction * 0.6;
    ctx.fill();
  }

  ctx.globalAlpha = 1;
}

function drawWaves(ctx, w, h, t, colors, intensity, pointer) {
  const lines = 12;

  for (let i = 0; i < lines; i++) {
    ctx.beginPath();

    const baseY = (i + 1) * h / (lines + 1);

    for (let x = 0; x <= w; x += 12) {
      const y =
        baseY +
        Math.sin(x * 0.015 + t + i * 0.6) *
          35 * intensity +
        Math.sin(x * 0.007 - t * 0.5 + i) *
          25 * intensity +
        pointer.y * 10;

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = colors[i % colors.length];
    ctx.lineWidth = 1.5 + intensity * 2;
    ctx.globalAlpha = 0.35 + intensity * 0.45;
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
}

function renderFrame(ctx, w, h, t, settings, pointer) {
  const colors = PALETTES[settings.palette];
  const intensity = settings.intensity / 100;

  drawBackground(ctx, w, h, colors);

  switch (settings.mode) {
    case "Liquid":
      drawLiquid(ctx, w, h, t, colors, intensity, pointer);
      break;

    case "Kaleidoscope":
      drawKaleidoscope(ctx, w, h, t, colors, intensity);
      break;

    case "Cosmic":
      drawCosmic(ctx, w, h, t, colors, intensity);
      break;

    case "Waves":
      drawWaves(ctx, w, h, t, colors, intensity, pointer);
      break;

    default:
      break;
  }
}

export default function Psychedelic() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const settingsRef = useRef(DEFAULTS);
  const pointerRef = useRef({ x: 0, y: 0 });
  const playingRef = useRef(true);
  const redrawRef = useRef(() => {});

  const [mode, setMode] = useState(DEFAULTS.mode);
  const [palette, setPalette] = useState(DEFAULTS.palette);
  const [speed, setSpeed] = useState(DEFAULTS.speed);
  const [intensity, setIntensity] = useState(DEFAULTS.intensity);

  const [playing, setPlaying] = useState(
    () =>
      typeof window !== "undefined" &&
      !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
  );

  settingsRef.current = {
    mode,
    palette,
    speed,
    intensity,
  };

  playingRef.current = playing;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", {
      alpha: false,
    });

    if (!ctx) return;

    let frameId = 0;
    let lastFrame = 0;
    let elapsed = 0;
    let lastTimestamp = 0;
    let width = 1;
    let height = 1;

    const redraw = () => {
      renderFrame(
        ctx,
        width,
        height,
        elapsed,
        settingsRef.current,
        pointerRef.current
      );
    };

    redrawRef.current = redraw;

    const resize = () => {
      const rect = container.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      // Limit canvas pixel count for performance
      const scale = Math.min(
        window.devicePixelRatio || 1,
        1.25
      );

      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);

      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      redraw();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const animate = (timestamp) => {
      const delta = lastTimestamp
        ? Math.min((timestamp - lastTimestamp) / 1000, 0.05)
        : 0;

      lastTimestamp = timestamp;

      if (
        playingRef.current &&
        document.visibilityState === "visible" &&
        timestamp - lastFrame >= FRAME_TIME
      ) {
        elapsed += delta * settingsRef.current.speed;
        redraw();
        lastFrame = timestamp;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      redrawRef.current = () => {};
    };
  }, []);

  // Update canvas immediately when controls change
  useEffect(() => {
    redrawRef.current();
  }, [mode, palette, speed, intensity, playing]);

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();

    pointerRef.current = {
      x:
        ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y:
        ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    };

    if (!playing) redrawRef.current();
  };

  const randomize = () => {
    setMode(MODES[Math.floor(Math.random() * MODES.length)]);

    const palettes = Object.keys(PALETTES);

    setPalette(
      palettes[Math.floor(Math.random() * palettes.length)]
    );

    setSpeed(Number((0.5 + Math.random() * 1.5).toFixed(1)));
    setIntensity(Math.round(30 + Math.random() * 70));
  };

  const reset = () => {
    setMode(DEFAULTS.mode);
    setPalette(DEFAULTS.palette);
    setSpeed(DEFAULTS.speed);
    setIntensity(DEFAULTS.intensity);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 900,
          mb: 1,
          background:
            "linear-gradient(90deg,#ff4ecd,#8b5cf6,#22d3ee)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Animation Lab
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Explore color, movement, and geometry.
      </Typography>

      {/* Lightweight Canvas */}
      <Box
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => {
          pointerRef.current = { x: 0, y: 0 };
          if (!playing) redrawRef.current();
        }}
        sx={{
          width: "100%",
          height: { xs: 340, md: 460 },
          position: "relative",
          overflow: "hidden",
          borderRadius: 3,
          bgcolor: "#05000c",
          border: "1px solid rgba(168,85,247,0.35)",
          boxShadow: "0 8px 30px rgba(139,92,246,0.12)",
        }}
      >
        <Box
          component="canvas"
          ref={canvasRef}
          role="img"
          aria-label={`Psychedelic ${mode} animation`}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        />

        {!playing && (
          <Chip
            label="PAUSED"
            size="small"
            sx={{
              position: "absolute",
              bottom: 12,
              left: 12,
              bgcolor: "rgba(0,0,0,0.6)",
              color: "#fff",
            }}
          />
        )}
      </Box>

      {/* Animation Controls */}
      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Animation Mode
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {MODES.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  clickable
                  color={mode === item ? "secondary" : "default"}
                  variant={mode === item ? "filled" : "outlined"}
                  onClick={() => setMode(item)}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Color Palette
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {Object.keys(PALETTES).map((item) => (
                <Chip
                  key={item}
                  label={item}
                  clickable
                  color={palette === item ? "secondary" : "default"}
                  variant={
                    palette === item ? "filled" : "outlined"
                  }
                  onClick={() => setPalette(item)}
                />
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography gutterBottom>
              Speed: {speed.toFixed(1)}x
            </Typography>

            <Slider
              value={speed}
              onChange={(_, value) => setSpeed(value)}
              min={0.2}
              max={2.5}
              step={0.1}
              sx={{ color: "#a855f7" }}
            />
          </Box>

          <Box>
            <Typography gutterBottom>
              Intensity: {intensity}%
            </Typography>

            <Slider
              value={intensity}
              onChange={(_, value) => setIntensity(value)}
              min={10}
              max={100}
              step={5}
              sx={{ color: "#ec4899" }}
            />
          </Box>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Button
              fullWidth
              variant="contained"
              startIcon={playing ? <Pause /> : <PlayArrow />}
              onClick={() => setPlaying((prev) => !prev)}
              sx={{
                bgcolor: "#9333ea",
                "&:hover": { bgcolor: "#7e22ce" },
              }}
            >
              {playing ? "Pause" : "Play"}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Shuffle />}
              onClick={randomize}
            >
              Randomize
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<RestartAlt />}
              onClick={reset}
            >
              Reset
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        color="text.secondary"
        sx={{ mt: 2 }}
      >
        Move your mouse across the artwork to influence the patterns.
      </Typography>
    </Box>
  );
}
