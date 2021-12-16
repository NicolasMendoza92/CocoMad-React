
import React from 'react';
import { Accordion, Card, Container} from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { useHistory } from 'react-router';
import { BuyForm } from '../componentes/carrito/BuyForm';
import { CardCarrito } from '../componentes/carrito/CardCarrito';
import { CardDataCompra } from '../componentes/carrito/CardDataCompra';

export default function Carrito({ cart, setCart, user }) {

  const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo(0, 250);
    };

    const changeQuantity = (_id, quantity) => {
        const updateCart = cart.map((productCart) => {
            if (productCart.product._id === _id) {
                return { ...productCart, quantity };
            }
            return productCart
        });
        setCart(updateCart);
    };

    let total = cart.reduce((total, { product, quantity }) => total + product.price * quantity, 0);

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
            <h2 className="my-2" style={{ color: 'rgb(146, 210, 226)', fontFamily:'Julius Sans One', fontWeight:'bold' }}>Tu carrito</h2>
            <div>
                {cart.length !==0 &&  
                <div className="d-flex justify-content-end align-items-center">
                        <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices /></button>
                </div>
                }
                <div className="row justify-content-center align-items-center">
                    <div className="text-center" >
                        {cart.length === 0 ?
                            <Card className="text-center text-dark-50 p-5 m-5 no-result-card">
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
                        <div>
                            <h2 style={{ color: 'black', fontFamily:'Julius Sans One', fontWeight:'bold' }}>TOTAL: ${total.toFixed(2)} </h2>
                            <Card.Text>
                                <button onClick={continueToBuy} className="boton-artesanal-cel my-2" aria-label="Close">CONTINUA COMPRANDO</button>
                            </Card.Text>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGAR PRODUCTO ACORDION */}
            {cart.length !== 0 &&
                <Accordion className="mb-3">
                    <Accordion.Item className="accordion-buy" eventKey="0">
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
                                        <h5>${total.toFixed(2)} </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around">
                                        <h5>Envio:</h5>
                                        <h5> $5 </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around pt-5 border-subtotal-total">
                                        <h3>Total</h3>
                                        <h3>$ {(5 + total).toFixed(2)}</h3>
                                    </div>
                                </div>
                                <div>
                                    <BuyForm user={user} cart={cart}/>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

        </Container>
  );
}