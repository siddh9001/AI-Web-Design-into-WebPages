import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const KeepMeUpdated = () => {
    const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{background: "", pt: "1em", pb: "1em"}}>
    <Container component="section" sx={{ mt: 10,  display: 'flex',}}>
      <Grid container>
        <Grid xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 7.4,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'block' }, position: 'relative' }}
        >
          {/* <Box
            sx={{
              position: 'absolute',
            //   top: -67,
            //   left: -67,
            //   right: 0,
            //   bottom: 0,
              width: '100%',
            //   background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          /> */}
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
            alt="call to action"
            sx={{
              position: 'relative',
            //   top: -28,
            //   left: -28,
            //   right: 0,
            //   bottom: 0,
              width: '100%',
            //   maxWidth: 670,
            }}
          />
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
};

export default KeepMeUpdated;
