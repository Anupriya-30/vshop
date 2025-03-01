import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Hero from "../Components/Hero";
import AboutContent from "../Components/AboutContent";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box sx={{ mb: 5 }}>
        <Hero />
      </Box>

      {/* About Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <AboutContent />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              height: "100%", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              bgcolor: "primary.light",
              p: 3,
              borderRadius: 2
            }}
          >
            <Banner />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
