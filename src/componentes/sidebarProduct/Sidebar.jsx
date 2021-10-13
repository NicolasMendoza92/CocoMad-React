import './sidebar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div class="mb-4 filtrador">
                <div class="d-flex justify-content-between align-items-center">
                    <input type="text" class="form-control mb-0 me-2" placeholder="Busca tus cocoalfajores..." />
                    <button href="#!" className="boton-buscador"><i class="fas fa-search fa-lg"></i></button>
                </div>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="mb-3">CATEGORIAS</Accordion.Header>
                    <Accordion.Body className="d-flex flex-column align-items-center my-4">
                        <Link href="#!" className="card-link-secondary">Alfajores Linea Clasica</Link>
                        <Link href="#!" className="card-link-secondary">Alfajores Premium</Link>
                        <Link href="#!" className="card-link-secondary">Alfajores Grandes Simples</Link>
                        <Link href="#!" className="card-link-secondary">Alfajores Grandes Triples</Link>
                        <Link href="#!" className="card-link-secondary">Tartas</Link>
                        <Link href="#!" className="card-link-secondary">Lo Salado</Link>
                        <Link href="#!" className="card-link-secondary">Desayunos Sorpesas</Link>
                        <Link href="#!" className="card-link-secondary">Box Armados</Link>
                    </Accordion.Body>
                </Accordion.Item >
                <Accordion.Item eventKey="2">
                    <Accordion.Header className="mb-3">Filtra por Precio</Accordion.Header>
                    <Accordion.Body className="d-flex align-items-center my-4">
                        <span class="m-2">$0</span>
                        <form class="mb-1">
                            <input class="multi-range" type="range" />
                        </form>
                        <span class="m-2">$100</span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion >
        </div >
    )
}