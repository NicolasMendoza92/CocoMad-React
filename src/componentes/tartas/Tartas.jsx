import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { NavbarProducts } from '../navbar/NavbarProducts';
import { CardsTartas } from './CardsTartas';

export default function Tartas({tartas, cart,setCart,setShowSideCart}) {
  return (

    <Container>
    <NavbarProducts/>
    <Col className="col-12">
            <CardsTartas
            tartas={tartas}
              cart={cart}
              setCart={setCart}
              setShowSideCart={setShowSideCart}/>
          </Col>
    </Container>

  );
}
