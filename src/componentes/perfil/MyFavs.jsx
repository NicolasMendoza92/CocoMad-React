
import axios from 'axios';
import React from 'react'
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';


export const MyFavs = (requestUserData) => {

    const favorites = leerDeLocalStorage('favorites') || [];

    const getFavoritos = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const tokenLocal = leerDeLocalStorage("token") || {};
            const headers = { "x-auth-token": tokenLocal.token };
            console.log(headers)
            const newFav = {
                myfavs: favorites.map((favItem) => ({ productId: favItem.product._id }))
            }
            await requestUserData();
            // await axios.put('http://localhost:4000/api/user/favorites',{ newFav},{headers});
            console.log(newFav)

        }
        catch (error) {
            console.error(error);
            if (error.response.data) {
                swal("Algo pasa");
            } else {
                alert('error de conexion')
            }
        }
    }

    return (
        <div>
            <button onClick={getFavoritos}>ver mis favoritos</button>
        </div>
    )
}
