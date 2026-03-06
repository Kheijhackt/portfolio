import { Typography, TextField, Button, Stack } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <Typography variant="h4">Contact</Typography>

      <Stack spacing={2} maxWidth={500} margin="auto" marginTop={2}>
        <TextField label="Name" />

        <TextField label="Email" />

        <TextField label="Message" multiline rows={4} />

        <Button variant="contained">Send Message</Button>
      </Stack>
    </SectionWrapper>
  );
}
