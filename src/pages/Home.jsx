import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import "aos/dist/aos.css";
import { CarouselHome } from '../componentes/carousel/CarouselHome';
import { CardsHome } from '../componentes/cards-home/CardsHome';
import { useEffect } from 'react';
import { FaHandHoldingHeart, FaHome, FaShoppingBag } from 'react-icons/fa';

let sliderMensajes = [
  {
    id: "1",
    titulo: "Rico y Cálido!",
    descripcion:
      "El cafe más rico de Madrid y el croissant con jamón y queso un espectáculo. Las chicas son súper cálidas y atentas. Volveré pronto por el nugaton... y más cafe! 🤣 Gracias",
    nombre: "Florencia, ES",
  },
  {
    id: "2",
    titulo: "Atención y Calidad",
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
    titulo: "Siempre rico, siempre fresco",
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
    titulo: "Atención Magistral",
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
    titulo: "Cálido y Casero",
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
  {
    id: "13",
    titulo: "Riquisimo!",
    descripcion:
    "Riquisimo todo!!! Dulce y salado. Volveremos al rincon argentino de Argüelles. Muchisimas gracias ❤️❤️✨",
    nombre: "Jesica Langenheim, ES",
  },
  {
    id: "14",
    titulo: "Un viaje de Ida",
    descripcion:
      "El mejor nugaton de Madrid, Buena ubicacion para luego hacer turismo. Excelente atencion y la comida es autentica Argentina: calidad, cantidad y mucho dulce de leche. Prueben los alfajores banados de chocolate blanco con centro de frambuesa...... un viaje de ida!!",
    nombre: "Khiara Marozzi, ES",
  },
];


export default function Home({setSearch}) {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="tarjetas d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <h1> ¡QUIERO TODO!</h1>
        <p>Con tan solo un click, lo puedes disfrutar.</p>
      </div>
      <Container>
        <CardsHome setSearch={setSearch}/>
      </Container>
      <div data-aos="fade-up" className="tarjetas-icons mt-5 mb-5 ">
        <Row>
          <Col md={4} lg={4} className='social-icon-home'><FaHandHoldingHeart /> <p> Atendemos con el corazón</p></Col>
          <Col md={4} lg={4} className='social-icon-home'><FaHome /><p> Productos Artesanos 100% </p></Col>
          <Col md={4} lg={4} className='social-icon-home'><FaShoppingBag /><p>Disfrutalo en tu casa!</p></Col>
        </Row>
      </div>
      <div data-aos="fade-up" className="tarjetas d-flex flex-column justify-content-center align-items-center text-center p-3 mt-3">
        <h1>❤ ESTAMOS MUY AGRADECIDOS CON NUESTROS COCOFANS ❤ </h1>
      </div>
      <Container>
        <div data-aos="fade-up" className="p-2">
          <CarouselHome sliderMensajes={sliderMensajes} />
        </div>
      </Container>
      <div data-aos="fade-up" className="tarjetas d-flex flex-column justify-content-center align-items-center text-center">
        <h1>❤ ENTÉRATE QUE DICEN DE NOSOTROS ❤ </h1>
      </div>
      <div data-aos="fade-up" className=" my-2 mx-1 p-0 d-flex flex-wrap justify-content-center" >
        <Card className='m-2'style={{ width: '18rem' }}>
          <Card.Img className='img-card-prod' variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637266067/cocoMAD/IMG_4975_tjp22y.jpg" />
          <Card.Body className='text-center d-flex flex-column justify-content-evenly'>
            <Card.Title style={{ fontFamily: 'Montserrat', fontWeight:'bold' }}>Alfajores Argentinos y completamente artesanales</Card.Title>
            <Card.Text>
            Todo se soluciona con una buena dosis de dulce de leche». Una de las ‘Frases del día’ que, Luciana...
            </Card.Text>
            <a href="https://madriddiferente.com/tiendas/moncloa-tiendas/los-alfajores-argentinos-y-artesanales-de-cocomad-bakery/" target="_blank" rel="noreferrer"><button className='boton-artesanal-cel'>Leer Mas</button></a>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Card.Img className='img-card-prod' variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154538/cocoMAD/alfacococolor_oqpj7r.jpg" />
          <Card.Body className='text-center d-flex flex-column justify-content-evenly'>
            <Card.Title style={{ fontFamily: 'Montserrat', fontWeight:'bold'}}>Mi cita con Madrid, Alfajores Argentinos </Card.Title>
            <Card.Text>
            El protagonista del post de hoy es un producto argentino que se utiliza en casi todos los productos...
            </Card.Text>
            <a href="https://tucitaconmadrid.wordpress.com/2020/10/11/cocomad-bakery/" target="_blank" rel="noreferrer"><button className='boton-artesanal-cel'>Leer Mas</button> </a>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
