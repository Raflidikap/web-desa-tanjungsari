// import pemandangan from "../assets/pemandangan.jpg"
// import Carousel from "react-bootstrap/Carousel";
import "../style/carousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
// import React, { useEffect, useState } from 'react'
// import { CSSTransition } from 'react-transition-group'
// import { ImageCarouselContainer, ImageCarouselSlide } from './imagecarousel.styles'

// const [productList, setProductList] = useState([]);

// const getProductList = async () =>{
//   const products = await fetch('https://fakestoreapi.com/products').then(res=>res.json())

//   return products
// }

// useEffect(() => {
//   getProductList().then((result) => {
//     setProductList(result);
//     console.log(productList)
//   });
// }, []);
const images = [{
  url:"https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  id:1
},
{
  url:"https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  id:2
},
{
  url:"https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  id:3
}
  
  
  
];

const CarouselS = () => {
  return (
    <div>
      <Carousel>
        {images.map((review, i) => (
          <Carousel.Item key={i}>
            <img
              className="testimonialImages d-block w-100"
              src={review.url}
              alt=""
            />
            <Carousel.Caption>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselS;
