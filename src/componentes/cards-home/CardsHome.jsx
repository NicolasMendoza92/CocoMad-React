import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "./cardHome.css"
import "aos/dist/aos.css";

export const CardsHome = ({ setSearch }) => {
    
    const verCardAlfa = () => {
        window.scrollTo(0, 100);
        setSearch('alfajores')
    }

    const verCardTarta = () => {
        window.scrollTo(0, 100);
        setSearch('tartas')
    }

    useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);

    const verCard = () => {
        window.scrollTo(0, 100);
    }

    return (
        <div className="m-auto row">
            <div data-aos="fade-up" className="col-12 col-lg-8 ">
                <Card as={Link} to="/productos" onClick={verCardAlfa} className="bg-dark text-white mb-2 container-photo-home">
                    <Card.Img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg" alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                        <div className="overlay">
                            <Card.Title className="titulo-card-home">#COCOALFAJORES</Card.Title>
                            <Card.Text className='text-card-home'>
                                Los favoritos de nuestros CocoFans!
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div data-aos="fade-up" className="col-12 col-lg-4 d-flex flex-column justify-content-between">
                <Card as={Link} to="/productos" onClick={verCardTarta} className="bg-dark text-white mb-2 container-photo-home">
                    <Card.Img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg" alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                        <div className="overlay">
                            <Card.Title className="titulo-card-home">COCO TARTAS</Card.Title>
                            <Card.Text className='text-card-home'>
                                Ideal para reuniones y festejos
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
                <Card as={Link} to="/contacto" onClick={verCard} className="bg-dark text-white mb-2 container-photo-home">
                    <Card.Img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154689/cocoMAD/feca_qdmavt.jpg" alt="Card image" />
                    <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                        <div className="overlay">
                            <Card.Title className="titulo-card-home">COCO CAFECITO</Card.Title>
                            <Card.Text className='text-card-home'>
                                Especiales para acompañar nuestros productos en la Tienda!
                            </Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    )
}
