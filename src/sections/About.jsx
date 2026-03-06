import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <Typography variant="h4">About Me</Typography>

      <Typography>
        Computer Engineering graduate interested in software development.
      </Typography>

      <Typography>
        I enjoy building mobile apps, APIs, and interactive systems.
      </Typography>

      <Typography>
        My current focus is React Native, backend development, and understanding
        system design fundamentals.
      </Typography>
    </SectionWrapper>
  );
}
