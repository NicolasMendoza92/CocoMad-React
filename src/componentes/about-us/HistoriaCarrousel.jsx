import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import './historia.css';

export const HistoriaCarrousel = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (

        <div className="row gx-3 gy-2 p-3 about">
            <div className="col-12 col-xxl-6 p-2 d-none d-lg-block">
                <div data-aos="fade-up">
                    <h2>¿Quienes Somos?</h2>
                    <p> Somos de <a href="https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n">Tucumán</a>, la provincia más pequeña de Argentina, ubicada al norte de Argentina. Amamos cocinar, hablar y siempre intentamos dar lo mejor de nosotras para que puedan sentirse como en casa.
                    </p>
                    <p>
                    ☑️Lu es Lic. En Comunicación Social y trabajó en periodismo, marketing y comunicación política. Previo a España, también vivió en Brasil y en Estados Unidos. <br />
                    ☑️Coni es Ingeniera Industrial, trabajó en empresas nacionales de renombre con puestos de gran responsabilidad relacionados al área de planificación y logística.
                    </p>
                </div>
                <div data-aos="fade-up">
                    <h2>¿Cómo Trabajamos?</h2>
                    <p>
                    Somos un equipazo. Al ser un emprendimiento pequeño, cada una realiza la parte que mejor sabe hacer. <br />
                        ✔️Nos encargamos de proveedores, atender a tienda, cocinar, limpiar, coordinar los mensajes y llevar las redes sociales para estar siempre al día con nuestros #CocoFans y de esta forma podamos atender de forma personalizada las demandas y dudas de nuestros clientes. <br />
                        ✔️Nos completamos y ayudamos en las fortalezas de cada una..<br />
                        ✔️Por supuesto, tenemos el apoyo constante de nuestra familia y amigos que nos ayudan en el día a día con cualquier inconveniente que se nos pueda presentar.. <br />
                        •G R A C I A S por apostar siempre a nosotras•
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" className="col-12 col-xxl-6 d-flex justify-content-center p-2">
                <Carousel variant="dark" className="d-flex justify-content-center img-carrousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1635353154/cocoMAD/nosotrasnew_zriwi1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637318094/cocoMAD/_MG_5263_wfo1wt.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1637262330/cocoMAD/unnamed_ngeq7g.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

