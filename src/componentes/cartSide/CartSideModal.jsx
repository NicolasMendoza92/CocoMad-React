
import { Card } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import swal from 'sweetalert';

export const CartSideModal = ({ productCart, cart, setCart, changeQuantity }) => {

    const removeToCart = () => {
        const filterCart = cart.filter((prodCart) => prodCart.product._id !== productCart.product._id);
        setCart(filterCart);
    };

    const oneMore = () => {
        changeQuantity(productCart.product._id, productCart.quantity + 1);
        if (productCart.product.category ==="Alfajores Premium" && (productCart.quantity === 5 || productCart.quantity === 11)) {
          swal('Si su pedido es 6u o 12u del mismo sabor, por favor elija la opcion de Docena o Media Docena en el shop, para ajustar el precio');
        } else if (productCart.product.category ==="Alfajores Clasicos" && (productCart.quantity === 5 || productCart.quantity === 11)){
          swal('Si su pedido es 6u o 12u del mismo sabor, por favor elija la opcion de Docena o Media Docena en el shop, para ajustar el precio');
        } 
    
      };
    
      const oneLess = () => {
        changeQuantity(productCart.product._id, productCart.quantity - 1);
        if (productCart.product.category ==="Alfajores Premium" && (productCart.quantity === 7 || productCart.quantity === 13)) {
          swal('Si su pedido es 6u o 12u del mismo sabor, por favor elija la opcion de Docena o Media Docena en el shop, para ajustar el precio');
        } else if (productCart.product.category ==="Alfajores Clasicos" && (productCart.quantity === 7 || productCart.quantity === 13)){
          swal('Si su pedido es 6u o 12u del mismo sabor, por favor elija la opcion de Docena o Media Docena en el shop, para ajustar el precio');
        } 
      };

    const isCartZero = productCart.quantity <= 1;

    return (
        <div>
            <div className="row  row-cols-6 align-items-center">
                <Card.Img className="m-2 "
                    variant="top"
                    style={{ width: '7rem' }}
                    src={productCart.product.image}
                />
                <Card.Text className="text-center m-2 " >
                    {productCart.product.name}
                    <br />
                    <b className="mt-1">{productCart.product.price}€</b>
                </Card.Text>
                <div className="m-2 ">
                    <button
                        onClick={oneLess}
                        disabled={isCartZero}
                        className={isCartZero ? 'delete-cartItem-btn-modal' : 'agregar-sacar-btn-modal'}>-</button>
                    <h4>{productCart.quantity}</h4>
                    <button onClick={oneMore} className="agregar-sacar-btn-modal">+</button>
                </div>
                <div >
                        <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart} >
                            <MdOutlineClose />
                        </button>
                </div>
            </div>
                <hr />
        </div>
    )
}