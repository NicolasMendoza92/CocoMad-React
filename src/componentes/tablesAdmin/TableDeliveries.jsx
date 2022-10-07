import axios from 'axios';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerCM } from '../spinner/SpinnerCM';
import { DataGrid } from '@mui/x-data-grid';
import DeliveryList from '../../pages/pagesAdmin/DeliveryList';



export const TableDeliveries = ({ deliveries, setDeliveries, getDeliveries }) => {

    const [isLoading, setIsLoading] = useState(false);

    const columns = [
        { field: 'id', headerName: 'Fecha', width: 100 },
        { field: 'lastName', headerName: 'Cliente', width: 130 },
        { field: 'firstName', headerName: 'Entrega', width: 130 },
        {
            field: 'age',
            headerName: 'Total',
            type: 'number',
            width: 90,
        },
        {
            field: 'product',
            headerName: 'Producto',
            width: 200,
        },
    ];
    
    const rows = [
        { id: 1, lastName: 'snow', firstName: 'Jon', age: 35, product: 'banana' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const findSale = async (_id) => {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:4000/api/shipment/${_id}`);
        console.log(response.data)
        setIsLoading(false);
    }

    const deleteDelivery = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/shipment/${_id}`, { headers });
        await getDeliveries();
        setIsLoading(false);
    };

    const refreshDeliverys = async () => {
        setIsLoading(true);
        await getDeliveries();
        setIsLoading(false);
    };


    return (
        <Container>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
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