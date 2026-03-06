import { Typography, Button } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <Typography variant="h4">Resume</Typography>

      <Typography className="center">Download my resume below.</Typography>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="contained">Download Resume</Button>
      </div>
    </SectionWrapper>
  );
}
