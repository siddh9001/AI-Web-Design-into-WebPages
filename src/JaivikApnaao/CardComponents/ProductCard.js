import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent", //theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const ProductCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="270" image={props.image} alt="lake" />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: "100%", display: "flex" }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 1, sm: 1, md: 1 }}
            >
              <Item>
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  fullWidth
                >
                  Add To Cart
                </Button>
              </Item>
              <Item>
                <Button variant="contained" fullWidth>
                  Buy Now
                </Button>
              </Item>
            </Stack>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
