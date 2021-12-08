
import Aos from 'aos'
import "aos/dist/aos.css";
import { Container } from 'react-bootstrap'
import { Formulario } from '../componentes/contacto/Formulario'
import { Ubicacion } from '../componentes/contacto/Ubicacion'
import { useEffect } from 'react';


export default function Contacto() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
            <Container >
                <div data-aos="fade-up" className="text-format row row-cols-1 row-cols-lg-2">
                    <div className="d-flex flex-column aling-items-center align-items-md-start pb-0">
                        <h2>Queremos saber tu opinion!!</h2>
                        <p className="pe-md-5">Envianos un mensaje directo de nuestra pagina, llenando el formulario con tu email, instagram si deseas... y un mensaje.</p>
                        <p className="pe-md-5 mb-2">Si ya probaste algunos de nuestros productos y la atencion que brindamos, usa este espacio para dejarnos una reseña! Eso nos ayuda muchisimo... Gracias</p>
                    </div>
                    <div class="m-auto">
                        <Formulario />
                    </div>
                </div>
                <hr />
                <Ubicacion />
            </Container>
    )
}
