import React from 'react'
import { Card } from 'react-bootstrap';
import ReactCardCarousel from 'react-card-carousel';
import './sliderProducts.css';

export function SliderProducts() {

  return (
    <>
      <h3 className="text-center mas-vendidos d-flex justify-content-center align-items-center">LOS PREFERIDOS DE NUESTROS COCOFANS</h3>
      <div className='slider-products my-3'>
        <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
          <div className='card-slider' >
            <Card.Img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/clasicos%20/alfajor_de_coco_qoidxm.png" alt="Card image" />
            <Card.ImgOverlay>
              <p>ALFAJORES DE COCO</p>
            </Card.ImgOverlay>
          </div>
          <div className='card-slider' >
            <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/cheesCake_banana_jyqeac.png" />
            <Card.ImgOverlay>
              <p>CHEESE CAKE BANANA</p>
            </Card.ImgOverlay>
          </div>
          <div className='card-slider' >
            <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/clasicos%20/alfajor_maizena_aksv2o.png" />
            <Card.ImgOverlay>
              <p>ALFAJOR DE MAIZENA</p>
            </Card.ImgOverlay>
          </div>
          <div className='card-slider'>
            <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/cheesCake_FR_dihxuf.png" />
            <Card.ImgOverlay>
              <p>CHEESE CAKE FRUTOS ROJOS</p>
            </Card.ImgOverlay>
          </div>
          <div className='card-slider'>
            <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/cheesCake_coco_xtinwt.png" />
            <Card.ImgOverlay>
              <p>CHEESE CAKE COCO</p>
            </Card.ImgOverlay>
          </div>
        </ReactCardCarousel>
      </div>
    </>
  );
}