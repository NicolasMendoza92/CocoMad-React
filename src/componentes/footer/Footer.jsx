
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
                && splitLocation[1] !== "deliveryList"
                &&
                <div className="mt-auto footer">
                    <div className="row text-center justify-content-around links mx-3">
                        <div className="d-flex flex-column align-items-center col-12 col-lg-3 my-2 p-2">
                            <p>SIGUENOS</p>
                            <hr />
                            <div className="my-2">
                                <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank" ><FaFacebookSquare className="social-icon" /> </a>
                                <a href="https://www.instagram.com/cocomadbakery/" target="blank"> <FaInstagramSquare className="social-icon" /> </a>
                            </div>
                            <div className="subtitle-footer mb-2">
                                <p>Busca nuestros productos en</p>
                                <a href="https://toogoodtogo.es/es/">TooGoodToGo</a> <br />
                                <a href="https://wa.me/c/34635790277" target="blank"> <FaWhatsapp className="social-icon-whats" /> Contactanos </a>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center col-12 col-lg-3 my-2 p-2">
                            <p>LINKS PARA NAVEGAR</p>
                            <hr />
                            <a href="/productos">PRODUCTOS</a>
                            <a href="/nosotros">NOSOTROS</a>
                            <a href="/contacto">CONTACTO</a>
                        </div>
                        <div className="d-flex flex-column align-items-center col-12 col-lg-3 my-2 p-2">
                            <p>VISITANOS</p>
                            <hr />
                            <div className="d-flex flex-column align-items-center direccion">
                                <p>Calle Evaristo San Miguel 9</p>
                                <p>Madrid 28008</p>
                                <p>España </p>
                                <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" target="blank" >Quiero Ir! <FaMapMarkerAlt /></a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between botom-footer">
                        <b>© 2019 CocoMad Bakery All rights reserved</b>
                        <button onClick={scrollToTop} className="volverArriba mt-2 mx-2"> <FaArrowUp /> </button>
                    </div>
                </div>
            }
            {splitLocation[1] === "productList" && <FooterAdmin />}
            {splitLocation[1] === "messageList" && <FooterAdmin />}
            {splitLocation[1] === "userList" && <FooterAdmin />}
            {splitLocation[1] === "saleList" && <FooterAdmin />}
            {splitLocation[1] === "deliveryList" && <FooterAdmin />}
        </>
    )
}
