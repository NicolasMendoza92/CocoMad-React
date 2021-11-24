
import { FaArrowUp, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './footer.css';
import { useLocation } from 'react-router';
import { FooterAdmin } from './FooterAdmin';

export const Footer = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            {splitLocation[1] !== "productList"
                && splitLocation[1] !== "messageList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "saleList"
                &&
                <div className="mt-auto footer">
                    <div className="row text-center justify-content-center links mx-3">  
                        <div className="col-12 col-lg-3 my-4 p-2">
                            <p>REALIZA TU PEDIDO POR WHATSAPP</p>
                            <div className="mb-2">
                                <a href="https://wa.me/c/34635790277" target="blank" className="whatsapp"> <FaWhatsapp /> </a> <br />
                                +34635790277
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 my-4 p-2">
                            <div className="mb-2">
                                <p>SEGUINOS EN NUESTRAS REDES</p>
                                <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank" ><FaFacebookSquare className="social-icon" /> </a>
                                <a href="https://www.instagram.com/cocomadbakery/" target="blank"> <FaInstagramSquare className="social-icon" /> </a>
                            </div>
                            <p>RETIRA NUESTROS PRODUCTOS POR</p>
                            <div className="mb-2">
                                <a href="https://toogoodtogo.es/es/">TooGoodToGo</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 my-4 p-2">
                            <p>NUESTRA TIENDA</p>
                            <div className="">
                                <p>Calle Evaristo San Miguel 9 <br /> Madrid 28008 <br /> España</p> <br />
                                <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" target="blank" >Quiero Ir! <FaMapMarkerAlt /></a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between botom-footer">
                        <b>© 2019 CocoMad Bakery All rights reserved</b> 
                        <button onClick={scrollToTop} className="volverArriba mt-2"> <FaArrowUp /> </button>
                    </div>
                </div>
            }
            {splitLocation[1] === "productList" && <FooterAdmin />}
            {splitLocation[1] === "messageList" && <FooterAdmin />}
            {splitLocation[1] === "userList" && <FooterAdmin />}
            {splitLocation[1] === "saleList" && <FooterAdmin />}
        </>
    )
}
