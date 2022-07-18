import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  
  const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: '#39280e',
    fontWeight: 'medium',
  };
  
  const image = {
    height: 55,
    my: 4,
  };


const HowItWorks = () => {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: "salmon" }}
    >
        <Container sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
            <Typography variant="h4" marked="center" component="h2" sx={{ mb: 1 }}>
                HOW IT WORKS
            </Typography>
            <span
            style={{
              height: 5,
              width: 160,
              display: "block",
              backgroundColor: "#39280e",
              margin: "auto",
              marginTop: "1.2em"
            }}
          ></span>
          <div style={{marginTop: "2.8em"}}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/2253/2253851.png"
                  alt="collection"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Collection of Organic Waste through Our Local Collectors'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/4185/4185298.png"
                  alt="Processing"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Processing of the khaad will take place with '}
                  {'Specialised Processes'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://cdn-icons.flaticon.com/png/512/4745/premium/4745435.png?token=exp=1656218859~hmac=11a7313e1e776d350727d96ae988f68d"
                  alt="Distribution"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  {'Buy the khaad. '}
                  {'Get it delivered easily.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="#"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
        </Container>
    </Box>
  )
}

export default HowItWorks
