import { Typography, Card, CardContent, Grid } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";

export default function Projects() {
  const projects = [
    {
      title: "Repertoire Tracker",
      description:
        "A mobile app for musicians to organize and track piano repertoire.",
      tech: "React Native, Django, REST API",
    },
    {
      title: "REST API Backend",
      description: "A backend API with authentication and CRUD functionality.",
      tech: "Django, PostgreSQL",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <Typography variant="h4">Projects</Typography>

      <Grid container spacing={3} marginTop={2}>
        {projects.map((p, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>

                <Typography>{p.description}</Typography>

                <Typography>
                  <strong>Tech:</strong> {p.tech}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
