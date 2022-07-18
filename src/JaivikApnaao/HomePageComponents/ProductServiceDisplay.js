import {
  Container,
  Typography,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";

const images = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  
];

const ProductServiceDisplay = () => {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        OUR PRODUCTS AND CULTURE
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
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        <ImageList variant="masonry" cols={5} gap={5}>
          {images.map((image) => (
            <ImageListItem key={image.img}>
              <img
                src={`${image.img}?w=248&fit=crop&auto=format`}
                srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};

export default ProductServiceDisplay;