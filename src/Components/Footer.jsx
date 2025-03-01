import React from "react";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import myimage from "../Assets/Images/logo.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: "center", // Ensures overall center alignment
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}
        <Grid item xs={12} md={4}>
          <img
            style={{ height: "70px", width: "90px" }}
            src={myimage}
            alt="logo"
          />
          <Typography variant="body1" sx={{ mt: 1 }}>
            where quality meets convenience
          </Typography>
        </Grid>

        {/* Contact Information - Center Aligned */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography fontWeight="bold">CONTACT US</Typography>
            <Typography>
              📧 contactvshop@gmail.com
              <br />
              📞 9876543210
              <br />
              <IconButton>
                <InstagramIcon sx={{ color: "#E1306C" }}  />vshop_official
              </IconButton>
            </Typography>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/" style={{ textDecoration: "none", fontWeight: "600", fontSize: "18px" }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: "none", fontWeight: "600", fontSize: "18px" }}>
              About
            </Link>
            <Link to="/shop" style={{ textDecoration: "none", fontWeight: "600", fontSize: "18px" }}>
              Shop
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Notice */}
      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} title. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
