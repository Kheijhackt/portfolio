import { Card, Typography, Box } from "@mui/material";

export default function SkillsCard({ title, skills }) {
  return (
    <Card
      sx={{
        width: "100%", // full horizontal space
        bgcolor: "#1c2942",
        color: "#e0e6f0",
        mb: 3,
        boxShadow: "0 2vh 4vh rgba(0,0,0,0.5)",
        borderRadius: "1%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "120px", // flexible height
        position: "relative",
        p: 2,
      }}
    >
      {/* Card content */}
      <Box>
        {title && (
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
        )}

        {skills && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((skill, i) => (
              <Typography
                key={i}
                variant="caption"
                sx={{
                  backgroundColor: "#2a3a5a",
                  px: 1,
                  py: 0.5,
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                  color: "#7fb3ff",
                }}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        )}
      </Box>
    </Card>
  );
}
