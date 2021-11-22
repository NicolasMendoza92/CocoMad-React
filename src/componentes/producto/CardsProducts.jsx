
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { PaginationStore } from '../paginacion/PaginationStore';
import { CardProduct } from './CardProduct';

export const CardsProducts = ({ products, selectCategory, selectPrice, serch }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentProducts, setCurrentProducts] = useState([]);

    useEffect(() => {
        const limit = 6;
        const start = 0 + currentPage * limit - limit;
        const end = start + limit;

        const filteredProducts = products
            .filter((prodFil) => !selectCategory || prodFil.category === selectCategory)
            .filter((prodfil) => !selectPrice || prodfil.price <= selectPrice)

        let searchProducts = [];

        if (serch.length !== '') {
            searchProducts = filteredProducts.filter((prod) => {
                return prod.name.toLowerCase().includes(serch.toLowerCase());
            });
        } else {
            searchProducts = filteredProducts;
        }
        const productsSlice = searchProducts.slice(start, end);
        setCurrentProducts(productsSlice);

        const totalPages = Math.ceil(searchProducts.length / limit);
        setTotalPages(totalPages);
    }, [products, currentPage, serch, selectCategory, selectPrice]);

    const mapProducts = currentProducts?.map((product) => (<CardProduct key={product._id} product={product} />));

    return (
        <>
            {currentProducts?.length !== 0 ?
                <div className="d-flex flex-column align-items-center">
                    <span className="mb-3 pag-num ">Pagina {currentPage} de {totalPages}</span>
                    <div className="d-flex flex-wrap justify-content-center">
                        {mapProducts}
                    </div>
                    <PaginationStore
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
                :
                <Card className="no-results-card text-center text-dark-50 p-5 m-5">
                    <Card.Title>Producto no encontrado</Card.Title>
                </Card>
            }

        </>
    )
}




