import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { Container,Table} from 'react-bootstrap'
import { FaEraser, FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { PaginationTable } from '../paginacion/PaginationTable';



export const TableMessages = ({ messages, getMessages, setMessages }) => {

    const [isLoading, setIsLoading] = useState(false);
    // logica para paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentMessages, setCurrentMessages] = useState([])

    useEffect(() => {
        const limit = 10;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const productsSlice = messages.slice(start, end);
        setCurrentMessages(productsSlice);
        
        const totalPages = Math.ceil(messages.length / limit);
        setTotalPages(totalPages);
    }, [currentPage, messages]);

    const alertaBorrar = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Una vez que lo elimine, el usuario no va a poder entrar nunca mas",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteMessage(_id)
                }
            });
    }

    const deleteMessage = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`https://cocobackend.herokuapp.com/api/messages/${_id}`, { headers });
        await getMessages();
        setIsLoading(false);
    };

    const refreshMessages = async () => {
        setIsLoading(true);
        await getMessages();
        setIsLoading(false);
    };

    // defino vble para formula de busqueda
    const [busqueda, setBusqueda] = useState('');
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = messages.filter((msj) => {
                return msj.senderName.toLowerCase().includes(keyword.toLowerCase())
                    || msj.senderEmail.toLowerCase().includes(keyword.toLowerCase());
            });
            setMessages(results);
        } else {
            setMessages(messages);
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
                <button onClick={() => refreshMessages()} className="btn-primary my-2 p-0">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <span className="text-center mb-3">Pagina {currentPage} de {totalPages}</span>
            <Table bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Instagram</th>
                        <th>Mensaje</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {currentMessages.length === 0 ?
                        <tr>
                            <td colSpan="6">No hay mensajes registrados</td>
                        </tr> :
                        currentMessages.map(({ senderName, senderEmail,senderIg, message, _id }, i) => (
                            <tr className="text-center " key={i}>
                                <td>{senderName}</td>
                                <td>{senderEmail}</td>
                                <td>{senderIg}</td>
                                <td>{message}</td>
                                <td>                     
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

        </Container>
    )
}
