import "./carouselHome.css"
import { Card } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export const CarouselHome = ({ sliderMensajes }) => {


    const mapSliderMensajes = sliderMensajes.map((mensaje, i) => (
        <div  key={i} mensaje={mensaje} className="card-tamaño mt-5 d-flex flex-wrap">
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

    const sliderLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const sliderRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <div id="main-slider-container" className="slider-container">
                <FaAngleLeft className="slider-left-icon" onClick={sliderLeft} />
                <div id="slider" className="slider" >
                    {mapSliderMensajes}
                </div>
                <FaAngleRight className="slider-right-icon" onClick={sliderRight} />
            </div>
        </>
    );
};