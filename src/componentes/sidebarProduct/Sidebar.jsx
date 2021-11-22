import './sidebar.css';
import React from 'react'
import { CloseButton} from 'react-bootstrap';

export const Sidebar = ({setSelectCategory, selectCategory, onselectCat, onselectPri, setSelectPrice, selectPrice}) => {

    const filtrarCategoria = (e) => {
        const category = e.target.value;
        setSelectCategory(category)
      }
    
      const filtrarPrecio = (e) => {
        const price = e.target.value;
        setSelectPrice(price)
      }
    
      const clearSelect = () => {
        onselectCat('');
        onselectPri('')
      }
    
      const visibleClearCat = selectCategory ? '' : 'd-none';
    
      const visibleClearPri = selectPrice ? '' : 'd-none';

    return (
        <div className="sidebar mb-3">
            <h4>Filtra tus Productos</h4>
            <div className="d-flex align-content-center mt-2">
                <div className="d-flex flex-column">
                    <label className="m-2" > <b>Categoria</b></label>
                    <select  onChange={filtrarCategoria} className="form-select" >
                        <option value="Alfajores Clasicos">Alfajores Clasicos</option>
                        <option value="Alfajores Premium">Alfajores Premium</option>
                        <option value="Alfajores Grandes">Alfajores Grandes</option>
                        <option value="tartas">Tartas</option>
                        <option value="bizcochos">Bizcochos</option>
                        <option value="salado">Salado</option>
                        <option value="desayunos">Desayunos </option>
                        <option value="boxs">Box Armados</option>
                    </select>
                </div>
                <div>
                    <CloseButton className={`m-2 ${visibleClearCat}`} onClick={clearSelect} />
                </div>
            </div>

            <div className=" d-flex  align-content-center mt-2">
                <div className="d-flex flex-column">
                    <label className="m-2"> <b>Precio</b></label>
                    <select onChange={filtrarPrecio} className="form-select" >
                        <option value="20">Hasta $20</option>
                        <option value="30">Hasta $30</option>
                        <option value="40">Hasta $40</option>
                        <option value="60">Hasta $60</option>
                    </select>
                </div>
                <div>
                    <CloseButton className={`m-2 ${visibleClearPri}`} onClick={clearSelect} />
                </div>
            </div>
        </div>

    )
}
