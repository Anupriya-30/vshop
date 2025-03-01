import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from "@mui/material";
import myimage1 from "..//Assets/Images/electronics.jpg"
import myimage2 from "..//Assets/Images/grocery.jpg"
import myimage3 from "..//Assets/Images/cosmetics.jpg"

// Sample product data with offers
const products = [
  { id: 1, name: "Discount On Electonic Gadgets", offer: "10% Off", image: myimage1 },
  { id: 2, name: "1+1 Grocery Offers", offer: "Buy 1 Get 1 Free", image: myimage2 },
  { id: 3, name: "Cosmetics Deal ends Tonight", offer: "Limited Time Deal", image: myimage3 }
]

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Our Offers
            </Typography>
            <Typography
              sx={{
                color: { xs: "white", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
              Be the first one to make them yours!
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Product Overview) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            pb: 2,
            "&::-webkit-scrollbar": { height: "6px" },
            "&::-webkit-scrollbar-thumb": { bgcolor: "#888", borderRadius: "10px" },
          }}
        >
          {products.map((product) => (
            <Card key={product.id} sx={{ minWidth: 150, boxShadow: 3, borderRadius: 2 }}>
              <CardMedia component="img" height="120" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">{product.price}</Typography>
                {product.offer && (
                  <Chip
                    label={product.offer}
                    color="error"
                    size="small"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
