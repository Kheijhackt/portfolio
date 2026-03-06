// src/components/ResponsiveModal.jsx
import { Modal, Box, Button, Typography } from "@mui/material";

export default function ResponsiveModal({
  open,
  handleClose,
  title,
  children,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-content"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw", // 90% of viewport width
          maxWidth: "80%", // max 80% on large screens
          height: "80vh", // 80% of viewport height
          bgcolor: "#1c2942",
          color: "#e0e6f0",
          borderRadius: "2%",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.5)", // scalable shadow
          display: "flex",
          flexDirection: "column",
          p: "2%", // padding in %
        }}
      >
        {title && (
          <Typography
            id="modal-title"
            variant="h6"
            sx={{
              mb: "2%",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            {title}
          </Typography>
        )}

        {/* Scrollable content */}
        <Box
          id="modal-content"
          sx={{
            overflowY: "auto",
            flexGrow: 1,
            mb: "2%",
          }}
        >
          {children}
        </Box>

        {/* Close button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              minWidth: "20%", // scalable width
              maxWidth: "40%",
              fontSize: "1.2vw", // scalable font
              backgroundColor: "#7fb3ff",
              color: "#ffffff",
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
