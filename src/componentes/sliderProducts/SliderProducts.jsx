import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';


export function SliderProducts({ products }) {


  return (
    <>
      <h3 className="text-center masVendidos">Más vendidos</h3>
      <Container className='d-flex'>
          <div>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/cheesCake_banana_jyqeac.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1632154643/cocoMAD/alfajores_s47mob.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/cheesCake_FR_dihxuf.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
          <div>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1639821244/cocoMAD/alfajor_de_coco_qoidxm.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
      </Container>
    </>
  );
}