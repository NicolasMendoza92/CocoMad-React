import React from 'react'
import './home.css';
import Header from '../../componentes/header/Header';
import { Container } from 'react-bootstrap';


export const Home = () => {
    return (
        <>
            <Header
                page="home"
                titulo="Alfajores Argentinos 100% Artesanales"
                button="Quiero saber mas !"
            />
            <Container>
                <div className="col-12 col-lg-8 d-flex flex-column justify-content-between">
                    <div className="card bg-dark text-white mb-2 tarjetas">
                        <img src="/cocomad/cocoimag/alfajores.jpg" className="card-img" alt="..." />
                        <div
                            className="card-img-overlay text-center d-flex flex-column align-items-center justify-content-center py-5 px-4">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <button href="#" className="boton-artesanal">Quiero saber mas!</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
