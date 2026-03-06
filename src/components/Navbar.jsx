// src/components/Navbar.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sections = ["home", "about", "projects", "skills", "resume", "contact"];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // mobile if width <= md

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
            Kian Tubalinal
          </Typography>

          {/* Desktop links only */}
          {!isMobile && (
            <div>
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
          )}

          {/* Mobile hamburger only */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            width: 200,
            background: "#0f1827",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // vertically center links
          }}
        >
          {sections.map((s) => (
            <ListItem
              button
              key={s}
              onClick={() => scrollTo(s)}
              sx={{
                color: "#ffffff",
                py: 3, // larger vertical padding
                justifyContent: "center", // center text horizontally
              }}
            >
              {s.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
