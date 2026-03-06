import { Typography, Button, Stack } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  return (
    <SectionWrapper id="home">
      <Typography variant="h3">Hi, I'm Calify</Typography>

      <Typography variant="h5">
        Computer Engineer | Software Developer
      </Typography>

      <Typography className="center">
        I build mobile apps, backend APIs, and tools that solve real problems.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" marginTop={3}>
        <Button variant="contained">View Projects</Button>

        <Button variant="outlined">Contact Me</Button>
      </Stack>
    </SectionWrapper>
  );
}
