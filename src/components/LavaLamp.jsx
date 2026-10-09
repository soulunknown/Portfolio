
import { Box } from "@mui/material";
import "./LavaLamp.css";

export default function LavaLamp() {
  return (
    <Box className="lava-lamp" aria-hidden="true">
      <div className="lava-blob blob-1" />
      <div className="lava-blob blob-2" />
      <div className="lava-blob blob-3" />
      <div className="lava-blob blob-4" />
      <div className="lava-blob blob-5" />
      <div className="lava-blob blob-6" />
    </Box>
  );
}
