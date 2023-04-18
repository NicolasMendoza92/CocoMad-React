import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CardsLogin } from '../componentes/login/CardsLogin';
import { FormLogin } from '../componentes/login/FormLogin';

export default function Login({ requestUserData, cart }) {
  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col className="col-9 d-flex flex-column justify-content-between mx-auto my-3">
            <FormLogin requestUserData={requestUserData} cart={cart} />
          </Col>
          <Col className="col-9  mx-auto my-3">
            <CardsLogin />
          </Col>
        </Row>
      </Container>
      <Card className="no-results-card-login text-center">
        <Card.Title>Login as admin user:admin@gmail.com - password:123456</Card.Title>
      </Card>
    </>
  );
}
