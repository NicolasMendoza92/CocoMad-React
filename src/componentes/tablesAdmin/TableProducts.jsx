import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table} from 'react-bootstrap';
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';
import ModalEditProducts from '../adminComp/ModalEditProducts';
import UploadProducts from '../adminComp/UploadProducts';
import { PaginationTable } from '../paginacion/PaginationTable'
import { SpinnerCM } from '../spinner/SpinnerCM';

export const TableProducts = ({tableProducts, getProducts, setTableProducts}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [productFind, setProductFind] = useState({});
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentProducts, setCurrentProducts] = useState([])

    useEffect(() => {
        const limit = 10;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const productsSlice = tableProducts.slice(start, end);
        setCurrentProducts(productsSlice);
        
        const totalPages = Math.ceil(tableProducts.length / limit);
        setTotalPages(totalPages);
    }, [currentPage, tableProducts]);

    const closeModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);

    const findProduct = async (_id) => {
        setIsLoading(true);
        const response = await axios.get(`https://cocobackend.herokuapp.com/api/products/${_id}`);
        setProductFind(response.data);
        setIsLoading(false);
        handleShowModalEditar();
    };

    const deleteProduct = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`https://cocobackend.herokuapp.com/api/products/${_id}`, { headers });
        await getProducts();
        setIsLoading(false);
    };

    const alertaBorrar = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Una vez que elimine el producto ya no aparecerá en el  landing",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteProduct(_id)
                }
            });
    }

    const refreshProductos = async () => {
        setIsLoading(true);
        await getProducts();
        setIsLoading(false);
    };

    const [busqueda, setBusqueda] = useState('');

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = tableProducts.filter((prod) => {
                return prod.name.toLowerCase().includes(keyword.toLowerCase())
                    || prod.category.toLowerCase().includes(keyword.toLowerCase());
            });
            setTableProducts(results);
        } else {
            setTableProducts(tableProducts);
        }
        setBusqueda(keyword);
    };
    return (
        <>
        <UploadProducts getProducts={getProducts} />
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
            <form className="search-form " >
                    <div className="input-group search-table">
                        <span
                        className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            value={busqueda}
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                            onChange={filter}
                        />
                    </div>
                </form>
                <button onClick={() => refreshProductos()} className="btn-primary my-2 p-0">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <span className="text-center mb-3">Pagina {currentPage} de {totalPages}</span>
            <Table bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {currentProducts.length === 0 ?
                        <tr> 
                            <td colSpan="6">No hay productos registrados</td> 
                        </tr> :
                        currentProducts.map(({ name, price, category, _id }, tabProducts) => (
                            <tr className="text-center" key={tabProducts}>
                                <td>{name}</td>
                                <td>$ {price}</td>
                                <td>{category}</td>
                                <td className="p-1 d-flex ">
                                        <button className="m-auto" onClick={() => findProduct(_id)} ><FaRegEdit className="mb-1" /></button>
                                        <button className="m-auto" onClick={() => alertaBorrar(_id)} ><FaEraser className="mb-1" /></button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center ">
                <PaginationTable
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>

            {isLoading && (
                <SpinnerCM />
            )}

            <ModalEditProducts
                closeModal={closeModalEditar}
                showModalEditar={showModalEditar}
                productFind={productFind}
                getProducts={getProducts}
            />
        </Container>
    </>
    )
}
