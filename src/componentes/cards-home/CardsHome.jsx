import React from 'react'
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardHome } from './CardHome';
import Aos from 'aos';
import "./cardHome.css"
import "aos/dist/aos.css";

export const CardsHome = ({ cardsHome }) => {
    const mapCardsHome = cardsHome.map((cardsHome, index) => <CardHome key={index} cardsHome={cardsHome} />);

    useEffect(() => {
        Aos.init({ duration: 1100 });
    }, []);

   const verCard =()=>{
    window.scrollTo(0, 100);
   } 

    return (
        <div className="m-auto row">
            <div data-aos="fade-up" className="col-12 col-lg-8 ">
                {mapCardsHome[0]}
            </div>
            <div data-aos="fade-up" className="col-12 col-lg-4 d-flex flex-column justify-content-between">
                {mapCardsHome[1]}
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
