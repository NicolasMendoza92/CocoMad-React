import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CardsLogin } from '../componentes/login/CardsLogin';
import { FormLogin } from '../componentes/login/FormLogin';

export default function Login() {
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col className="col-12 d-flex flex-column justify-content-between mx-auto my-3">
          <FormLogin/>
          </Col>
          <Col className="col-12  mx-auto my-3">
            <CardsLogin/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
