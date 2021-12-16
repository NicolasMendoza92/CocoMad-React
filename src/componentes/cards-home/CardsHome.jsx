import React from 'react'
import { CardHome } from './CardHome';

export const CardsHome = ({cardsHome}) => {
    const mapCardsHome = cardsHome.map((cardsHome, index) => <CardHome key={index} cardsHome={cardsHome} />);

    return (
        <div className="m-auto row">
            <div className="col-12 col-lg-8 ">
                {mapCardsHome[0]}
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column justify-content-between">
                {mapCardsHome[1]}
                {mapCardsHome[2]}
            </div>
        </div>
    )
}
