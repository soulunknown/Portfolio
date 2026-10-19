
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SERVICE_ID = "service_3v1sspo";
const TEMPLATE_ID = "template_dw7qjwc";
const PUBLIC_KEY = "fN6dgQmUIyLWs9OkZ";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setErrorMessage("");
    setSuccessMessage("");

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log("EmailJS success:", response.status);

      setSuccessMessage(
        "Message sent successfully! I'll get back to you soon."
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS error:", {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });

      if (error?.status === 429) {
        setErrorMessage(
          "Too many requests. Please wait before trying again."
        );
      } else {
        setErrorMessage(
          "Failed to send your message. Please try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Contact Me
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
        >
          Have a question or want to work together?
          Send me a message.
        </Typography>
      </motion.div>

      {/* Status Messages */}
      {successMessage && (
        <Alert
          severity="success"
          sx={{ mt: 3 }}
          onClose={() => setSuccessMessage("")}
        >
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert
          severity="error"
          sx={{ mt: 3 }}
          onClose={() => setErrorMessage("")}
        >
          {errorMessage}
        </Alert>
      )}

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 4 }}
        >
          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />

          <TextField
            label="Your Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />

          <TextField
            label="Subject"
            name="subject"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={formData.subject}
            onChange={handleChange}
            disabled={loading}
          />

          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          />

          {/* Submit Button */}
          <Box textAlign="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 6,
                },
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                "Send Message"
              )}
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}
