import { Box, Button, Typography, Container } from "@mui/material";

const Landing = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "670px",
        backgroundImage: `url(${"https://cdn.pixabay.com/photo/2020/05/31/04/36/investment-5241253_1280.jpg"})`,
        backgroundSize: "cover",
        display: 'flex', 
        overflow: 'hidden',
      }}
    >
    <Container sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ color: "lightgoldenrodyellow", paddingTop: "122px" }}
      >
        JAIVIK APNAAO
      </Typography>
      <span
        style={{
          height: 5,
          width: 160,
          display: "block",
          backgroundColor: "#39280e",
          margin: "auto",
          marginTop: "0.4em",
        }}
      ></span>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "lightgoldenrodyellow",
          fontFamily: "Work Sans,sans-serif",
          fontSize: "larger",
          fontStretch: "extra-expanded",
          fontWeight: "100",
          // paddingTop: "3em",
        }}
      >
        Get Good Quality Khaad at very decent Rate
      </Typography>
      <Button
        color="secondary"
        size="large"
        variant="contained"
        component="a"
        href="/sign-in"
        sx={{}}
      >
        Get started
      </Button>
      </Container>
    </Box>
  );
};

export default Landing;
