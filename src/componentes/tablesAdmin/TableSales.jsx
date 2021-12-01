import axios from 'axios';
import { useState } from 'react'
import { Container, Table} from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaEraser, FaHistory} from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { ModalViewSale } from '../ventas/ModalViewSale';

export const TableSales = ({ getSales, sales, tableSales, setTableSales }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [saleFind, setSaleFind] = useState({buyerData: {}, buyerShipping:{}, productsList:[]});
    const [showModalViewSale, setShowModalViewSale] = useState(false);

    const handleCloseModalViewSale = () => setShowModalViewSale(false);
    const handleShowModalViewSale = () => setShowModalViewSale(true);

    const findSale = async (_id) => {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:4000/api/sales/${_id}`);
        setSaleFind(response.data);
        setIsLoading(false);
        handleShowModalViewSale();
    }

    const alertaBorrar = (_id) => {
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
        await axios.delete(`http://localhost:4000/api/sales/${_id}`, { headers });
        await getSales();
        setIsLoading(false);
    };
    const refreshSales = async () => {
        setIsLoading(true);
        await getSales();
        setIsLoading(false);
    };

    const [busqueda, setBusqueda] = useState('');

    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = sales.filter((sale) => {
                return sale.buyerData.buyerEmail.toLowerCase().includes(keyword.toLowerCase())
                    || sale.buyerData.registerBuy.toLowerCase().includes(keyword.toLowerCase())
                    || sale.buyerShipping.buyerState.toLowerCase().includes(keyword.toLowerCase());
            });
            setTableSales(results);
        } else {
            setTableSales(sales);
        }
        setBusqueda(keyword);
    };

    return (
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
                <button onClick={() => refreshSales()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Provincia</th>
                        <th>Productos</th>
                        <th>Total</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {tableSales.length === 0 ? 
                    <tr>
                        <td colSpan="6">No hay ventas registradas</td>
                    </tr> :
                        tableSales.map(({
                            buyerData: {
                                buyerEmail,
                                registerBuy
                            },
                            buyerShipping: {
                                buyerState
                            },
                            productsList

                            , _id }, tab) => (
                            <tr className="text-center " key={tab}>
                                <td>{new Date(registerBuy).getUTCDate()}/{new Date(registerBuy).getUTCMonth() + 1}/{new Date(registerBuy).getUTCFullYear()}</td>
                                <td>{buyerEmail}</td>
                                <td>{buyerState}</td>
                                <td>{productsList.map(({ producto, quantity }, prod) => (
                                    <Table size="sm" key={prod}>
                                        <thead>
                                            <tr className="row">
                                                <td className="col-6">{producto.name}</td>
                                                <td className="col-3">{quantity} u</td>
                                                <td className="col-3">$ {producto.price}</td>
                                            </tr>
                                        </thead>
                                    </Table>
                                )
                                )}
                                </td>
                                <td className="d-flex align-items-center justify-content-center" >
                                    $ {(productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0)).toFixed(2)}
                                </td>
                                <td>
                                    <button className="m-auto circle-btn" onClick={() => findSale(_id)} ><AiFillEye className="mb-1" /></button>
                                    <button className="ms-3 circle-btn" onClick={() => alertaBorrar(_id)} ><FaEraser className="mb-1" /></button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

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
