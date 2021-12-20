import "./carouselHome.css"

import { Card, Carousel, Col, Container, Row } from "react-bootstrap";



export const CarouselHome = ({ sliderMensajes }) => {

    const mapSliderMensajes = sliderMensajes.map((mensaje, i) => (
        <div key={i} mensaje={mensaje} className="card-tamaño mt-5 d-flex flex-wrap">
            <div className="">
                <div className=" mx-3">
                    <Card
                        className="card-comentarios"
                        style={{ width: "21rem" }}
                    >
                        <div className="mt-3 text-center">
                            <h3>{mensaje.titulo}</h3>
                        </div>
                        <Card.Body>
                            <Card.Title className="descripcion-comentarios mt-1 text-center">
                                "{mensaje.descripcion}"
                            </Card.Title>
                            <Card.Text className="descripcion-nombre text-center">
                                {mensaje.nombre}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <h3 className="text-center ">
                Vea lo que han dicho nuestros clientes en Octubre
            </h3>
            <div className="d-flex  slider" >
                {mapSliderMensajes}
            </div>

        </>
    );
};