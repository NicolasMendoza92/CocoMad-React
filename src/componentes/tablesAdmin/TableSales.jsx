import axios from 'axios';
import { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { VscSearch } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { PaginationTable } from '../paginacion/PaginationTable';
import { FaHistory } from 'react-icons/fa';

export const TableSales = ({ getSales, tableSales, setTableSales }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [saleRetiro, setSaleRetiro] = useState({ });
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
        const response = await axios.get(`http://localhost:4000/api/pickUp/${_id}`);
        setSaleRetiro(response.data);
        setIsLoading(false);
        handleShowModalViewRetiro();
    }


    const deleteSale = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/pickUp/${_id}`, { headers });
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
       
        if(keyword === ''){
            refreshSales();
        }
        else if (keyword !== '') {
            const results = tableSales.filter((sale) =>{
                return sale.buyerName.toLowerCase().includes(keyword.toLowerCase())
                    || sale.deliveryDate.toLowerCase().includes(keyword.toLowerCase())
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
            <Table bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Dia</th>
                        <th>Retiro</th>
                        <th>Productos</th>
                        <th>SubTotal</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
            </Table>
            <div className="d-flex justify-content-center ">
                <PaginationTable
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>

            {
                isLoading && (
                    <SpinnerCM />
                )
            }

        </Container >
    )
}
