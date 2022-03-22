import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import './historia.css';

export const HistoriaAcord = () => {

    return (
        <Container className="d-lg-none ">
            <div className="d-flex flex-column justify-content-center about">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>¿Como empezamos?</h2></Accordion.Header>
                        <Accordion.Body className='acordion-text'>
                            <div className="text-center p-1">
                                <p> <b>Somos dos hermanas Lu y Coni  :) </b> </p>
                            </div>
                            <div className="p-1">
                                <p> <b> Luciana</b> emigró a España en el 2017 para estudiar un máster en busca de mejorar sus estudios académicos. Decidió emprender con la tienda a fines del 2019, dando así inicio a CocoMad el 30 de diciembre de dicho año. La tienda era muy pequeña y estaba ubicada en el barrio de La Guindalera. El objetivo era enamorar el público madrileño y a todo aquel que viva en Madrid a través de los <a href="https://es.wikipedia.org/wiki/Alfajor_(Latinoam%C3%A9rica)#:~:text=Esta%20variedad%20se%20compone%20de,de%20chocolate%20y%20diferentes%20rellenos." target="_blank" rel="noreferrer">alfajores</a>, del dulce de leche y otros sabores típicos argentinos.
                                </p>
                            </div>
                            <div className="p-1">
                                <p> A principios del 2020 y con el inicio de la pandemia, comenzaron los repartos por todo Madrid para poder llevar alfajores, brownies y otros productos con el fin de que el encierro sea más ameno. Así es como se fue creando una comunidad de #CocoFans que esperaban todas las semanas sus alfajores para disfrutar en casa. Luego de la cuarentena y al abrirse las tiendas al público, muchos comenzaron a visitar CocoMad y a conocer a Luciana en persona. La tienda empezó a crecer y a hacerse más conocida, por lo cuál se necesitaba más ayuda.
                                </p>
                            </div>
                            <div className="p-1">
                                <p> <b>Constanza</b>, decidió mudarse a Madrid en marzo del 2021 para poder trabajar mano a mano en la tienda y ayudar a que los alfajores lleguen cada vez a más gente en la ciudad. Esta sociedad de hermanas, amigas y colegas empezó a forjar un nuevo camino para poder dar un paso más y cambiarnos a una tienda de mayor tamaño que aparte de tener ricos productos, también pueda incluir un servicio de cafetería de primer nivel.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>¿Por qué CocoMad?</h2></Accordion.Header>
                        <Accordion.Body className='acordion-text'>
                            <div className="p-1">
                                <p>  El nombre surgió en una reunión con dos amigas. Empezamos a darle forma y a aportar diferentes ideas, mezclas, palabras hasta que finalmente quedó CocoMad como el elegido.</p>
                            </div>
                            <div className="p-1">
                                <p> Coco es por el coco rallado, ya que el producto más vendido es el alfajor de maizena que alrededor tiene Coco. Mad es por Madrid, ya que sería la ciudad en donde empezaría la tienda.
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <h2>¿Quiénes Somos?</h2></Accordion.Header>
                        <Accordion.Body className='acordion-text'>
                            <p> Somos de <a href="https://es.wikipedia.org/wiki/Provincia_de_Tucum%C3%A1n">Tucumán</a>, la provincia más pequeña de Argentina, ubicada al norte de Argentina. Amamos cocinar, hablar y siempre intentamos dar lo mejor de nosotras para que puedan sentirse como en casa.
                            </p>
                            <p>
                                ☑️Lu es Lic. En Comunicación Social y trabajó en periodismo, marketing y comunicación política. Previo a España, también vivió en Brasil y en Estados Unidos. <br />
                                ☑️Coni es Ingeniera Industrial, trabajó en empresas nacionales de renombre con puestos de gran responsabilidad relacionados al área de planificación y logística.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header> <h2>¿Como trabajamos?</h2></Accordion.Header>
                        <Accordion.Body className='acordion-text'>
                            <p>
                                Somos un equipazo. Al ser un emprendimiento pequeño, cada una realiza la parte que mejor sabe hacer. <br />
                                ✔️Nos encargamos de proveedores, atender a tienda, cocinar, limpiar, coordinar los mensajes y llevar las redes sociales para estar siempre al día con nuestros #CocoFans y de esta forma podamos atender de forma personalizada las demandas y dudas de nuestros clientes. <br />
                                ✔️Nos completamos y ayudamos en las fortalezas de cada una..<br />
                                ✔️Por supuesto, tenemos el apoyo constante de nuestra familia y amigos que nos ayudan en el día a día con cualquier inconveniente que se nos pueda presentar.. <br />
                                •G R A C I A S por apostar siempre a nosotras•
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container >
    )
}
