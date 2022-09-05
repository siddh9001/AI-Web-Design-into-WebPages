import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
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
import {useNavigate , Link} from "react-router-dom";
import { useAuth } from "../AuthServices/AuthFunc";

function LinkTab(props) {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
         navigate(`${props.to}`);
      }}
      {...props}
    />
  );
}

const Header = () => {

  const auth = useAuth();
  
  console.log("islogin Header : ", auth.isLogin);

  const [value, setValue] = useState();
  const tabChange = (e, value) => {
    setValue(value);
  };

  const tabIndicatorStyleObject = {
    style: { backgroundColor: "whitesmoke" },
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  const navigate = useNavigate();
  const onLogout = () => {
      auth.signout();
      navigate('/');
  }

  return (
    <Box component="section" sx={{ zIndex: 1 }}>
      <AppBar>
        <Toolbar>
          <Link to="/">
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
                  to="/"
                />
                <LinkTab value="2" label="Products" to="/products" />
                <LinkTab value="3" label="Videos" to="/videos" />
                <LinkTab value="4" label="Contact Us" to="/contactus" />
              </Tabs>
              {auth.isLogin ? (
                <>
                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ marginLeft: "auto" }}
                  >
                    <Typography sx={{textAlign: "center"}}>{auth.userData.email}</Typography>
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
