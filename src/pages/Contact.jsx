import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert, CircularProgress, useTheme } from "@mui/material";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const theme = useTheme();

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>
      </motion.div>

      {successMessage && <Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
      {errorMessage && <Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>}

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <TextField label="Your Name" name="name" variant="outlined" fullWidth margin="normal" required value={formData.name} onChange={handleChange} />

          <TextField label="Your Email" name="email" type="email" variant="outlined" fullWidth margin="normal" required value={formData.email} onChange={handleChange} />

          <TextField label="Subject" name="subject" variant="outlined" fullWidth margin="normal" required value={formData.subject} onChange={handleChange} />

          <TextField label="Message" name="message" variant="outlined" fullWidth margin="normal" multiline rows={4} required value={formData.message} onChange={handleChange} />

          <Box textAlign="center" mt={3}>
            <Button type="submit" variant="contained" color="primary" size="large" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Send Message"}
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}
