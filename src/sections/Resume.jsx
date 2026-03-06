import { Typography, Button, Card, CardContent, Box } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Resume() {
  const RESUME_URL = "/kian-tubalinal-resume-01092026.pdf";

  return (
    <SectionWrapper id="resume">
      <Typography
        variant="h4"
        sx={{ mb: 3, textAlign: "center", color: "#7fb3ff" }}
      >
        Resume
      </Typography>

      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            maxWidth: "600px",
            width: "90%",
            bgcolor: "#1c2942",
            color: "#e0e6f0",
            p: 3,
            boxShadow: "0 2vh 4vh rgba(0,0,0,0.5)",
            borderRadius: "1%",
          }}
        >
          <CardContent>
            <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
              Download my resume below.
            </Typography>

            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                variant="contained"
                component="a"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "#7fb3ff",
                  color: "#ffffff",
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  "&:hover": { backgroundColor: "#5a9cff" },
                }}
              >
                Download Resume
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </SectionWrapper>
  );
}
