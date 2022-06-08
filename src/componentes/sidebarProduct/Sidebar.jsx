import './sidebar.css';
import React from 'react'
import { CloseButton } from 'react-bootstrap';

export const Sidebar = ({ setSelectCategory, selectCategory, onselectCat, onselectPri, setSelectPrice, selectPrice, setSearch, currentPage, setCurrentPage }) => {

    const filtrarCategoria = (e) => {
        if (currentPage !== 1 || currentPage === 1) {
            setCurrentPage(1)
            const category = e.target.value;
            setSelectCategory(category);
            setSearch('');
        }
    }

    const filtrarPrecio = (e) => {
        if (currentPage !== 1 || currentPage === 1) {
            setCurrentPage(1)
            const price = e.target.value;
            setSelectPrice(price);
            setSearch('');
        }
    }

    const clearSelectCat = () => {
        onselectCat('');
        setSearch('');

    }
    const clearSelectPri = () => {
        onselectPri('');
        setSearch('');
    }

    const visibleClearCat = selectCategory ? '' : 'd-none';

    const visibleClearPri = selectPrice ? '' : 'd-none';

    return (
        <>
            <h4 className='sidebar'>Filtra tus Productos</h4>
            <div className="sidebar row align-content-center mb-3">
                <div className="col-12 col-lg-6 mt-2">
                    <div className="d-flex">
                        <label className="m-2" > <b>Categoria</b></label>
                        <select onChange={filtrarCategoria} defaultValue={'default'} className="form-select" >
                            <option value="default" disabled >Elije...</option>
                            <option value="Alfajores Clasicos">Alfajores Clasicos</option>
                            <option value="Alfajores Premium">Alfajores Premium</option>
                            <option value="Alfajores Grandes">Alfajores Grandes</option>
                            <option value="Tartas Medianas">Tartas Medianas</option>
                            <option value="Bizcochos">Bizcochos</option>
                            <option value="Salado">Salado</option>
                            <option value="Desayunos">Desayunos </option>
                            <option value="Box Armados">Box Armados</option>
                        </select>
                        <CloseButton className={`m-2 ${visibleClearCat}`} onClick={clearSelectCat} />
                    </div>

                </div>
                <div className="col-12 col-lg-6 mt-2">
                    <div className="d-flex">
                        <label className="m-2"> <b>Precio</b></label>
                        <select onChange={filtrarPrecio} defaultValue={'default'} className="form-select" >
                            <option value="default" disabled>Rango...</option>
                            <option value="10">Hasta 10€</option>
                            <option value="15">Hasta 15€</option>
                            <option value="25">Hasta 25€</option>
                            <option value="35">Hasta 35€</option>
                        </select>
                        <CloseButton className={`m-2 ${visibleClearPri}`} onClick={clearSelectPri} />
                    </div>

                </div>
            </div>
        </>
    )
}
