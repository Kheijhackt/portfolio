// src/components/Navbar.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sections = ["home", "about", "projects", "skills", "resume", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ background: "#0f1827" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={() => scrollTo("home")}
          >
            Calify
          </Typography>

          {/* Desktop */}
          <div className="nav-desktop">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s);
                }}
                style={{
                  marginLeft: "20px",
                  color: "#ffffff",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {s.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <IconButton
            color="inherit"
            className="nav-mobile"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200, background: "#0f1827", height: "100%" }}>
          {sections.map((s) => (
            <ListItem
              button
              key={s}
              onClick={() => scrollTo(s)}
              sx={{ color: "#ffffff" }}
            >
              {s.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
