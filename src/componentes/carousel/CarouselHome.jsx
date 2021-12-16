import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./carouselHome.css"

export const CarouselHome = () => {
    return (
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
    )
}
