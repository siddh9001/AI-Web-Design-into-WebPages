import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };

const ProductValues = () => {
  return (
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden'}}>
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Box
              component="img"
              src="https://mui.com/static/themes/onepirate/productValues2.svg"
              alt="graph"
              sx={{ height: 55 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy Collection
            </Typography>
            <Typography variant="h5">
              {"We provide a sustainable sytem to collect"}
              {"Oragnic Waste, and hassle service"}
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Box
              component="img"
              src="https://mui.com/static/themes/onepirate/productValues2.svg"
              alt="graph"
              sx={{ height: 55 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy Collection
            </Typography>
            <Typography variant="h5">
              {"We provide a sustainable sytem to collect"}
              {"Oragnic Waste, and hassle service"}
            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={item}>
            <Box
              component="img"
              src="https://mui.com/static/themes/onepirate/productValues2.svg"
              alt="graph"
              sx={{ height: 55 }}
            />
            <Typography variant="h6" sx={{ my: 5 }}>
              Easy Collection
            </Typography>
            <Typography variant="h5">
              {"We provide a sustainable sytem to collect"}
              {"Oragnic Waste, and hassle service"}
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductValues;
