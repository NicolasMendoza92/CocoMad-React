import axios from 'axios';
import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaEraser, FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { PaginationTable } from '../paginacion/PaginationTable';
import { ModalViewRetiro } from '../adminComp/ModalViewRetiro';

export const TableSales = ({ getSales, tableSales, setTableSales }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [saleRetiro, setSaleRetiro] = useState({ buyerData: {}, buyerConditions: {}, productsList: [], buyerShipping: {} });
    const [showModalViewRetiro, setShowModalViewRetiro] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentSales, setCurrentSales] = useState([]);


    useEffect(() => {
        const limit = 10;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const productsSlice = tableSales.slice(start, end);
        setCurrentSales(productsSlice);

        const totalPages = Math.ceil(tableSales.length / limit);
        setTotalPages(totalPages);
    }, [currentPage, tableSales]);

    // vbles para abrir el retiro 
    const handleCloseModalViewRetiro = () => setShowModalViewRetiro(false);
    const handleShowModalViewRetiro = () => setShowModalViewRetiro(true);


    const findRetiro = async (_id) => {
        setIsLoading(true)
        const response = await axios.get(`https://cocomadbackend.onrender.com/api/sales/${_id}`);
        setSaleRetiro(response.data);
        setIsLoading(false);
        handleShowModalViewRetiro();
    }

    const alertaBorrarRetiro = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Se perdera el dato de la compra...",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteSale(_id)
                }
            });
    }


    const deleteSale = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`https://cocomadbackend.onrender.com/api/sales/${_id}`, { headers });
        await getSales();
        setIsLoading(false);
    };


    const refreshSales = async () => {
        setIsLoading(true);
        await getSales();
        setIsLoading(false);
    };


    const [busqueda, setBusqueda] = useState('');

    const filterSales = (e) => {
        e.preventDefault();
        const keyword = e.target.value;

        if (keyword === '') {
            refreshSales();
        }
        else if (keyword !== '') {
            const results = tableSales.filter((sale) => {
                return sale.buyerData.buyerName.toLowerCase().includes(keyword.toLowerCase())
                    || sale.buyerConditions.deliveryDate.toLowerCase().includes(keyword.toLowerCase())
            });
            setTableSales(results);
        }
        else {
            setTableSales(tableSales);
        }
        setBusqueda(keyword);
    };


    return (
        <Container>
            <h4>Tabla de Retiros</h4>
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
                            onChange={filterSales}
                        />
                    </div>
                </form>
                <button onClick={() => refreshSales()} className="btn-primary my-2 p-0">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table responsive bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Dia</th>
                        <th>Retiro</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>$ Unidad</th>
                        <th>SubTotal</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {currentSales.length === 0 ?
                        <tr>
                            <td colSpan="6">No hay ventas registradas</td>
                        </tr> :
                        currentSales.map(({
                            buyerData: {
                                buyerName,
                                registerBuy,
                            },
                            buyerConditions: {
                                deliveryDate,
                                payMethod,
                            },
                            productsList
                            , _id }, tab) => (
                            <tr className="text-center " key={tab}>
                                <td>{new Date(registerBuy).getUTCDate()}/{new Date(registerBuy).getUTCMonth() + 1}/{new Date(registerBuy).getUTCFullYear()}</td>
                                <td>{buyerName}</td>
                                <td>{(new Date(deliveryDate).toDateString()).slice(0, -11)}</td>
                                <td>{new Date(deliveryDate).getUTCDate()}/{new Date(deliveryDate).getUTCMonth() + 1}/{new Date(deliveryDate).getUTCFullYear()}</td>
                                <td>{productsList.map(({ producto }) => ( <>{producto.name} </>))}</td>
                                <td>{productsList.map(({  quantity }) => ( <>{quantity} u</>))}</td>
                                <td>{productsList.map(({ producto }) => ( <>{producto.price} € </>))}</td>
                                <td className="d-flex align-items-center justify-content-center" >
                                    {productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0).toFixed(2)}    €
                                </td>
                                <td>
                                    <button className="ms-3 circle-btn" onClick={() => alertaBorrarRetiro(_id)} ><FaEraser className="mb-1" /></button>
                                    <button className="m-auto circle-btn" onClick={() => findRetiro(_id)} ><AiFillEye className="mb-1" /></button>
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

            <ModalViewRetiro
                closeModalRetiro={handleCloseModalViewRetiro}
                showModalViewRetiro={showModalViewRetiro}
                saleRetiro={saleRetiro}
            />

            {
        isLoading && (
            <SpinnerCM />
        )
    }

        </Container >
    )
}
