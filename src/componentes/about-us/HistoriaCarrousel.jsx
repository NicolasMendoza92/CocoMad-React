import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import './historia.css';

export const HistoriaCarrousel = () => {
    return (
        <div>
            <Container>
               <Carousel variant="dark" className="carousel-home d-flex justify-content-center">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154710/cocoMAD/vidriococo_vugruo.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154614/cocoMAD/alfajores_bandeja_lqr9be.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154680/cocoMAD/conitoblack_vzkthk.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </Container>
        </div>
    )
}

