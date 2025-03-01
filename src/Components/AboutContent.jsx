import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import myimage from "..//Assets/Images/photo.jpg"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={myimage}
            alt="picture"
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              WELCOME TO V-SHOP 
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              At <b>V-Shop</b>, we bring you a seamless shopping experience where
              <b> quality meets convenience.</b> 
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
             >
              Discover a <b>curated selection</b>{" "}
              of top-tier <b>beauty, fashion, and lifestyle essentials</b> designed
              to enhance your style and confidence.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
               Shop with ease, embrace your glow,
               and redefine your shopping journey with us!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
