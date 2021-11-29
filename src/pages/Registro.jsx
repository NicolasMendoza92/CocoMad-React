import React from 'react';
import { Container } from 'react-bootstrap';
import { FormRegister } from '../componentes/register/FormRegister';

export default function Registro() {
  return (
    <div className="container-register">
        <Container >
            <section className="row  row-cols-1 row-cols-lg-2">
                <div className="d-flex flex-column aling-items-center align-items-md-start p-4 ">
                    <h1>Bienvenidos!!!</h1>
                    <p className="px-2 p-md-0 pe-md-5"><b>Únete gratis a CocoMad y sé el primero en conocer nuestras promos y ofertas. Se parte de nuestra cultura, enterate de los nuevos productos y goza de nuestros descuentos por ser cliente Coco.</b> <br />
                    !!No esperes mas y se un Coquito!! </p>
                </div>
                <Container>
                  <FormRegister />
                </Container>
            </section>
        </Container>
        </div>
  );
}
