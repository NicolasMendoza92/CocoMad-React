import './sidebar.css';
import React from 'react'
import { CloseButton} from 'react-bootstrap';

export const Sidebar = () => {


    return (
        <div className="sidebar">
            <h4>Filtra tus Productos</h4>

            <div className=" d-flex  align-content-center mt-2">
                <div className="d-flex flex-column">
                    <label className="m-2" >Categoria</label>
                    <select className="form-select" >
                        <option value="">Alfajores Linea Clasica</option>
                        <option value="">Alfajores Linea Premium</option>
                        <option value="">Alfajores Grandes Simples</option>
                        <option value="">Alfajores Grandes Triples</option>
                        <option value="">Tartas</option>
                        <option value="">Lo Salado</option>
                        <option value="">Desayunos </option>
                        <option value="">Box Armados</option>
                    </select>
                </div>
                <div>
                    <CloseButton className="m-2" />
                </div>
            </div>

            <div className=" d-flex  align-content-center mt-2">
                <div className="d-flex flex-column">
                    <label className="m-2">Precio</label>
                    <select className="form-select" >
                        <option value="20">Hasta $20</option>
                        <option value="30">Hasta $30</option>
                        <option value="40">Hasta $40</option>
                        <option value="60">Hasta $60</option>
                    </select>
                </div>
                <div>
                    <CloseButton className="m-2" />
                </div>
            </div>
        </div>

    )
}
