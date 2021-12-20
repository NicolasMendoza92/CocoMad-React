import React from 'react'
import { Container } from 'react-bootstrap';

import { CarouselHome } from '../componentes/carousel/CarouselHome';

import { CardsHome } from '../componentes/cards-home/CardsHome';

let sliderMensajes = [
    {
      id: "1",
      titulo: "Servicio excepcional",
      descripcion:
        "Tenían el vino que quería a un precio excelente y me lo entregaron rápidamente y sin problemas, ¿qué más se puede pedir?",
      nombre: "Alvaro, AR",
    },
    {
      id: "2",
      titulo: "Servicio Fantástico",
      descripcion:
        "La experiencia fue excelente. El pedido se realizó sin problemas y el artículo se entregó bien empaquetado, a tiempo, como se describe y en excelentes condiciones. La experiencia del sitio web también fue buena.",
      nombre: "Rodrigo, AR",
    },
    {
      id: "3",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
    {
      id: "4",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
    {
      id: "5",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
  ];

const cardsHome = [
    {
        image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
        title: "COCO ALFAJORES",
        sentence: "LOS COCO ALFAJORES SON LOS FAVORITOS DE LA CLIENTELA",
    },
    {
        image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg",
        title: "COCO TARTAS",
        sentence: "IDEAL PARA REUNIONES Y FESTEJOS",
    },
    {
        image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154689/cocoMAD/feca_qdmavt.jpg",
        title: "COCO CAFECITO",
        sentence: "ESPECIALES PARA ACOMPAÑAR CUALQUIERA DE NUESTROS COCO DULCES",
    }
]


export default function Home() {
    return (
        <>
            <div className="tarjetas d-flex flex-column justify-content-center align-items-center">
                <h3> ¡QUIERO TODO!</h3>
                <p>Con tan solo un click puedes disfrutarlo!!</p>
            </div>
            <Container>
                <CardsHome cardsHome={cardsHome} />
                <div className="p-4 mb-4">
                        <CarouselHome sliderMensajes={sliderMensajes} />   
                </div>
            </Container>
        </>
    )
}
