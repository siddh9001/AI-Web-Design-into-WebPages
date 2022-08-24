import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Link,
  makeStyles,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { useNavigate } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // event.preventDefault();
      }}
      {...props}
    />
  );
}

const Header = (props) => {
  const [value, setValue] = useState();
  const tabChange = (e, value) => {
    setValue(value);
  };

  const tabIndicatorStyleObject = {
    style: { backgroundColor: "whitesmoke" },
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const navigate = useNavigate();
  const onLogout = () => {
      props.setIsLogin(false);
      navigate('/');
      // callback()
  }

  return (
    <Box component="section" sx={{ zIndex: 1 }}>
      <AppBar>
        <Toolbar>
          <Link href="http://localhost:3000/">
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/1598/1598196.png"
              alt="earth"
              sx={{ height: "3em", margin: "1% auto" }}
            />
          </Link>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={tabChange}
                TabIndicatorProps={tabIndicatorStyleObject}
              >
                <LinkTab
                  value="1"
                  label="About"
                  href="http://localhost:3000/"
                />
                <LinkTab value="2" label="Products" href="/products" />
                <LinkTab value="3" label="Videos" href="/videos" />
                <LinkTab value="4" label="Contact Us" href="/contactus" />
              </Tabs>
              {props.islogin ? (
                <>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginLeft: "auto" }}
                  >
                    <Typography sx={{textAlign: "center"}}>{props.userdata.email}</Typography>
                    <Button
                      // component="a"
                      variant="outlined"
                      color="inherit"
                      onClick={onLogout}
                    >
                      {"SIGN OUT"}
                    </Button>
                  </Stack>
                </>
              ) : (
                <>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginLeft: "auto" }}
                  >
                    <Button
                      component="a"
                      variant="outlined"
                      color="inherit"
                      href="/sign-in"
                    >
                      {" "}
                      {"LOGIN"}{" "}
                    </Button>
                    <Button
                      component="a"
                      variant="outlined"
                      color="inherit"
                      href="/sign-up"
                    >
                      {"SIGN UP"}
                    </Button>
                  </Stack>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
