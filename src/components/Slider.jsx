import React from 'react'
import { Carousel } from 'react-bootstrap'
import im from '../pages/images/im.png.png'
import im2 from '../pages/images/im2.png'
import im3 from '../pages/images/im3.png'
import './slider.css'


const Slider = () => {
  return (
    <div className='sl'>
    <Carousel fade={true} pause={false}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={im}
        alt="First slide"
 height="500"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={im2}
        alt="Second slide"
height="500"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={im3}
        alt="Third slide"
height="500"
      />
    </Carousel.Item>

  </Carousel>
    </div>


  )
}

export default Slider
