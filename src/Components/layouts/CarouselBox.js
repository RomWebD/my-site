import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImg from "../../assets/First.jpg";
import secondImg from "../../assets/Second.jpg";
import thirdImg from "../../assets/Third.jpg";
import fourImg from "../../assets/Four.jpg";
import fiveImg from "../../assets/Five.jpg";
export default class CarouselBox extends Component {
  render() {
    return (
      <div style={{ background: "#F6F4E8" }}>
        <Carousel
        className="container"
          
        >
          <Carousel.Item >
            <img
              className="slider d-block w-100"
              height="600"
              src={firstImg}
              alt="Repair of apartments"
            />
     
          </Carousel.Item>

          <Carousel.Item className="slider">
            <img
              className="slider d-block w-100"
              src={secondImg}
              alt="Repair of apartments"
              height="600"
            />
        
          </Carousel.Item>

          <Carousel.Item className="slider">
            <img
              className="slider d-block w-100"
              src={thirdImg}
              alt="Repair of apartments"
              height="600"
            />
         
          </Carousel.Item>

          <Carousel.Item className="slider">
            <img
              className="slider d-block w-100"
              src={fourImg}
              alt="Repair of apartments"
              height="600"
            />
          
          </Carousel.Item>

          <Carousel.Item className="slider">
            <img
              className="slider d-block w-100"
              src={fiveImg}
              alt="Repair of apartments"
              height="600"
            />
        
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
