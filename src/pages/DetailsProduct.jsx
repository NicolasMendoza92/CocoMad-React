import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CartSideButton } from "../componentes/cartSide/CartSideButton";
import { ProductDetail } from "../componentes/producto/ProductDetail";
import { SpinnerCMDetail } from "../componentes/spinner/SpinnerCMDetail";


const DetailsProduct = ({ cart, setCart, setShowSideCart, showSideCart }) => {

    const [product, setProduct] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const { productId } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true);
            const response = await axios.get(
                `https://cocobackend.herokuapp.com/api/products/${productId}`
            );
            setProduct(response.data);
            setIsLoading(false);
        }
        getProduct();
    }, [productId]);

    if (isLoading) {
        return (
          <SpinnerCMDetail />
        );
      }

    return (
        <>
            <div>
                <ProductDetail product={product} cart={cart} setCart={setCart} setShowSideCart={setShowSideCart} />
            </div>
            <div className="mt-5 text-center">
                <CartSideButton
                    setCart={setCart}
                    cart={cart}
                    showSideCart={showSideCart}
                    setShowSideCart={setShowSideCart}
                    className="position-fixed" />
            </div>
        </>
    );
};

export default DetailsProduct;