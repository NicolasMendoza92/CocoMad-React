
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import {  FaHistory } from 'react-icons/fa';
import { SpinnerCM } from '../spinner/SpinnerCM';

export const MyPurchase = ({ getSales, sales, user, deliveries, getDeliveries }) => {


    const [isLoading, setIsLoading] = useState(false);

    // filtro las ventas que sean solo del user registrado
    const retiros = sales.filter((sale) => { return sale.buyerData.buyerEmail === user.email})
    const entregas = deliveries.filter((delivery) => { return delivery.buyerData.buyerEmail === user.email})

    const fusion = retiros.concat(entregas)

    const refreshSales = async () => {
        setIsLoading(true);
        await getSales();
        await getDeliveries();
        setIsLoading(false);
    };

    

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center my-2">
                Mis Compras
                <button onClick={() => refreshSales()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table responsive bordered hover >
                <thead>
                    <tr className="text-center " >
                        <th>Fecha</th>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody >
                    {fusion.length === 0 ? 
                    <tr className='text-center'>
                        <td colSpan="6">No hay compras registradas</td>
                    </tr> :
                        fusion.map(({
                            buyerData: {
                                buyerEmail,
                                registerBuy
                            },
                            productsList

                            , _id }, tab) => (
                            <tr className="text-center " key={_id}>
                                <td>{new Date(registerBuy).getUTCDate()}/{new Date(registerBuy).getUTCMonth() + 1}/{new Date(registerBuy).getUTCFullYear()}</td>
                                <td>{buyerEmail}</td>
                                <td>{productsList.map(({ producto }) => ( <React.Fragment key={producto.id}>{producto.name} </React.Fragment>))}</td>
                                <td>{productsList.map(({  quantity }) => ( <React.Fragment key={quantity}>{quantity} u</React.Fragment>))}</td>
                                <td>{productsList.map(({ producto }) => ( <React.Fragment key={producto.id}>{producto.price} € </React.Fragment>))}</td>
                                <td >
                                    $ {(productsList.reduce((total, { producto, quantity }) => total + producto.price * quantity, 0)).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            
            {
                isLoading && (
                    <SpinnerCM />
                )
            }
        </div>
    )
}
