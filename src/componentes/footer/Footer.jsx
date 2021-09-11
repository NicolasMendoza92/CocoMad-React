/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css';

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row text-center align-items-center">
                <div className="col-12 col-lg-4 my-4">
                    <div className="mb-2">
                        <h5>SEGUINOS EN NUESTRAS REDES</h5>
                        <a href="https://www.facebook.com/CocoMad-Bakery-825265017858105" target="blank"><i
                            className="fab fa-facebook-square social-icon"></i></a>
                        <a href="https://www.instagram.com/cocomadbakery/" target="blank"><i
                            className="fab fa-instagram-square social-icon"></i></a>
                    </div>
                    <h5>RETIRA NUESTROS PRODUCTOS POR</h5>
                    <div className="links mb-2">
                        <a href="https://toogoodtogo.es/es/" target="blank" ><i class="fas fa-dolly"></i>TooGoodToGo</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 my-4">
                    <h5>CONCATENOS</h5>
                    <div className="links mb-2">
                        <a href="https://wa.me/c/34635790277" target="blank" ><i class="far fa-envelope"></i>cocomadbakery@gmail.com</a><br />
                    </div>
                    <h5>REALIZA TU PEDIDO POR WHATSAPP</h5>
                    <div className="links mb-2">
                        <a href="https://wa.me/c/34635790277" target="blank" ><i class="fab fa-whatsapp"></i>+34635790277</a>
                    </div>
                </div>
                <div className="col-12 col-lg-4 my-4">
                    <h5>NUESTRA TIENDA</h5>
                    <div className="links">
                        <p>Calle Evaristo San Miguel
                            9 <br /> Madrid 28008 <br /> España</p> <br />
                        <a href="https://goo.gl/maps/UZGbBXefVtGrcYVs5" target="blank" ><i class="fas fa-map-marker-alt"></i>
                            ¡Quiero ir!</a>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <b>© 2019 CocoMad Bakery All rights reserved</b> <a href="#" target="blank" className="volverArriba mt-2"><i className="fas fa-chevron-circle-up"></i></a>
            </div>
        </div>
    )
}
