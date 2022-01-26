import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import './historia.css';

export const HistoriaAcord = () => {

    return (
        <Container className="d-lg-none ">
            <div className="d-flex flex-column justify-content-center about">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>Nuestra Historia</h2></Accordion.Header>
                        <Accordion.Body>
                            ♥️Como muchos de vosotros sabéis, este proyecto lo empecé hace más de un laaargo año... (Lu).
                            Pero tuvo una nueva incorporación cuando hace un mes atrás llegó Coni, mi hermana, para acompañarme y ayudarme a que este emprendimiento siga creciendo y llevando alegría por medio de nuestros productos a todos los que nos eligen día a día 🤩.
                        </Accordion.Body>
                        <Accordion.Body>
                        Hoy somos socias!!. Cada dia nos esforzamos para mantener nuestro negocio con alegria y buena disposicion. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <h2>¿Quienes Somos?</h2></Accordion.Header>
                        <Accordion.Body>
                            <ul className="listas-desordenadas">
                                <li> ✔️Somos de <a href="https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n">Tucumán</a> la provincia mas pequeña de Argentina :)</li>
                                <li>✔️Nos encanta hablar 😂</li>
                                <li>✔️Amamos cocinar</li>
                                <li>✔️Intentamos dar lo mejor de nosotras y aprender de todos sus comentarios</li>
                            </ul>
                            ☑️Lu es Licenciada en Comunicación Social y trabajó en periodismo, marketing y política. También vivió en Brasil 🇧🇷 y en Estados Unidos 🇺🇸. Vivo hace 3 años y medio en Madrid. <br />
                            ☑️Coni es Ingeniera Industrial, trabajó en empresarias nacionales de renombre con puestos de responsabilidad a los cuales renunció para apostar a este y otros proyectos en 🇪🇸.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <h2>¿Como trabajamos?</h2></Accordion.Header>
                        <Accordion.Body>
                            ✔️ Literalmente hacemos todo nosotras, desde comprar, atender la tienda, cocinar, llevar la parte impositiva, las redes sociales, hablar con proveedores, contestar sus mensajes 🤣🤣. Así que les agradecemos por la paciencia y también pedirles perdón por algún error que hayamos podido cometer 🙌. <br />
                            ✔️Nos completamos y ayudamos en las fortalezas y debilidades de cada una 💫, tanto profesionales como personales.Este equipo llegó para quedarse y para llenar de alfajores Madrid🥳. <br />
                            ✔️Obvio que también hay un equipo detrás que no se ve: la familia que esta a la distancia, los amigos que nos apoyan en el día a día, nuestro co-equipers de <a href="https://www.instagram.com/la.zambita/?hl=es">La Zambita</a> y <a href="https://www.instagram.com/lavidaenrosafloristeria/?hl=es">lavidaenrosafloristeria</a> y muchos más que nos ayudaron a seguir adelante en este camino 👏.
                            Gracias a este país hermoso, tierra de nuestro querido abuelo Fermin, que no sólo nos da la posibilidad de habitarlo sino de emprender 🌸. <br />
                            •G R A C I A S por apostar a nosotras•
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container >
    )
}
