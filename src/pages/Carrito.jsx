
import React, { useState } from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { useHistory } from 'react-router';
import { BuyForm } from '../componentes/carrito/BuyForm';
import { CardCarrito } from '../componentes/carrito/CardCarrito';
import { CardDataCompra } from '../componentes/carrito/CardDataCompra';
import { ModalDescuento } from '../componentes/carrito/ModalDescuento';

export default function Carrito({ cart, setCart, user }) {

    const history = useHistory();
    const [envio, setEnvio] = useState('');
    const [ajuste, setAjuste] = useState('');

    const [showModalDescuento, setShowModalDescuento] = useState(false);

    const handleCloseModalDescuento = () => setShowModalDescuento(false);
    const handleShowModalDescuento = () => setShowModalDescuento(true);

    const scrollToTop = () => {
        window.scrollTo(0, 250);
    };

    const changeQuantity = (_id, quantity) => {
        const updateCart = cart.map((productCart) => {
            if (productCart.product._id === _id) {
                return { ...productCart, quantity };
            }
            return productCart;
        });
        setCart(updateCart);
        setAjuste(0);
    };

    // el parametro "total" es mi acumulador, y en el segundo ponemos a donde accedemos, como es un objeto queremos que nos acumule producto y cantidad ---> despues devolvemos el acumulador "total + (la multiplicacion del precio x cant) y despues devuelve un numero "0" 
    let total = cart.reduce((total, { product, quantity }) => total + product.price * quantity, 0);

    // total que pagara el cliente
    const totalAmount = Number(total + envio - ajuste);

    // Formulas para aplicar los descuentos de Premiums

    let reductionP = cart.filter(producto => producto.product.category === "Alfajores Premium");

    let cantPrem = reductionP.reduce((cantPrem, { quantity }) => cantPrem + quantity, 0);
    let totalPrem = reductionP.reduce((totalPrem, { product, quantity }) => totalPrem + product.price * quantity, 0);

    // Formulas para aplicar los descuentos de Clasicos
    let reductionC = cart.filter(producto => producto.product.category === "Alfajores Clasicos");

    let cantClas = reductionC.reduce((cantClas, { quantity }) => cantClas + quantity, 0);
    let totalClas = reductionC.reduce((totalClas, { product, quantity }) => totalClas + product.price * quantity, 0);

    const ajusteAlfajores = () => {

        if (((cantClas >= 3 && cantPrem >= 3) && (cantClas < 6 && cantPrem < 6)) && (totalClas + totalPrem) >= 8.10) {
            setAjuste(0.60);
        } else if (((cantClas >= 6 && cantPrem >= 6) && (cantClas < 12 && cantPrem < 12)) && (totalClas + totalPrem) >= 16.20) {
            setAjuste(1.70)
        }
        // ajuste de 12 clasicos y 6 premium
        else if (((totalClas + totalPrem) >= 23.40) && ((totalClas + totalPrem) < 25.20)) {
            setAjuste(2.00);
        }
        // ajuste de 12 premium y 6 clasicos
        else if (((totalClas + totalPrem) >= 25.20)  && ((totalClas + totalPrem) < 32.40)) {
            setAjuste(2.30);
        }
        // ajuste de 12 premium y 12 clasicos
        else if (((totalClas + totalPrem) >= 32.40) && ((totalClas + totalPrem) < 39.59)) {
            setAjuste(3.40);
        }
        // ajuste de 18 clasicos y 12 premiums
        else if (((totalClas + totalPrem) >= 39.59) && ((totalClas + totalPrem) < 41.40))  {
            setAjuste(3.80);
        }
         // ajuste de 18 premium y 12 clasicos
         else if (((totalClas + totalPrem) >= 41.40) && ((totalClas + totalPrem) < 48.59))   {
            setAjuste(3.90);
        }
         // ajuste de 18 premium y 18 clasicos
         else if (((totalClas + totalPrem) >= 48.59) && ((totalClas + totalPrem) < 55.80))   {
            setAjuste(4.30);
        }
        // ajuste de 24 clsicos y 18 premiums
        else if (((totalClas + totalPrem) >= 55.80) && ((totalClas + totalPrem) < 57.59))   {
            setAjuste(5.40);
        }
          // ajuste de 24 premiums y 18 clasicos 
          else if (((totalClas + totalPrem) >= 57.59) && ((totalClas + totalPrem) < 64.80))  {
            setAjuste(5.70);
        }
        // ajuste de 24 premiums y 24 clasicos 
        else if ((totalClas + totalPrem) >= 64.80)  {
            setAjuste(6.80);
        }
        else if ((cantClas >= 6 && cantClas < 12) && (totalClas >= 7.19 && totalClas < 14.39)) {
            setAjuste(0.40);
        } else if (cantClas >= 12 && totalClas >= 14.39) {
            setAjuste(1.50);
        } else if ((cantPrem >= 6 && cantPrem < 12) && (totalPrem >= 9 && totalPrem < 18)) {
            setAjuste(0.50);
        } else if (cantPrem >= 12 && totalPrem >= 18) {
            setAjuste(1.90);
        } else {
            setAjuste(0);
        }
    }

    const mapCarrito = cart.map((productCart, i) => (<CardCarrito
        key={i} productCart={productCart}
        cart={cart} setCart={setCart}
        changeQuantity={changeQuantity}
    />
    ));

    const clearCart = () => {
        setCart([]);
    };

    const continueToBuy = () => {
        history.push('/productos');
        scrollToTop(0, 250);
    }

    const mapCompra = cart.map((productCart, i) => (<CardDataCompra
        key={i} productCart={productCart}
    />
    ));

    return (
        <Container>
            <h2 className="my-2" style={{ color: 'rgb(146, 210, 226)', fontFamily: 'Julius Sans One', fontWeight: 'bold' }}>Tu carrito</h2>
            <div>
                {cart.length !== 0 &&
                    <div className="d-flex justify-content-end align-items-center">
                        <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices /></button>
                    </div>
                }
                <div className="row justify-content-center align-items-center">
                    <div className="text-center" >
                        {cart.length === 0 ?
                            <Card className="text-center text-dark-50 p-5 m-5 no-results-card">
                                <Card.Title>Tu carrito esta vacio</Card.Title>
                            </Card>
                            :
                            <div className="d-flex justify-content-center">
                                <div className="col-12 col-lg-9 m-2">
                                    {mapCarrito}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="m-2 text-center col-12 col-lg-3" style={{ width: '18rem' }}>
                        <h3 style={{ color: 'black', fontFamily: 'Julius Sans One', fontWeight: 'bold' }}>SUBTOTAL: {total.toFixed(2)} € </h3>
                        <Card.Text>
                            <button onClick={continueToBuy} className="boton-artesanal-cel my-2" aria-label="Close">CONTINUA COMPRANDO</button>
                        </Card.Text>
                    </div>
                </div>
            </div>
            {/* PAGAR PRODUCTO ACORDION */}
            {cart.length !== 0 &&
                <Accordion className="mb-3">
                    <Accordion.Item className="accordion-buy" eventKey="0" onClick={ajusteAlfajores}>
                        <Accordion.Header>
                            Proceder a la compra
                        </Accordion.Header>
                        <Accordion.Body className="px-0">
                            <div className="row row-cols-1 row-cols-lg-2 mx-0 mt-3">
                                {/* LISTADO DE DATOS DE COMPRA */}
                                <div className="d-flex flex-column align-items-between datos-compra-div mx-auto">
                                    <h3 className="m-2 text-center ">DATOS DE LA COMPRA</h3>
                                    <div>
                                        {mapCompra}
                                    </div>
                                    <div className="m-2 d-flex justify-content-around pt-3 border-subtotal-total">
                                        <h5>SubTotal:</h5>
                                        <h5>{total.toFixed(2)} € </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around">
                                        <h5>Envio:</h5>
                                        <h5> {envio} € </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around">
                                        <h5>Descuento:</h5>
                                        <p style={{ color: 'green' }}>-{ajuste} €</p>
                                    </div>
                                    <div className="m-2 d-flex flex-column align-items-center pt-3 border-subtotal-total">
                                        <p className='descuento'>Haz click para conocer los <button className='btn-descuento' onClick={handleShowModalDescuento}> <b style={{ color: 'green' }} >descuentos</b> </button> por <b>Caja de Alfajores</b>, si es que realizo un pedido de 6u o 12u de diferente Tipo.</p>
                                        <button className='boton-artesanal-cel mb-1' onClick={ajusteAlfajores}>Ajustar</button>
                                    </div>

                                    <div className="m-2 d-flex justify-content-around pt-5 border-subtotal-total">
                                        <h3>Total</h3>
                                        <h3> {totalAmount.toFixed(2)} €</h3>
                                    </div>
                                </div>
                                <div>
                                    <BuyForm user={user} cart={cart} setEnvio={setEnvio} envio={envio} ajuste={ajuste} />
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

            <ModalDescuento
                closeModal={handleCloseModalDescuento}
                showModalDescuento={showModalDescuento}
            />

        </Container>
    );
}