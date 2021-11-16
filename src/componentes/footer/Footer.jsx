/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaArrowUp, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import React from 'react'
import './footer.css';

export const  Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row text-center align-items-center">
                <div className="col-12 col-lg-4 my-4">
                    <div className="mb-2">
                        <h5>SEGUINOS EN NUESTRAS REDES</h5>
                        <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" ><FaFacebookSquare className="social-icon"/> </a>
                        <a href="https://www.instagram.com/cocomadbakery/"> <FaInstagramSquare className="social-icon"/> </a>
                    </div>
                    <h5>RETIRA NUESTROS PRODUCTOS POR</h5>
                    <div className="links mb-2">
                        <a href="https://toogoodtogo.es/es/">TooGoodToGo</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 my-4">
                    <h5>CONTACTENOS</h5>
                    <div className="links mb-2">
                        <a href="https://wa.me/c/34635790277"  ><GrMail/>cocomadbakery@gmail.com</a><br />
                    </div>
                    <h5>REALIZA TU PEDIDO POR WHATSAPP</h5>
                    <div className="links mb-2">
                        <a href="https://wa.me/c/34635790277"  ><FaWhatsapp/>+34635790277</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 my-4">
                    <h5>NUESTRA TIENDA</h5>
                    <div className="links">
                        <p>Calle Evaristo San Miguel
                            9 <br /> Madrid 28008 <br /> España</p> <br />
                        <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" >Quiero Ir! <FaMapMarkerAlt/></a>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <b>© 2019 CocoMad Bakery All rights reserved</b> <a className="volverArriba mt-2"> <FaArrowUp/> </a>
            </div>
        </div>
    )
}
