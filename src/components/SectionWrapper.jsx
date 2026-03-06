import { Container } from "@mui/material";

export default function SectionWrapper({ id, children }) {
  return (
    <Container id={id} className="section">
      {children}
    </Container>
  );
}
