import axios from 'axios';
import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaEraser, FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { ModalViewSale } from '../adminComp/ModalViewSale';
import { PaginationTable } from '../paginacion/PaginationTable';

export const TableDeliveries = ({ deliveries, setDeliveries, getDeliveries }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [saleFind, setSaleFind] = useState({ buyerData: {}, buyerConditions: {}, productsList: [], buyerShipping: [] });
    const [showModalViewSale, setShowModalViewSale] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const [currentDeliveries, setCurrentDeliveries] = useState([]);

    useEffect(() => {
        const limit = 10;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const productosSlice = deliveries.slice(start, end);
        setCurrentDeliveries(productosSlice);

        const totalPages = Math.ceil(deliveries.length / limit);
        setTotalPages(totalPages);
    }, [currentPage, deliveries]);

    // vbles para abrir el delivery
    const handleCloseModalViewSale = () => setShowModalViewSale(false);
    const handleShowModalViewSale = () => setShowModalViewSale(true);

    const findSale = async (_id) => {
        setIsLoading(true)
        const response = await axios.get(`https://cocobackend.herokuapp.com/api/deliveries/${_id}`);
        setSaleFind(response.data);
        setIsLoading(false);
        handleShowModalViewSale();
    }

    const alertaBorrarEntrega = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Se perdera el dato de la compra...",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteDelivery(_id)
                }
            });
    }

    const deleteDelivery = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`https://cocobackend.herokuapp.com/api/deliveries/${_id}`, { headers });
        await getDeliveries();
        setIsLoading(false);
    };

    const refreshDeliverys = async () => {
        setIsLoading(true);
        await getDeliveries();
        setIsLoading(false);
    };

    const [filtro, setFiltro] = useState('');

    const filterDelivery = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = deliveries.filter((delivery) => {
                return delivery.buyerData.buyerName.includes(keyword.toLowerCase())
                    || delivery.buyerConditions.deliveryDate.toLowerCase().includes(keyword.toLowerCase())
            });
            setDeliveries(results);
        } else {
            setDeliveries(deliveries);
        }
        setFiltro(keyword);
    };

    return (
        <Container>
            <h4>Tabla de Envios</h4>

            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form " >
                    <div className="input-group search-table">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            value={filtro}
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                            onChange={filterDelivery}
                        />
                    </div>
                </form>
                <button onClick={() => refreshDeliverys()} className="btn-primary my-2 p-0">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Pago</th>
                        <th>Entrega</th>
                        <th>Productos</th>
                        <th>SubTotal</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {currentDeliveries.length === 0 ?
                        <tr>
                            <td colSpan="6">No hay ventas registradas</td>
                        </tr> :
                        currentDeliveries.map(({
                            buyerData: {
                                buyerName,
                                registerBuy,
                            },
                            buyerConditions: {
                                deliveryDate,
                                payMethod,
                                discount,
                            },
                            productsList
                            , _id }, tabe) => (
                            <tr className="text-center " key={tabe}>
                                <td>{new Date(registerBuy).getUTCDate()}/{new Date(registerBuy).getUTCMonth() + 1}/{new Date(registerBuy).getUTCFullYear()}</td>
                                <td>{buyerName}</td>
                                <td>{payMethod}</td>
                                <td>{new Date(deliveryDate).getUTCDate()}/{new Date(deliveryDate).getUTCMonth() + 1}/{new Date(deliveryDate).getUTCFullYear()}</td>
                                <td>{productsList.map(({ producto, quantity }, prod) => (
                                    <Table size="sm" key={prod}>
                                        <thead>
                                            <tr className="row">
                                                <td className="col-6">{producto.name}</td>
                                                <td className="col-3">{quantity} u</td>
                                                <td className="col-3">{producto.price} €</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                )
                                )}
                                </td>
                                <td className="d-flex align-items-center justify-content-center" >
                                    {productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0).toFixed(2)} €
                                </td>
                                <td>
                                    <button className="ms-3 circle-btn" onClick={() => alertaBorrarEntrega(_id)} ><FaEraser className="mb-1" /></button>
                                    <button className="m-auto circle-btn" onClick={() => findSale(_id)} ><AiFillEye className="mb-1" /></button>
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

            <ModalViewSale
                closeModal={handleCloseModalViewSale}
                showModalViewSale={showModalViewSale}
                saleFind={saleFind}
            />

            {
                isLoading && (
                    <SpinnerCM />
                )
            }

        </Container >
    )
}