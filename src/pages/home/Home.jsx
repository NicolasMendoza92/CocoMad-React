import React from 'react'
import './home.css';
import Header from '../../componentes/header/Header';
import { Container } from 'react-bootstrap';
import { CardsHome } from '../../componentes/cards-home/CardsHome';
import { CarouselHome } from '../../componentes/carousel/CarouselHome';
import { FormularioHome } from '../../componentes/formularioHome/FormularioHome';


const cardsHome = [
    {
        image:"https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg" ,
        title: "COCO ALFAJORES",
        sentence: "LOS COCO ALFAJORES SON LOS FAVORITOS DE LA CLIENTELA" ,
    },
    {
        image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg",
        title: "COCO TORTAS",
        sentence: "IDEAL PARA REUNIONES Y FESTEJOS",
    },
    {
        image:"https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154689/cocoMAD/feca_qdmavt.jpg" ,
        title: "COCO CAFECITO",
        sentence: "ESPECIALES PARA ACOMPAÑAR CUALQUIERA DE NUESTROS COCO DULCES" ,
    }
]


export const Home = () => {
    return (
        <>
            <Header
                page="home"
                titulo="Alfajores Argentinos 100% Artesanales"
                button="Quiero saber mas !"
            />
            <Container>
             <CardsHome cardsHome={cardsHome} />
             <div className="row gx-3 gy-2 p-4 mb-4">
                 <div className="col-12 col-lg-6 p-3">
                 <CarouselHome />
                 </div>
                 <div class="col-12 col-lg-6 d-flex align-items-center inscribite">
                     <FormularioHome />
                 </div>
             </div>
            </Container>
        </>
    )
}
