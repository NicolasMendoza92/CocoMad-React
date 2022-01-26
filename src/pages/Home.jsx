import React from 'react'
import { Container } from 'react-bootstrap';
import Aos from 'aos';
import "aos/dist/aos.css";
import { CarouselHome } from '../componentes/carousel/CarouselHome';
import { CardsHome } from '../componentes/cards-home/CardsHome';
import { useEffect } from 'react';

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
  {
    id: "9",
    titulo: "Calido y Casero",
    descripcion:
      "La mejor pastelería argentina en Madrid. Productos de primera calidad y caseros. Un hermoso ambiente y excelente atención. Super recomendado como visita obligatoria por la ciudad capital.",
    nombre: "Andrea Gutierrez, ES",
  },
  {
    id: "10",
    titulo: "Visita Obligatoria!",
    descripcion:
      "Excelentes productos! Se nota la calidad de los insumos, la dedicación y el amor que le ponen a lo que hacen! Obligatoria visita cada vez que voy a Madrid! Gracias por tantas cosas ricas!",
    nombre: "Federico Wagner, AR",
  },
  {
    id: "11",
    titulo: "Lugar que Enamora",
    descripcion:
      "Te sientes en casa sin duda!!  bonito , cómodo,  rico , muy lindas y amables uno de los lugares que me ha enamorado de Madrid",
    nombre: "Greta Ortega, ES",
  },
  {
    id: "12",
    titulo: "Impresionante Todo!",
    descripcion:
      "Un rincón argentino en Madrid. Con excelente productos, muy ricos. Todo fresco. Todo riquísimo! El cheesecake de Banana, 100 puntos. Y los alfajores pff.. impresionantes. Bah todo..",
    nombre: "Juan Manuel Oubiña, ES",
  },
];


const cardsHome = [
  {
    image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg",
    title: "COCO ALFAJORES",
    sentence: "LOS COCO ALFAJORES SON LOS FAVORITOS DE NUESTROS COCOFANS",
  },
  {
    image: "https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154707/cocoMAD/tortas_g15ap8.jpg",
    title: "COCO TARTAS",
    sentence: "IDEAL PARA REUNIONES Y FESTEJOS",
  }
]


export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
}, []);

  return (
    <>
      <div data-aos="fade-left" className="tarjetas d-flex flex-column justify-content-center align-items-center mt-2 mb-2">
        <h4> ¡QUIERO TODO!</h4>
        <p>Con tan solo un click puedes disfrutarlo!!</p>
      </div>
      <Container>
        <CardsHome cardsHome={cardsHome} />
      </Container>
      <div data-aos="fade-right" className="tarjetas d-flex flex-column justify-content-center align-items-center text-center mt-3">
        <h4>❤ ESTAMOS MUY AGRADECIDOS CON NUSTROS COCOFANS ❤ </h4>
      </div>
      <Container>
        <div data-aos="fade-up" className="p-2 mb-4">
          <CarouselHome sliderMensajes={sliderMensajes} />
        </div>
      </Container>
    </>
  )
}
