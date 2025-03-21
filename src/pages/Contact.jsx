import { useState } from "react";
import { 
  Container, TextField, Button, Typography, Box, Alert, CircularProgress, useTheme 
} from "@mui/material";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!validateEmail(formData.email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    setLoading(true); 
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await emailjs.send(
        "service_rkbf498", 
        "template_dw7qjwc", 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fN6dgQmUIyLWs9OkZ" 
      );

      setSuccessMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
    
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ textShadow: "0 0 10px #6a0dad", color: isDarkMode ? "#fff" : "#000" }}
        >
          Contact Me 
        </Typography>
      </motion.div>

      {/* Success & Error Messages */}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 2, 
            padding: 3, 
            borderRadius: 3, 
            boxShadow: isDarkMode 
              ? "0 0 20px rgba(255,255,255,0.2)" 
              : "0 0 15px rgba(106, 13, 173, 0.6)", 
            backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "#fff",
            transition: "0.3s ease-in-out",
            "&:hover": {
              boxShadow: isDarkMode 
                ? "0 0 35px rgba(255,255,255,0.4)" 
                : "0 0 25px rgba(106, 13, 173, 0.9)",
            },
          }}
        >
          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: isDarkMode ? "#fff" : "#000",
                "& fieldset": { borderColor: isDarkMode ? "#bbb" : "#ccc" },
                "&:hover fieldset": { borderColor: isDarkMode ? "#fff" : "#6a0dad" },
              },
              "& .MuiInputLabel-root": { color: isDarkMode ? "#ccc" : "#6a0dad" },
            }}
          />

          <TextField
            label="Your Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                color: isDarkMode ? "#fff" : "#000",
                "& fieldset": { borderColor: isDarkMode ? "#bbb" : "#ccc" },
                "&:hover fieldset": { borderColor: isDarkMode ? "#fff" : "#6a0dad" },
              },
              "& .MuiInputLabel-root": { color: isDarkMode ? "#ccc" : "#6a0dad" },
            }}
          />

          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            fullWidth
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
          />

          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={loading}
            sx={{ 
              fontSize: "1.1rem", 
              padding: "10px", 
              backgroundColor: "#6a0dad",
              boxShadow: "0 0 15px rgba(106, 13, 173, 0.6)", 
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 25px rgba(106, 13, 173, 0.9)", 
                backgroundColor: "#5a0caf",
              },
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Send Message"}
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
