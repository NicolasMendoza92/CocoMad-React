import React from 'react'
import { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import './productDetail.css';

export const ModalAlfajores = ({ handleCloseModalAlfajores, showModalAlfajores }) => {

    const [docena, setDocena] = useState('');
    const [tipo, setTipo] = useState('');

    const [input, setInput] = useState({
        Maizena: '0', Coco: '0', Avena: '0', CacaoAmargoyNuez: '0', Cafe: '0', Cookies: '0', PeanutButter: '0', Nuez: '0',
        Avellana: '0', cuantos: '0', tipo: '', bañados: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
        if (newInput.cuantos === "12") {
            setDocena("12");
        } else if (newInput.cuantos === "18") {
            setDocena("18");
        } else if (newInput.cuantos === "24") {
            setDocena("24");
        } else if (newInput.cuantos === "30") {
            setDocena("30");
        } else if (newInput.cuantos === "36") {
            setDocena("36");
        }
    };

    const handleTipo = (e) => {
        const { value, name } = e.target;
        const newTipo = { ...input, [name]: value };
        setInput(newTipo);
        if (newTipo.tipo === "Premium") {
            swal('El tipo del bañado de chocolate (blanco/leche) varia segun stock.')
            setTipo('Premium')
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const suma = (Number(input.Maizena) + Number(input.Coco) + Number(input.Avena) + Number(input.CacaoAmargoyNuez)
            + Number(input.Cafe) + Number(input.Cookies) + Number(input.PeanutButter) + Number(input.Nuez) + Number(input.Avellana))

        if (suma > Number(input.cuantos)) {
            swal('Oops! Te has pasado! Por favor pon la cantidad que elegiste')
        } else if (suma < Number(input.cuantos)) {
            swal('Oops! Parece que no has completado! Por favor pon la cantidad que elegiste')
        } else {
            swal('Excelente! Ya tienes tus sabores')

            const newBuyDetail = {
                bañados: input.bañados,
                tipo: input.tipo,
                cuantos: input.cuantos,
                Maizena: input.Maizena,
                Coco: input.Coco,
                Avena: input.Avena,
                CacaoAmargoyNuez: input.CacaoAmargoyNuez,
                Cafe: input.Cafe,
                Cookies: input.Cookies,
                PeanutButter: input.PeanutButter,
                Nuez: input.Nuez,
                Avellana: input.Avellana,
            }

            e.target.reset();
            setDocena('')
            setTipo('');
            handleCloseModalAlfajores();
            window.location.reload();
            console.log(newBuyDetail);
        }


    }
    return (
        <div>
            <Modal
                size="lg"
                show={showModalAlfajores}
                onHide={handleCloseModalAlfajores}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Elije tus sabores</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select name="tipo" className="col-12 col-md-9" onChange={(e) => handleTipo(e)} required>
                                <option value="" disabled selected >Elige el tipo...</option>
                                <option value="Clasicos">Clasicos</option>
                                <option value="Premium">Premiums</option>
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select name="cuantos" className="col-12 col-md-9" onChange={(e) => handleChange(e)} required>
                                <option disabled selected >Cuantos vas a Pedir...</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="24">24</option>
                                <option value="30">30</option>
                                <option value="36">36</option>
                            </select>
                        </Form.Group>
                        <div className='d-flex flex-wrap'>
                            <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Maizena
                                </Form.Label>
                                <Col >
                                    <Form.Control name="Maizena" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                                <Form.Label>
                                    Cookies
                                </Form.Label>
                                <Col >
                                    <Form.Control name="Cookies" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mb-3 mx-1" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Avena
                                </Form.Label>
                                <Col>
                                    <Form.Control name="Avena" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Coco
                                </Form.Label>
                                <Col >
                                    <Form.Control name="Coco" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Nuez
                                </Form.Label>
                                <Col >
                                    <Form.Control name="Nuez" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Cacao Amargo y Nueces
                                </Form.Label>
                                <Col >
                                    <Form.Control name="CacaoAmargoyNuez" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Avellana
                                </Form.Label>
                                <Col>
                                    <Form.Control name="Avellana" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Cafe
                                </Form.Label>
                                <Col>
                                    <Form.Control name="Cafe" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column mx-1 mb-3" controlId="formPlaintextPassword">
                                <Form.Label >
                                    Peanut Butter
                                </Form.Label>
                                <Col>
                                    <Form.Control name="PeanutButter" type="number" max="12" min="0" onChange={(e) => handleChange(e)} />
                                </Col>
                            </Form.Group>
                        </div>


                        {/* 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select name="saborEmpa" className="col-12 col-md-9" onChange={(e) => handleChange(e)} required>
                                <option value="" disabled selected={"Sabor..."}>Sabor...</option>
                                <option value="carne">Carne</option>
                                <option value="pollo">Pollo</option>
                                <option value="cebolla caramelizada y QC">Cebolla caramelizada y Queso de cabra</option>
                                <option value="puerro y provolone">Puerro y Provolone</option>
                                <option value="capresse">Capresse</option>
                                <option value="humita">Humita</option>
                                <option value="jamon y queso">Jamon y Queso</option>
                            </select>
                        </Form.Group> */}

                        <div>
                            {docena === "12" &&
                                <>
                                    <p>Tienes 12 sabores</p>
                                    <div className='d-flex flex-wrap lista-boxes'>
                                        {input.Maizena > 0 && <p> Maizena: {input.Maizena}</p>}
                                        {input.Coco > 0 && <p>Coco: {input.Coco}</p>}
                                        {input.Avena > 0 && <p>Avena: {input.Avena} </p>}
                                        {input.Cookies > 0 && <p>Cookies: {input.Cookies}</p>}
                                        {input.Nuez > 0 && <p>Nuez:{input.Nuez} </p>}
                                        {input.CacaoAmargoyNuez > 0 && <p>Cacao Amargo y Nuez:{input.CacaoAmargoyNuez}</p>}
                                        {input.Avellana > 0 && <p>Avellana:{input.Avellana}</p>}
                                        {input.Cafe > 0 && <p>Cafe:{input.Cafe}</p>}
                                        {input.PeanutButter > 0 && <p>Peanut Butter: {input.PeanutButter} </p>}
                                    </div>
                                </>
                            }
                            {docena === "18" &&
                                <>
                                    <p>Tienes 18 sabores</p>
                                    {input.Maizena > 0 && <p> Maizena: {input.Maizena} </p>}
                                    {input.Coco > 0 && <p>Coco: {input.Coco}</p>}
                                    {input.Avena > 0 && <p>Avena: {input.Avena} </p>}
                                    {input.Cookies > 0 && <p>Cookies: {input.Cookies}</p>}
                                    {input.Nuez > 0 && <p>Nuez:{input.Nuez} </p>}
                                    {input.CacaoAmargoyNuez > 0 && <p>Cacao Amargo y Nuez:{input.CacaoAmargoyNuez}</p>}
                                    {input.Avellana > 0 && <p>Avellana:{input.Avellana}</p>}
                                    {input.Cafe > 0 && <p>Cafe:{input.Cafe}</p>}
                                    {input.PeanutButter > 0 && <p>Peanut Butter: {input.PeanutButter} </p>}
                                </>
                            }
                            {docena === "24" &&
                                <>
                                    <p>Tienes 24 sabores</p>
                                    {input.Maizena > 0 && <p> Maizena: {input.Maizena} </p>}
                                    {input.Coco > 0 && <p>Coco: {input.Coco}</p>}
                                    {input.Avena > 0 && <p>Avena: {input.Avena} </p>}
                                    {input.Cookies > 0 && <p>Cookies: {input.Cookies}</p>}
                                    {input.Nuez > 0 && <p>Nuez:{input.Nuez} </p>}
                                    {input.CacaoAmargoyNuez > 0 && <p>Cacao Amargo y Nuez:{input.CacaoAmargoyNuez}</p>}
                                    {input.Avellana > 0 && <p>Avellana:{input.Avellana}</p>}
                                    {input.Cafe > 0 && <p>Cafe:{input.Cafe}</p>}
                                    {input.PeanutButter > 0 && <p>Peanut Butter: {input.PeanutButter} </p>}
                                </>
                            }
                            {docena === "30" &&
                                <>
                                    <p>Tienes 30 sabores</p>
                                    {input.Maizena > 0 && <p> Maizena: {input.Maizena} </p>}
                                    {input.Coco > 0 && <p>Coco: {input.Coco}</p>}
                                    {input.Avena > 0 && <p>Avena: {input.Avena} </p>}
                                    {input.Cookies > 0 && <p>Cookies: {input.Cookies}</p>}
                                    {input.Nuez > 0 && <p>Nuez:{input.Nuez} </p>}
                                    {input.CacaoAmargoyNuez > 0 && <p>Cacao Amargo y Nuez:{input.CacaoAmargoyNuez}</p>}
                                    {input.Avellana > 0 && <p>Avellana:{input.Avellana}</p>}
                                    {input.Cafe > 0 && <p>Cafe:{input.Cafe}</p>}
                                    {input.PeanutButter > 0 && <p>Peanut Butter: {input.PeanutButter} </p>}
                                </>
                            }
                            {docena === "36" &&
                                <>
                                    <p>Tienes 36 sabores</p>
                                    {input.Maizena > 0 && <p> Maizena: {input.Maizena} </p>}
                                    {input.Coco > 0 && <p>Coco: {input.Coco}</p>}
                                    {input.Avena > 0 && <p>Avena: {input.Avena} </p>}
                                    {input.Cookies > 0 && <p>Cookies: {input.Cookies}</p>}
                                    {input.Nuez > 0 && <p>Nuez:{input.Nuez} </p>}
                                    {input.CacaoAmargoyNuez > 0 && <p>Cacao Amargo y Nuez:{input.CacaoAmargoyNuez}</p>}
                                    {input.Avellana > 0 && <p>Avellana:{input.Avellana}</p>}
                                    {input.Cafe > 0 && <p>Cafe:{input.Cafe}</p>}
                                    {input.PeanutButter > 0 && <p>Peanut Butter: {input.PeanutButter} </p>}
                                </>
                            }
                        </div>
                        {tipo === "Premium" &&
                            <>
                                <p>Indica el sabor del bañado de chocolate (blanco/de leche) de tu pedido</p>
                                <Form.Group className="mb-3 align-items-center justify-content-center ">
                                    <Form.Control
                                        className="col-11 col-md-12"
                                        placeholder="Indica cantidad y tipo de baño"
                                        as="textarea"
                                        name="bañados"
                                        maxLength="100"
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>
                            </>
                        }

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div >
    )
}
