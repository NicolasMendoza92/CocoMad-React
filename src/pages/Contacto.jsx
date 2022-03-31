
import { Container } from 'react-bootstrap'
import { Formulario } from '../componentes/contacto/Formulario'
import { Ubicacion } from '../componentes/contacto/Ubicacion'


export default function Contacto() {

    return (
            <Container >
                <div className="text-format row row-cols-1 row-cols-lg-2 mt-5 mb-5">
                    <div className="d-flex flex-column aling-items-center align-items-md-start pb-0">
                        <h2>Queremos saber tu opinión</h2>
                        <p className="pe-md-5">Envianos un mensaje directo de nuestra página, llenando el formulario con tu email, instagram si deseas... y un mensaje.</p>
                        <p className="pe-md-5 mb-2">Si ya probaste algunos de nuestros productos y te gusto la atención que brindamos, usa este espacio para dejarnos una reseña, eso nos ayuda muchisimo... Gracias</p>
                    </div>
                    <div className="m-auto form-contact-container">
                        <Formulario />
                    </div>
                </div>
                <hr />
                <Ubicacion />
            </Container>
    )
}
