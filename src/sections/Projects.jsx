import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Repertoire Tracker App",
      description: "A mobile app to help musicians track piano repertoire.",
      technologies: ["React Native", "Django", "REST API", "AsyncStorage"],
      ctaText: "View Repo",
      ctaUrl: "https://github.com/yourusername/repertoire-tracker",
    },
    {
      title: "Portfolio Website",
      description: "This portfolio itself, built with React + MUI.",
      technologies: ["React", "Material UI", "CSS", "Responsive Design"],
      ctaText: "Visit Site",
      ctaUrl: "https://yourportfolio.com",
    },
    {
      title: "API Utility Tool",
      description: "A small utility to test and manage REST APIs efficiently.",
      technologies: ["Python", "FastAPI", "Postman"],
      ctaText: "View Repo",
      ctaUrl: "https://github.com/yourusername/api-tool",
    },
  ];

  return (
    <SectionWrapper id="projects">
      {/* Section Title */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Projects
      </Typography>

      {/* Section Intro */}
      <Typography sx={{ mb: 2 }}>
        Here are a few projects I have built to showcase my skills in software
        development.
      </Typography>

      {/* Project Cards */}
      {projectList.map((proj, i) => (
        <ProjectCard
          key={i}
          title={proj.title}
          description={proj.description}
          technologies={proj.technologies}
          ctaText={proj.ctaText}
          ctaUrl={proj.ctaUrl}
        />
      ))}
    </SectionWrapper>
  );
}
