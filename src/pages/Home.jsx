import React from 'react'
import { Container } from 'react-bootstrap';

import { CarouselHome } from '../componentes/carousel/CarouselHome';

import { CardsHome } from '../componentes/cards-home/CardsHome';

let sliderMensajes = [
  {
    id: "1",
    titulo: "Rico y Calido!",
    descripcion:
      "El cafe más rico de Madrid y el croissant con jamón y queso un espectáculo. Las chicas son súper cálidas y atentas. Volveré pronto por el nugaton... y más cafe! 🤣 Gracias",
    nombre: "Florencia, ES",
  },
  {
    id: "2",
    titulo: "Atencion y Calidad",
    descripcion:
      "Todo increíble. De los mejores café que he probado en Madrid, se nota la calidad. Todos los productos caseros. La atención inmejorable",
    nombre: "Mary de Olivera, ES",
  },
  {
    id: "3",
    titulo: "Gran lugar, todo riquisimo",
    descripcion:
      "Excelente el lugar y la atención de las chicas que atienden m, todo muy muy rico. De los mejores lugares que visite en madrid para tomar un café y comer rico. Muy recomendado",
    nombre: "Gabirel Lucena, ES",
  },
  {
    id: "4",
    titulo: "El Mejor lugar",
    descripcion:
      "El mejor lugar para comer postres argentinos, las tartas y los alfajores están súper ricos. Y la decoración está genial.",
    nombre: "Arturo Ramirez, ES",
  },
  {
    id: "5",
    titulo: "Todo impecable, siempre fresco",
    descripcion:
      "Todo riquísimo y cada tanto tienen cosas nuevas. Todo casero y la atención de sus dueñas, excepcional. También venden otros productos como yerba y las empanadas de La Zambita.",
    nombre: "Ka Grimm, ES",
  },
  {
    id: "6",
    titulo: "Agradable y especial",
    descripcion:
      "Un sitio de confianza, todo buenísimo y las dueñas un amor. Prueben el cheesecake de banana!! Muy lindo el local nuevo por cierto",
    nombre: "Luxi, ES",
  },
  {
    id: "7",
    titulo: "Atencion Magistral",
    descripcion:
      "Precioso lugar, muy buena atención por las chicas como siempre! Muy ricas las tortas y los alfajores ",
    nombre: "Ivana Badaloti, ES",
  },
  {
    id: "8",
    titulo: "Servicio excepcional",
    descripcion:
      "Las propietarias son dos hermanas argentinas Luciana y Constanza que son unas genias y han convertido su pasión en un negocio , y eso se nota. Desde que entras por la puerta te reciben con dulzura y cariño. El cafe está exquisito y tienen montón de tartas riquísimas, la mítica chocotorta , tarta de queso con frutos rojos, banana , con dulce de leche, pasta flora, alfajores de todo tipo caseros , los mejores de Madrid . también tienen salado croissant de jamón y queso , sandwhiches de miga, empanadas. Super recomendable! Para desayunar, merendar o almorzar",
    nombre: "Mercedes, ES",
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
  }
]


export default function Home() {
  return (
    <>
      <div className="tarjetas d-flex flex-column justify-content-center align-items-center mt-2 mb-2">
        <h4> ¡QUIERO TODO!</h4>
        <p>Con tan solo un click puedes disfrutarlo!!</p>
      </div>
      <Container>
        <CardsHome cardsHome={cardsHome} />
      </Container>
      <div className="tarjetas d-flex flex-column justify-content-center align-items-center text-center mt-3">
        <h4>❤ ESTAMOS MUY AGRADECIDOS CON NUSTROS CLIENTES ❤ </h4>
      </div>
      <Container>
        <div className="p-2 mb-4">
          <CarouselHome sliderMensajes={sliderMensajes} />
        </div>
      </Container>
    </>
  )
}
