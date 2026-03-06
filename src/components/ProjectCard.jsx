import { Card, CardContent, Typography, Box, Button } from "@mui/material";

export default function ProjectCard({
  title,
  description,
  technologies,
  ctaText,
  ctaUrl,
}) {
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
        justifyContent: "space-between", // push button to bottom
        minHeight: "150px", // minimum height for layout
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

        {description && (
          <Typography variant="body1" sx={{ color: "#e0e6f0", mb: 1 }}>
            {description}
          </Typography>
        )}

        {technologies && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {technologies.map((tech, i) => (
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
                {tech}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      {/* CTA button bottom-right */}
      {ctaText && ctaUrl && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            component="a"
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: "#7fb3ff",
              color: "#ffffff",
              fontSize: "0.9rem",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#5a9cff",
              },
            }}
          >
            {ctaText}
          </Button>
        </Box>
      )}
    </Card>
  );
}
