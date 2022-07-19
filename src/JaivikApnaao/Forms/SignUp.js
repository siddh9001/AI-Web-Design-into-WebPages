import {
  Link,
  Typography,
  Grid,
  Box,
  Button,
  Tab,
  Tabs,
  useTheme,
  TextField,
  FormControlLabel,
  CssBaseline,
  Checkbox,
  Container,
} from "@mui/material";
import React from "react";
import AppForm from "../AppForm";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const SignUp = () => {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = () => {
    setSent(true);
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            SIGN UP
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/sign-in" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Box sx={{ bgcolor: "background.paper", mt: "2em" }}>
          {/* <AppBar position="static"> */}
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Email" {...a11yProps(0)} />
            <Tab label="Mobile Number" {...a11yProps(1)} />
          </Tabs>
          {/* </AppBar> */}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    // sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="allowExtraEmails"
                              color="primary"
                            />
                          }
                          label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/sign-in" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    // sx={{ mt: 3 }}
                  >
                    <Typography component="h3" variant="h5" sx={{mb: "2em"}}>
                      Register Through Mobile Number
                    </Typography>
                    <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="number"
                  label="Number"
                  type="number"
                  id="number"
                  // autoComplete="new-password"
                />
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              GET OTP
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
                  </Box>
                </Box>
              </Container>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </AppForm>
    </>
  );
};

export default SignUp;
