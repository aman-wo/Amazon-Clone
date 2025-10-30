import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from './carousel.module.css'
const CarouselEffext = () => {
  return (
    <>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
{
    img.map((imageItemLink)=>{
        return <img src={imageItemLink} />
    })
}
      </Carousel>
      <div className={classes.hero_img}>

      </div>
      
    </>
  )
}

export default CarouselEffext;
