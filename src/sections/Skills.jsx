import { Typography, Grid, Paper } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <Typography variant="h4">Skills</Typography>

      <Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Programming</Typography>
            <Typography>JavaScript</Typography>
            <Typography>Python</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Frameworks</Typography>
            <Typography>React Native</Typography>
            <Typography>Django</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Tools</Typography>
            <Typography>Git</Typography>
            <Typography>GitHub</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Concepts</Typography>
            <Typography>REST APIs</Typography>
            <Typography>Authentication</Typography>
          </Paper>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
