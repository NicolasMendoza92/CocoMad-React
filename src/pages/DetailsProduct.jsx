import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../componentes/producto/ProductDetail";
import { SliderProducts } from "../componentes/sliderProducts/SliderProducts";


const DetailsProduct = ({products, cart, setCart}) => {

    const [product, setProduct] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(
                `https://cocobackend.herokuapp.com/api/products/${productId}`
            );
            setProduct(response.data);
        }
        getProduct();
    }, [productId]);

    return (
        <>
            <div>
                <ProductDetail product={product} cart={cart} setCart={setCart}  />
            </div>
            <div className="mt-5 text-center">
            <SliderProducts products={products} />
            </div>
        </>
    );
};

export default DetailsProduct;