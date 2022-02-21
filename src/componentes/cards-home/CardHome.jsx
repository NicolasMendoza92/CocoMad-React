import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./cardHome.css"

export const CardHome = ({ cardsHome }) => {
    const { image, title, sentence } = cardsHome;

    const verCard = () => {
        window.scrollTo(0, 100);
    }

    return (
        <Card as={Link} to="/productos" onClick={verCard} className="bg-dark text-white mb-2 container-photo-home">
            <Card.Img src={image} alt="Card image" />
            <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 card-home">
                <div className="overlay">
                    <Card.Title className="titulo-card-home">{title}</Card.Title>
                    <Card.Text className='text-card-home'>
                        {sentence}
                    </Card.Text>
                </div>
            </Card.ImgOverlay>
        </Card>
    )
}
