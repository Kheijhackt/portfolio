import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const sections = ["home", "about", "projects", "skills", "resume", "contact"];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Calify Portfolio</Typography>

        <div>
          {sections.map((section) => (
            <Button
              key={section}
              color="inherit"
              onClick={() => scrollTo(section)}
            >
              {section}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
