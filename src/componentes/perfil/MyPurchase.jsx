
import React from 'react'
import { Table } from 'react-bootstrap'
import { FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'

export const MyPurchase = () => {

    return (
        <div>
             <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form " >
                    <div className="input-group search-table">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
                <button className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Total</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                  
                </tbody>
            </Table>
        </div>
    )
}
