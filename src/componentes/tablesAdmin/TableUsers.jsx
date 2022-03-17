import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Table} from 'react-bootstrap'
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa'
import { VscSearch } from 'react-icons/vsc'
import swal from 'sweetalert'
import { leerDeLocalStorage } from '../../utils/localStorage'
import { ModalEditUser } from '../adminComp/ModalEditUser'
import { SpinnerCM } from '../spinner/SpinnerCM'

export const TableUsers = ({tableUsers, user, setTableUsers, getUsers}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userFind, setUserFind] = useState({});
    const [showModalEditar, setShowModalEditar] = useState(false);

    const handleCloseModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);

    const findUser = async (_id) => {
        setIsLoading(true);
        const response = await axios.get(`https://cocobackend.herokuapp.com/api/users/${_id}`);
        setUserFind(response.data);
        setIsLoading(false);
        handleShowModalEditar();
    };

    const alertaBorrar = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Una vez que lo elimine, el usuario debera crear otra cuenta para ingresar.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUser(_id)
                }
            });
    }
    // antes de eliminar, se asegura que no este logeado el usuario
    const deleteUser = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`https://cocobackend.herokuapp.com/api/users/${_id}`, { headers });
        await getUsers();
        setIsLoading(false);
    };

    const refreshUsers = async () => {
        setIsLoading(true);
        await getUsers();
        setIsLoading(false);
    };

    const [busqueda, setBusqueda] = useState('');
    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = tableUsers.filter((user) => {
                return user.name.toLowerCase().includes(keyword.toLowerCase())
                    || user.email.toLowerCase().includes(keyword.toLowerCase())
                    || user.role.toLowerCase().includes(keyword.toLowerCase());
            });
            setTableUsers(results);
        } else {
            setTableUsers(tableUsers);
        }
        setBusqueda(keyword);
    };

    return (
        <div>
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
                <button onClick={() => refreshUsers()} className="btn-primary my-2 p-0">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table bordered hover>
                <thead>
                    <tr className="text-center" >
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableUsers.length === 0 ?
                        <tr>
                            <td colSpan="6"> No hay usuarios registrados</td>
                        </tr> :
                        tableUsers.map(({ name, email, role, _id }, i) => (
                            <tr className="text-center" key={i}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                                <td className="p-1 d-flex ">
                                        <button 
                                        disabled={user.email === email }
                                        className={user.email === email? 'm-auto circle-btn-disable' : 'm-auto circle-btn'} onClick={() => findUser(_id)} ><FaRegEdit className="mb-1" /></button>
                                        <button 
                                        disabled={user.email === email }
                                        className={user.email === email? 'm-auto circle-btn-disable' : 'm-auto circle-btn'} onClick={() => alertaBorrar(_id)} ><FaEraser className="mb-1" /></button>
                                </td>

                            </tr>
                        ))}
                </tbody>
            </Table>
            <ModalEditUser
                closeModal={handleCloseModalEditar}
                showModalEditar={showModalEditar}
                userFind={userFind}
                getUsers={getUsers}
            />

            {isLoading && (
                <SpinnerCM />
            )}
        </div>
    )
}
