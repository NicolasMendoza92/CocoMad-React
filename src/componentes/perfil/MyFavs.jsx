
import axios from 'axios';
import React from 'react'
import { leerDeLocalStorage } from '../../utils/localStorage';
import { CardSelectedFavs } from './CardSelectedFavs';



export const MyFavs = ({ requestUserData }) => {

    const favorites = leerDeLocalStorage('favorites') || [];

    const saveFavorites = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const tokenLocal = leerDeLocalStorage("token") || {};
            const headers = { "x-auth-token": tokenLocal.token };
            const newFav = {
                myfavs: favorites.map((favItem) => ({ productId: favItem.product._id }))
            }
            console.log(newFav)
            await requestUserData();
            await axios.post('http://localhost:4000/api/users/favorites', newFav, { headers });
        }
        catch (error) {
            console.error(error);
            if (error.response.data) {
                console.log(error.response.data)
            } else {
                alert('error de conexion')
            }
        }
    }

    const mapSelectedFavorites = favorites?.map((favProduct, i) => (
        <CardSelectedFavs
            key={i} favProduct={favProduct} favorites={favorites}
        />
    ));

    return (
        <div >
            <button onClick={saveFavorites} className='boton-artesanal-cel' >ver mis favoritos</button>
            <div className="d-flex flex-wrap justify-content-center">
                {mapSelectedFavorites}
            </div>
        </div>
    )
}
