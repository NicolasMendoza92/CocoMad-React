import React from 'react'
import './home.css';
import Header from '../../componentes/header/Header';


export const Home = () => {
    return (
        <>
        <Header 
        page="home"
        titulo="Alfajores Argentinos 100% Artesanales"
        button="Quiero saber mas !"
        />
        <h1>HOME</h1>
        {/* <Container>
            <Row className="mb-5">
                <Col className="col-12 col-lg-8 d-flex flex-column justify-content-between">
                    <Card className="bg-dark text-white mb-2 tarjetas">
                        <Card.Img src="https://img-global.cpcdn.com/recipes/recipes_24602_v1393348078_receta_foto_00024602/1200x630cq70/photo.jpg" className="cartiols" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4 tarjetas">
                        <h5 class="card-title">Card title</h5>
                        <button href="#" class="boton-artesanal">Quiero saber mas!</button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="col-12 col-lg-4 d-flex flex-column justify-content-between ">
                <Card className="bg-dark text-white mb-2 tarjetas">
                        <Card.Img src="https://i.blogs.es/ed341c/albert-s-fknfvghvzki-unsplash/1366_2000.jpg" className="cartiols" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                        <h5 class="card-title">Card title</h5>
                        <button href="#" class="boton-artesanal">Quiero saber mas!</button>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white mb-2 tarjetas">
                        <Card.Img src="https://resizer.glanacion.com/resizer/wEfLMKxulijY62Dj0kjevpEPfJo=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5G4LZ5WTM5H4RHWT257DEGRZQU.jpg" className="cartiols" alt="Card image" />
                        <Card.ImgOverlay className="text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                        <h5 class="card-title">Card title</h5>
                        <button href="#" class="boton-artesanal">Quiero saber mas!</button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container> */}
        </>
    )
}
