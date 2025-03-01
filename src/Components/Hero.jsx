import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {


  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: "linear-gradient(135deg, #A7C7E7 40%, #FF8C00 100%)",
        px: 3,
        borderRadius: "20px",
        boxShadow: "0px 10px 30px rgba(255, 140, 0, 0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Accent Elements */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255, 140, 0, 0.2)",
          top: "-50px",
          right: "-50px",
          filter: "blur(50px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(167, 199, 231, 0.2)",
          bottom: "-50px",
          left: "-50px",
          filter: "blur(50px)",
        }}
      />

      {/* Logo & Title */}
      <Typography
        sx={{
          fontWeight: "900",
          fontSize: { xs: "42px", sm: "80px" },
          color: "#333",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
          mb: 1,
          animation: "fadeIn 1.2s ease-in-out",
        }}
      >
        Welcome to{" "}
        <span style={{ color: "#FF8C00" }}>V-Shop</span>
      </Typography>

      {/* Tagline */}
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: { xs: "18px", sm: "24px" },
          color: "#444",
          letterSpacing: 1,
          mb: 2,
          opacity: 0.9,
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        Where Style Meets Convenience
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          width: { xs: "90%", sm: "60%" },
          fontWeight: "500",
          fontSize: { xs: "16px", sm: "18px" },
          color: "#333",
          opacity: 0.85,
          mb: 3,
          animation: "fadeIn 1.8s ease-in-out",
        }}
      >

      </Typography>

      {/* Call to Action Button */}
      <Link to="/shop">
      <Button 
        variant="contained"
        sx={{
          backgroundColor: "#FF8C00",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          textTransform: "none",
          boxShadow: "0px 5px 15px rgba(255, 140, 0, 0.4)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#E67300",
            transform: "scale(1.05)",
          },
        }}
      >
        Shop Now 
      </Button>
      </Link>
    </Box>
  );
}
