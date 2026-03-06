import { Typography } from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  const skillsData = [
    { title: "Programming", skills: ["JavaScript", "Python"] },
    { title: "Frameworks", skills: ["React Native", "Django"] },
    { title: "Tools", skills: ["Git", "GitHub"] },
    { title: "Concepts", skills: ["REST APIs", "Authentication"] },
  ];

  return (
    <SectionWrapper id="skills">
      {/* Section Title */}
      <Typography variant="h4" sx={{ mb: 3 }}>
        Skills
      </Typography>

      {/* Section Intro */}
      <Typography sx={{ mb: 2 }}>
        Here are my main technical skills, organized by category.
      </Typography>

      {/* Skills Cards */}
      {skillsData.map((item, index) => (
        <SkillsCard key={index} title={item.title} skills={item.skills} />
      ))}
    </SectionWrapper>
  );
}
