import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Container, Grid } from "@mui/material";
import ProductCard from "../CardComponents/ProductCard";
import { images } from "../CardComponents/ProductImagesList";


const ProductDisplay = () => {
  return (
    <>
    <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1433185000771-ec45c869c61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=100"
              alt="First slide"
              height={500}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src="holder.js/800x400?text=Second slide&bg=282c34"
              src="https://images.unsplash.com/photo-1433185000771-ec45c869c61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=100"
              alt="Second slide"
              height={500}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1433185000771-ec45c869c61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=100"
              alt="Third slide"
              height={500}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <Container sx={{ margin: "7% auto" }}>
          <Grid container spacing={4}>
            {images.map((img) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <ProductCard image={img.url} title={img.title} desc={img.desc} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </>
  )
}

export default ProductDisplay
