import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import './historia.css';

export const HistoriaCarrousel = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (

        <div className="row gx-3 gy-2 p-3 about">
            <div  className="col-12 col-xxl-6 p-2 d-none d-lg-block">
                <div  data-aos="fade-up">
                    <h2>¿Quienes Somos?</h2>
                    <p>
                        ☑️Lu es Licenciada en Comunicación Social y trabajó en periodismo, marketing y política. También vivió en Brasil 🇧🇷 y en Estados Unidos 🇺🇸. Vivo hace 3 años y medio en Madrid. <br />
                        ☑️Coni es Ingeniera Industrial, trabajó en empresarias nacionales de renombre con puestos de responsabilidad a los cuales renunció para apostar a este y otros proyectos en 🇪🇸.
                    </p>
                    <ul className="listas-desordenadas">
                        <li> ✔️Somos de <a href="https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n">Tucumán</a> la provincia mas pequeña de Argentina :)</li>
                        <li>✔️Nos encanta hablar 😂</li>
                        <li>✔️Amamos cocinar</li>
                        <li>✔️Intentamos dar lo mejor de nosotras y aprender de todos sus comentarios</li>
                    </ul>
                </div>
                <div  data-aos="fade-up">
                    <h2>¿Como Trabajamos?</h2>
                    ✔️ Literalmente hacemos todo nosotras, desde comprar, atender la tienda, cocinar, llevar la parte impositiva, las redes sociales, hablar con proveedores, contestar sus mensajes 🤣🤣. Así que les agradecemos por la paciencia y también pedirles perdón por algún error que hayamos podido cometer 🙌. <br />
                    ✔️Nos completamos y ayudamos en las fortalezas y debilidades de cada una 💫, tanto profesionales como personales.Este equipo llegó para quedarse y para llenar de alfajores Madrid🥳. <br />
                    ✔️Obvio que también hay un equipo detrás que no se ve: la familia que esta a la distancia, los amigos que nos apoyan en el día a día, nuestro co-equipers de @la.zambita y @lavidaenrosafloristeria y muchos más que nos ayudaron a seguir adelante en este camino 👏.
                    Gracias a este país hermoso, tierra de nuestro querido abuelo Fermin, que no sólo nos da la posibilidad de habitarlo sino de emprender 🌸. <br />
                    •G R A C I A S por apostar a nosotras•
                </div>
            </div>
            <div  data-aos="fade-up" className="col-12 col-xxl-6 d-flex justify-content-center p-2">
                <Carousel variant="dark" className="d-flex justify-content-center img-carrousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1635353154/cocoMAD/nosotrasnew_zriwi1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
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

