import { useState } from "react";
import { 
  Container, TextField, Button, Typography, Box, Alert, useTheme 
} from "@mui/material";
import emailjs from "emailjs-com";

export default function Contact() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_rkbf498", // Your EmailJS Service ID
        "template_dw7qjwc", // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fN6dgQmUIyLWs9OkZ" // Replace with your EmailJS Public Key
      );

      setSuccessMessage("Your message has been sent! 🎉");
      setErrorMessage("");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Failed to send email:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ textShadow: "0 0 10px #6a0dad", color: isDarkMode ? "#fff" : "#000" }}
      >
        Contact Me 📩
      </Typography>

      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

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
            : "0 0 15px rgba(106, 13, 173, 0.6)", // Adjust glow for dark mode
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
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.message}
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

        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ 
            fontSize: "1.1rem", 
            padding: "10px", 
            backgroundColor: "#6a0dad",
            boxShadow: "0 0 15px rgba(106, 13, 173, 0.6)", // Initial glow
            transition: "0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 0 25px rgba(106, 13, 173, 0.9)", // Stronger glow on hover
              backgroundColor: "#5a0caf",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
