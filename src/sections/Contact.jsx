import {
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbw_wCj1cHDBrHrB4oBrqg3sPSGvnLwJwOb7ceLexun4eN_MB7ndE7YB-vjHCxzyI2zo/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const text = await res.text();
      const data = JSON.parse(text);

      if (data.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Try again later.");
        console.error(data.message);
      }
    } catch (error) {
      setStatus("Error sending message. Try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <Typography
        variant="h4"
        sx={{ mb: 3, textAlign: "center", color: "#7fb3ff" }}
      >
        Contact Me
      </Typography>

      <Stack spacing={2} maxWidth={500} margin="auto">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
          InputLabelProps={{ style: { color: "#7fb3ff" } }}
          InputProps={{ style: { color: "#e0e6f0" } }}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
          InputLabelProps={{ style: { color: "#7fb3ff" } }}
          InputProps={{ style: { color: "#e0e6f0" } }}
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          sx={{ backgroundColor: "#2a3a5a", borderRadius: 1 }}
          InputLabelProps={{ style: { color: "#7fb3ff" } }}
          InputProps={{ style: { color: "#e0e6f0" } }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            backgroundColor: "#7fb3ff",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#5a9cff" },
            fontWeight: 700,
            py: 1.5,
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#fff" }} />
          ) : (
            "Send Message"
          )}
        </Button>

        {status && (
          <Typography sx={{ mt: 1, textAlign: "center", color: "#e0e6f0" }}>
            {status}
          </Typography>
        )}
      </Stack>
    </SectionWrapper>
  );
}
