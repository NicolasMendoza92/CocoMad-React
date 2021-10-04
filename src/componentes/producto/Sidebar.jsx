import './sidebar.css';
import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div class="mb-4 filtrador">
                <div class="d-flex justify-content-between align-items-center">
                    <input type="text" class="form-control mb-0 me-2" placeholder="Busca tus cocoalfajores..." />
                    <button href="#!" className="boton-buscador"><i class="fas fa-search fa-lg"></i></button>
                </div>
            </div>
            <div>
                <h3>CATEGORIAS</h3>
                <ul class=" mb-5">
                    <li><Link href="#!" class="card-link-secondary">Alfajores Linea Clasica</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Alfajores Premium</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Alfajores Grandes Simples</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Alfajores Grandes Triples</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Tartas</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Lo Salado</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Desayunos Sorpesas</Link></li>
                    <li><Link href="#!" class="card-link-secondary">Box Armados</Link>
                    </li>
                </ul>
            </div>

            <div class="mb-4">
                <h6 class="mb-3">Filtra por Precio</h6>
                <div class="d-flex align-items-center my-4">
                    <span class="m-2">$0</span>
                    <form class="mb-1">
                        <input class="multi-range" type="range" />
                    </form>
                    <span class="m-2">$100</span>
                </div>
            </div>
        </div>
    )
}