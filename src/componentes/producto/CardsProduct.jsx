
import React from 'react'
import { CardProduct } from './CardProduct';

export const CardsProduct = ({products}) => {
    
    const mapProducts = products.map((product) => (<CardProduct product={product} />));

    return (
        <div className="d-flex flex-wrap justify-content-center">  
            {mapProducts}    
        </div>
    )
}



    
     