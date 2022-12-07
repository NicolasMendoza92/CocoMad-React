
import { Accordion, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default function UploadProduts({ getProducts }) {

    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        imageDetail: "",
        category: "",
        price: "",
    });
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            setIsLoading(true);
            await axios.post("https://cocobackend.herokuapp.com/api/products/", input);
            swal("Excelente", "Producto agregado", "success");
            await getProducts();
            setIsLoading(false);
        }
        event.target.reset();
    };

    return (
        <>
            <Accordion>
                <Accordion.Item className="my-4" eventKey="0">
                    <Accordion.Header>
                        Cargar Producto
                    </Accordion.Header>
                    <Accordion.Body className="d-flex">
                        <Form
                            onSubmit={handleSubmit}
                            className="mt-5 p-5 mx-auto border-0"
                            style={{ width: "auto", background: "beige" }}
                        >
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="name">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            name="name"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            type="text"
                                            placeholder="Nombre"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="image">
                                        <Form.Label>Imagen</Form.Label>
                                        <Form.Control
                                            name="image"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="http://productos.jpg"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="imageDetail">
                                        <Form.Label>Imagen Detalle</Form.Label>
                                        <Form.Control
                                            name="imageDetail"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="http://productos.jpg"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="description">
                                        <Form.Label>Descripcion</Form.Label>
                                        <Form.Control
                                            name="description"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder=""
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className=" col-12 col-lg-6">
                                    <Form.Group className="d-flex flex-column" controlId="category">
                                        <Form.Label>Categoria</Form.Label>
                                        <select  name="category" onChange={(e) => handleChange(e)} defaultValue={'default'} required>
                                            <option value="default" disabled >Elige...</option>
                                            <option value="Alfajores Clasicos">Alfajores Clasicos</option>
                                            <option value="Alfajores Premium">Alfajores Premium</option>
                                            <option value="Alfajores Grandes">Alfajores Grandes</option>
                                            <option value="Tartas Medianas">Tartas Medianas</option>
                                            <option value="Bizcochos">Bizcochos</option>
                                            <option value="Salado">Salado</option>
                                            <option value="Desayunos">Desayunos </option>
                                            <option value="Box Armados">Box Armados</option>
                                        </select>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="price">
                                        <Form.Label>Precio</Form.Label>
                                        <Form.Control
                                            name="price"
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="$"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Button
                                    type="submit"
                                    className="mx-auto mt-5"
                                    disabled={isLoading}
                                >
                                    Agregar Producto
                                    {isLoading && (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    )}
                                </Button>
                            </Row>
                        </Form>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}
